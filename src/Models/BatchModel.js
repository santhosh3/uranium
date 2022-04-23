const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");


let batchSchema = new mongoose.Schema(
    {
         name:String,
         size: Number,
       program :{
           type : String,
           enum :["backend", "frontend"]
       }
    },{timestamps : true}
)
module.exports = mongoose.model('NewBatche',batchSchema)