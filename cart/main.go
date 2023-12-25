package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/souravdev-eng/ecom-cart/routes"
)

func main() {
	fmt.Println("Server is getting started...")
	r := routes.Router()

	log.Fatal(http.ListenAndServe(":3000", r))
}
