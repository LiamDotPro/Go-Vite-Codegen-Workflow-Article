package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

// DummyEndpoint
// @Summary Dummy endpoint
// @Description Fetch data from dummy endpoint
// @tags Dummy
// @ID dummy-endpoint
// @Accept  json
// @Produce  json
// @Param id path int true "Some ID"
// @Success 200 {object} map[string]interface{}
// @Router /dummy/:id [get]
func DummyEndpoint(c *gin.Context) {
	id := c.Param("id")
	data := map[string]interface{}{
		"ID":   id,
		"Name": "Dummy Data",
	}
	c.JSON(http.StatusOK, data)
}
