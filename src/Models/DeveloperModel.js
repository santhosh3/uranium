const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");
let ObjectId = mongoose.Schema.Types.ObjectId

let developerSchema= new mongoose.Schema(
    { 
        name:String,
		gender:{
            type : String,
            enum:["male","female","others"]
            },
		percentage:Number,
        batch:{
            type:ObjectId,
            ref:"batch", 
            required:true
           }
       }

, {timestamps : true})


module.exports = mongoose.model('NewDeveloper',developerSchema)