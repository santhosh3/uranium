const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('./routes/route.js');

const app = express();

const multer= require("multer");
const { AppConfig } = require('aws-sdk');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use( multer().any())



mongoose.connect("mongodb+srv://nikhil:borat123@nikhil.9dosz.mongodb.net/Project3", {
    useNewUrlParser: true
})


.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
