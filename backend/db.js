
const mongoose = require('mongoose')
const connectionString = 'mongodb://mongodb0.example.com:27017/BookLibrary'

// Connecting to MongoDB localhost
mongoose.connect(connectionString, {useNewUrlParser: true}, (err) => {
    if (!err){
        console.log('Successfully Established Connection with MongoDB')  
    } 
    else {
        console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
    }   
    });
    module.exports = mongoose;
