package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive" // primitive give us the MongoDB "_id"
)

type Product struct {
	ID    primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Title string             `json:"title,omitempty"`
	Price string             `json:"price,omitempty"`
	Stock int                `json:"stock,omitempty"`
	Image string             `json:"image,omitempty"`
}

type User struct {
	ID    primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Email string             `json:"email,omitempty"`
	Name  string             `json:"name,omitempty"`
}

type Cart struct {
	ID        primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Product   *Product           `json:"product,omitempty"`
	User      *User              `json:"user,omitempty"`
	Quantity  int                `json:"quantity,omitempty"`
	CreatedAt time.Time          `json:"created_at"`
	UpdatedAt time.Time          `json:"updated_at"`
}
