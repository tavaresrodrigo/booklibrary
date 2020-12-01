const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = express.Router();
const User = require('./models/user_model')
const Book = require('./models/book_model')
// const auth = require("./auth/verify-token")
const mongoose = require('./db')
app.use(bodyParser.json())
app.use("/", router)
app.use("/users", require("./routes/user_route"))
app.use("/books", require("./routes/book_route"))
webServerPort = 8000

// Parsing the request using bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.json({"message": "Congratulations! you are working great!"});
});

// Webserver
app.listen(webServerPort, () => {
    console.log(`Book library server is up on port ${webServerPort}.`)
})