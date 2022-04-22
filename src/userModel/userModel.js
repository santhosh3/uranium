
const mongoose = require('mongoose');

const JWTSchema = new mongoose.Schema( {
    firstName : String,
    lastName : String,
    mobile : String,
    emailId : String,
    password : String,
    gender : {
        type : String,
        enum : ['male','female','others']
    },
    isDeletes : {
        type : Boolean,
        default : false
    },
    age: Number,
}, { timestamps: true });

module.exports = mongoose.model('userJWT', JWTSchema)