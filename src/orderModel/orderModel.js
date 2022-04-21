

const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    userId : {
        type: ObjectId,
        ref: "userModel"
    },
    productId : {
        type : ObjectId,
        ref : "productModel"
    },
    amount : Number,
    isFreeAppUser :  Boolean,
    Date : Date

}, { timestamps: true });


module.exports = mongoose.model('orderModel', orderSchema)
