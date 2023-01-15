package controller

import (
	"context"
	"fmt"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const connectionString = "mongodb+srv://sourav:Iamdeveloper1$@cluster0.tjwqlm6.mongodb.net/?retryWrites=true&w=majority"
const dbName = "ecom-cart"
const colCartName = "cart"

var Collection *mongo.Collection

func init() {
	clientOption := options.Client().ApplyURI(connectionString)

	client, err := mongo.Connect(context.TODO(), clientOption)
	ThrowError(err)

	fmt.Println("DB connected successfully...")
	Collection = client.Database(dbName).Collection(colCartName)
	fmt.Println("Collection instance is ready...")
}
