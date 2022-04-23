const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");


let publisherSchema = new mongoose.Schema(
    {        
        PublisherName:String,
        headQuarte : String
    }
)
module.exports = mongoose.model('Newpublisher',publisherSchema)