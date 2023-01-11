package utils

import (
	"context"
	"fmt"
	"log"
	"os"
	"time"

	"github.com/joho/godotenv"
	"github.com/souravdev-eng/ecom-cart/models"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	_ "go.mongodb.org/mongo-driver/x/mongo/driver/mongocrypt/options"
)

const dbName = "ecom-cart"
const colName = "cart"

var collection *mongo.Collection

func Init() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found")
	}

	uri := os.Getenv("MONGO_URI")
	if uri == "" {
		log.Fatal("MONGO URI not found")
	}

	// client options
	clientOption := options.Client().ApplyURI(uri)
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	// connect to mongodb
	client, err := mongo.Connect(ctx, clientOption)

	defer func() {
		if err = client.Disconnect(ctx); err != nil {
			panic(err)
		}
	}()

	fmt.Println("MongoDB connection successful")
	collection = client.Database(dbName).Collection(colName)
}

func insertOneCart(cart models.Cart) {
	data, err := collection.InsertOne(context.Background(), cart)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Inserted one cart data", data.InsertedID)

}
