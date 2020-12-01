const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = express.Router();

//Authentication 
const passport = require("passport")

// Model
const User = require('./models/user_model')
const Book = require('./models/book_model')

// const auth = require("./auth/verify-token")
const mongoose = require('./db')
app.use(bodyParser.json())

// Routes
app.use("/", router)
app.use("/users", require("./routes/user_route"))
app.use("/books", require("./routes/book_route"))

// Parsing the request using bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.json({"message": "Congratulations! you are working great!"});
});

// Webserver
webServerPort = 8000
app.listen(webServerPort, () => {
    console.log(`Book library server is up on port ${webServerPort}.`)
})