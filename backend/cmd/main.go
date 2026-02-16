package main

import (
	"context"

	"log"
	"net/http"

	"github.com/go-chi/chi/v5"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	handler "main.go/handlers"
	middleware "main.go/middleware"
)

var studentCollection *mongo.Collection

func main() {
	client, err := mongo.Connect(context.Background(), options.Client().ApplyURI("mongodb+srv://karthikreddykarri21_db_user:YVEDWF2OkLejCoO1@cluster0.7eahhhp.mongodb.net/?appName=Cluster0"))
	if err != nil {
		log.Println("Mongo Insert Error:", err)
		panic(err)
	}
	studentCollection = client.Database("loan").Collection("student")
	log.Println("connected to mongodb")
	h := handler.NewHandler(studentCollection)
	r := chi.NewRouter()
	r.Use(middleware.CORSMiddleware)
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello world"))
	})
	r.Post("/loan", h.LoanApplications)
	r.Get("/loan-applications", h.GetLoanApplications)
	r.Get("/loan-application/{applicationnumber}", h.GetLoanApplicationById)
	r.Get("/stats", h.GetApplicationsStats)

	http.ListenAndServe(":8080", r)
}
