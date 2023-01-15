package routes

import (
	"github.com/gorilla/mux"
	"github.com/souravdev-eng/ecom-cart/controller"
)

func Router() *mux.Router {
	router := mux.NewRouter()

	router.HandleFunc("/api/cart", controller.CreateOneCart).Methods("POST")
	router.HandleFunc("/api/cart", controller.GetAllCart).Methods("GET")
	router.HandleFunc("/api/cart/{id}", controller.DeleteOneCart).Methods("DELETE")

	return router
}
