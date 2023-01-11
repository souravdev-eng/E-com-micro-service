package main

import (
	"log"
	"net/http"

	"github.com/souravdev-eng/ecom-cart/routes"
	"github.com/souravdev-eng/ecom-cart/utils"
)

func main() {
	utils.Init()
	log.Fatal(http.ListenAndServe(":4000", routes.Router()))
}
