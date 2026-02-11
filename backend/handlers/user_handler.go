package handler

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/go-chi/chi/v5"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	model "main.go/models"
)

type Handler struct {
	StudentCollection *mongo.Collection
}

func NewHandler(studentCollection *mongo.Collection) *Handler {
	return &Handler{
		StudentCollection: studentCollection,
	}
}

func (h *Handler) GetNextSequenceValue(key string) (int64, error) {
	filter := bson.M{"_id": key}
	update := bson.M{"$inc": bson.M{"sequence_value": 1}}
	opts := options.FindOneAndUpdate().SetReturnDocument(options.After).SetUpsert(true)

	var result struct {
		SequenceValue int64 `bson:"sequence_value"`
	}

	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	err := h.StudentCollection.Database().Collection("counters").
		FindOneAndUpdate(ctx, filter, update, opts).
		Decode(&result)

	if err != nil {
		return 0, err
	}

	return result.SequenceValue, nil
}

func (h *Handler) GenerateApplicationNumber(seq int64) string {
	year := time.Now().Year()
	return fmt.Sprintf("APP-%d-%06d", year, seq)
}
func (h *Handler) LoanApplications(w http.ResponseWriter, r *http.Request) {
	var student model.StudentDetails
	err := json.NewDecoder(r.Body).Decode(&student)
	if err != nil {
		http.Error(w, "Invalid JSON", http.StatusBadRequest)
		return
	}
	fmt.Println("studentdetails", student)
	seq, err := h.GetNextSequenceValue("applicationnumber")
	if err != nil {
		http.Error(w, "Failed to generate application number", http.StatusInternalServerError)
		return
	}
	student.ApplicationNumber = h.GenerateApplicationNumber(seq)
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	result, err := h.StudentCollection.InsertOne(ctx, student)
	if err != nil {
		log.Println("Mongo Insert Error:", err)
		http.Error(w, "Failed to insert", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]any{
		"message":           "Student added successfully",
		"id":                result.InsertedID,
		"applicationnumber": student.ApplicationNumber,
	})
}

func (h *Handler) GetLoanApplications(w http.ResponseWriter, r *http.Request) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	cursor, err := h.StudentCollection.Find(ctx, bson.M{})
	if err != nil {
		log.Println("Mongo Find Error:", err)
		http.Error(w, "Failed to find", http.StatusInternalServerError)
		return
	}
	defer cursor.Close(ctx)
	var students []model.StudentDetails
	for cursor.Next(ctx) {
		var student model.StudentDetails
		err := cursor.Decode(&student)
		if err != nil {
			log.Println("Mongo Decode Error:", err)
			http.Error(w, "Failed to decode", http.StatusInternalServerError)
			return
		}
		students = append(students, student)
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(students)
}

func (h *Handler) GetLoanApplicationById(w http.ResponseWriter, r *http.Request) {
	var document model.StudentDetails
	id := chi.URLParam(r, "applicationnumber")
	filter := bson.M{"applicationnumber": id}
	err := h.StudentCollection.FindOne(context.Background(), filter).Decode(&document)
	if err != nil {
		http.Error(w, "Failed to find", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(document)
}

func (h *Handler) GetApplicationsStats(w http.ResponseWriter, r *http.Request) {
	totalApplications, err := h.StudentCollection.CountDocuments(context.Background(), bson.M{})
	if err != nil {
		log.Fatal(err)
	}
	pendingApplications, err := h.StudentCollection.CountDocuments(context.Background(), bson.M{"status": "pending"})
	if err != nil {
		log.Fatal(err)
	}
	approvedApplications, err := h.StudentCollection.CountDocuments(context.Background(), bson.M{"status": "approved"})
	if err != nil {
		log.Fatal(err)
	}
	rejectedApplications, err := h.StudentCollection.CountDocuments(context.Background(), bson.M{"status": "rejected"})
	if err != nil {
		log.Fatal(err)
	}
	stats := model.ApplicationStats{
		TotalApplications: int(totalApplications),
		Pending:           int(pendingApplications),
		Approved:          int(approvedApplications),
		Rejected:          int(rejectedApplications),
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(stats)

}
