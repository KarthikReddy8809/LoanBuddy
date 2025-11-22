package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type StudentDetails struct {
	ApplicationNumber  string `json:"applicationnumber" bson:"applicationnumber"`
	Name               string `json:"name" bson:"name"`
	Email              string `json:"email" bson:"email"`
	Phone              string `json:"phone" bson:"phone"`
	Dob                string `json:"dob" bson:"dob"`
	Gender             string `json:"gender" bson:"gender"`
	Address            string `json:"address" bson:"address"`
	StudentId          string `json:"studentid" bson:"studentid"`
	Course             string `json:"course" bson:"course"`
	Branch             string `json:"branch" bson:"branch"`
	Year               string `json:"year" bson:"year"`
	CGPA               string `json:"cgpa" bson:"cgpa"`
	EAMCETRank         string `json:"eamcetrank" bson:"eamcetrank"`
	University         string `json:"university" bson:"university"`
	ParentName         string `json:"parentname" bson:"parentname"`
	ParentOccupation   string `json:"parentoccupation" bson:"parentoccupation"`
	AnnualFamilyIncome string `json:"annualfamilyincome" bson:"annualfamilyincome"`
	LoanAmountRequired string `json:"loanamountrequired" bson:"loanamountrequired"`
	PurposeOfLoan      string `json:"purposeofloan" bson:"purposeofloan"`
	Status             string `json:"status" bson:"status"`
}

var studentCollection *mongo.Collection

func GetNextSequenceValue(key string) (int64, error) {
	filter := bson.M{"_id": key}
	update := bson.M{"$inc": bson.M{"sequence_value": 1}}
	opts := options.FindOneAndUpdate().SetReturnDocument(options.After).SetUpsert(true)

	var result struct {
		SequenceValue int64 `bson:"sequence_value"`
	}

	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	err := studentCollection.Database().Collection("counters").
		FindOneAndUpdate(ctx, filter, update, opts).
		Decode(&result)

	if err != nil {
		return 0, err
	}

	return result.SequenceValue, nil
}

func GenerateApplicationNumber(seq int64) string {
	year := time.Now().Year()
	return fmt.Sprintf("APP-%d-%06d", year, seq)
}

func main() {
	client, err := mongo.Connect(context.Background(), options.Client().ApplyURI("mongodb+srv://karthikreddykarri21_db_user:YVEDWF2OkLejCoO1@cluster0.7eahhhp.mongodb.net/?appName=Cluster0"))
	if err != nil {
		log.Println("Mongo Insert Error:", err)
		panic(err)
	}
	studentCollection = client.Database("loan").Collection("student")
	log.Println("connected to mongodb")
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello world"))
	})
	r.Post("/loan", LoanApplications)
	r.Get("/loan-applications", GetLoanApplications)
	r.Get("/loan-application/{applicationnumber}", GetLoanApplicationById)

	http.ListenAndServe(":8080", r)
}

func LoanApplications(w http.ResponseWriter, r *http.Request) {
	var student StudentDetails

	err := json.NewDecoder(r.Body).Decode(&student)
	if err != nil {
		http.Error(w, "Invalid JSON", http.StatusBadRequest)
		return
	}
	seq, err := GetNextSequenceValue("applicationnumber")
	if err != nil {
		http.Error(w, "Failed to generate application number", http.StatusInternalServerError)
		return
	}
	student.ApplicationNumber = GenerateApplicationNumber(seq)
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	result, err := studentCollection.InsertOne(ctx, student)
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

func GetLoanApplications(w http.ResponseWriter, r *http.Request) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	cursor, err := studentCollection.Find(ctx, bson.M{})
	if err != nil {
		log.Println("Mongo Find Error:", err)
		http.Error(w, "Failed to find", http.StatusInternalServerError)
		return
	}
	defer cursor.Close(ctx)
	var students []StudentDetails
	for cursor.Next(ctx) {
		var student StudentDetails
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

func GetLoanApplicationById(w http.ResponseWriter, r *http.Request) {

}
