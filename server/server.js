const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

app.use((req, res, next) => {
    console.log("Middleware");
    next();
})

// Get all Restaurants
app.get("/api/v1/restaurants", (req, res) => {
    console.log("get all restaurants");
    res.status(200).json({
        status: 200,
        data: {
            restaurant: ["mcondlads", "wendys"]
        }
    });
});

// Get a Restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params);
});

// Create a Restaurant
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req)
})
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`server is running in ${process.env.NODE_ENV} on port ${PORT}`)
})