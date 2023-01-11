package routes

import (
	"github.com/gorilla/mux"
	"github.com/souravdev-eng/ecom-cart/controllers"
)

func Router() *mux.Router {
	router := mux.NewRouter()
	router.Use(mux.CORSMethodMiddleware(router))

	router.HandleFunc("/api/cart", controllers.GetAllCart).Methods("GET")

	return router

}
