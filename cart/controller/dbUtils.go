package controller

import (
	"context"
	"fmt"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const colCartName = "cart"

var Collection *mongo.Collection

func init() {

	clientOption := options.Client().ApplyURI(os.Getenv("MONGO_URI"))

	client, err := mongo.Connect(context.TODO(), clientOption)
	ThrowError(err)

	fmt.Println("DB connected successfully...")
	Collection = client.Database(os.Getenv("DB_NAME")).Collection(colCartName)
	fmt.Println("Collection instance is ready...")
}
