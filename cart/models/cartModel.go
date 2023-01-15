package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Cart struct {
	ID    primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Name  string             `json:"name,omitempty"`
	Image string             `json:"image,omitempty"`
	Price int                `json:"price,omitempty"`
}
