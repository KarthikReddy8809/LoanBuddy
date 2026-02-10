package controller

import (
	"context"
	"fmt"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	model "main.go/models"
)

const connectionString = "mongodb+srv://karthikreddykarri21_db_user:YVEDWF2OkLejCoO1@cluster0.7eahhhp.mongodb.net/?appName=Cluster0"
const dbName = "loan"
const collName = "student"

var collection *mongo.Collection

func init() {
	clientOption := options.Client().ApplyURI(connectionString)

	client, err := mongo.Connect(context.TODO(), clientOption)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("mongodb connection success")

	collection = client.Database(dbName).Collection(collName)

	fmt.Println("collection instance is ready")
}

func insertOneApplication(application model.StudentDetails) {
	inserted, err := collection.InsertOne(context.TODO(), application)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("inserted id:", inserted.InsertedID)
}
