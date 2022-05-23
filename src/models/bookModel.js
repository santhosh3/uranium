const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    title: {
         type: String, 
         unique: true 
        },
    bookCover:{
            type: String,
            trim: true
          },
    excerpt: { 
         type: String
        },
    ISBN: { 
         type: String, 
         unique:true
        },
    category: { 
         type: String, 
         },
    subcategory: [{
         type: String, 
         trim: true, 
        }],
    reviews: {
         type: Number, 
         default: 0 
        },
    deletedAt: Date, 
    isDeleted: { 
        type: Boolean, 
        default: false 
       },
    releasedAt: { 
        type: String, 
        default: null },
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //books