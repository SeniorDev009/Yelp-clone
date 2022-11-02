const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();

const app = express();


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`server is running in ${process.env.NODE_ENV} on port ${PORT}`)
})