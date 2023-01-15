package controller

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const colCartName = "cart"

var Collection *mongo.Collection

func init() {

	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found")
	}

	uri := os.Getenv("MONGO_URI")
	if uri == "" {
		log.Fatal("MONGO URI not found")
	}

	dbName := os.Getenv("DB_NAME")

	if dbName == "" {
		log.Fatal("MONGO URI not found")
	}
	clientOption := options.Client().ApplyURI(uri)

	client, err := mongo.Connect(context.TODO(), clientOption)
	ThrowError(err)

	fmt.Println("DB connected successfully...")
	Collection = client.Database(dbName).Collection(colCartName)
	fmt.Println("Collection instance is ready...")
}
