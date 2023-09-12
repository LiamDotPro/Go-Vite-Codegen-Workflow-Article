package main

import (
	_ "backend/docs" // Adjust the import path to point to your docs directory
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	swaggerFiles "github.com/swaggo/files"
	"github.com/swaggo/gin-swagger"
)

// @title Swagger Example API
// @version 1.0
// @description This is a sample server for a dummy endpoint.
// @host localhost:8080
// @BasePath /
func main() {
	r := gin.Default()

	// Allow our frontend to talk to the api
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:8080", "http://localhost:5173"} // Replace with the origin you want to allow
	config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}
	config.AllowHeaders = []string{"Authorization", "Content-Type"}
	r.Use(cors.New(config))

	// Set up Swag's gin-swagger middleware
	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	r.GET("/dummy/:id", DummyEndpoint)

	r.Run()
}
