const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");
let ObjectId = mongoose.Schema.Types.ObjectId

let bookSchema= new mongoose.Schema(
    { 
         name:String,
        author:{
                   type:ObjectId,
                   ref:"author",
                   required:true
               },
        price:Number,
        ratings:Number,
        publisher:{
                    type : ObjectId,
                    ref : "publisher",
                    required:true
        },
        isHardCover:{
                    type:Boolean,
                    default:false
        }
    }

, {timestamps : true})


module.exports = mongoose.model('Newbook',bookSchema)