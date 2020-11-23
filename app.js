const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const User = require('./user_model')
const mongoose = require('./db')
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