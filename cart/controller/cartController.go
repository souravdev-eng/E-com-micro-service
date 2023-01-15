package controller

import (
	"context"
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/souravdev-eng/ecom-cart/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func insertOneCart(cart models.Cart) {
	_, err := Collection.InsertOne(context.Background(), cart)
	ThrowError(err)
}

func getAllCart() []primitive.M {
	cursor, err := Collection.Find(context.Background(), bson.D{{}})
	ThrowError(err)
	var carts []primitive.M

	for cursor.Next(context.Background()) {
		var cart bson.M

		err := cursor.Decode(&cart)
		ThrowError(err)
		carts = append(carts, cart)
	}
	defer cursor.Close(context.Background())
	return carts
}

func deleteOneCart(cartId string) int64 {
	id, err := primitive.ObjectIDFromHex(cartId)
	ThrowError(err)
	filter := bson.M{"_id": id}
	data, err := Collection.DeleteOne(context.Background(), filter)
	ThrowError(err)
	return data.DeletedCount
}

func CreateOneCart(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Allow-Control-Allow-Methods", "POST")

	var cart models.Cart
	_ = json.NewDecoder(r.Body).Decode(&cart)
	insertOneCart(cart)
	json.NewEncoder(w).Encode(cart)
}

func GetAllCart(w http.ResponseWriter, _ *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Allow-Control-Allow-Methods", "POST")
	allCarts := getAllCart()
	json.NewEncoder(w).Encode(allCarts)
}

func DeleteOneCart(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Allow-Control-Allow-Methods", "DELETE")
	params := mux.Vars(r)

	deleteOneCart(params["id"])
	json.NewEncoder(w).Encode("Cart deleted successfully...")
}

func ThrowError(err error) {
	if err != nil {
		log.Fatal(err)
	}
}
