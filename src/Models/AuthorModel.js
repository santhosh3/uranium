const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");


let authorSchema= new mongoose.Schema(
      {    
        author_name:String,
        age:Number,
        address:String,
        rating:Number
    },{timestamps : true}
)

module.exports = mongoose.model('Newauthor',authorSchema)