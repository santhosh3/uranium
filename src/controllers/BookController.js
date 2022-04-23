const bookModel = require("../Models/BookModel");
const authorcontroller = require("../Models/AuthorModel")
const publisherController = require('../Models/PublisherModel');

const mongoose = require('mongoose')
const isValidObjectId = function (ObjectId) {
   return mongoose.Types.ObjectId.isValid(ObjectId)
       }

 let createBooks =async function(req,res)
 {
   let book = req.body
   let authorId = book.author
   let publisherId = book.publisher
   
   if(!authorId)
        { 
            return res.send({msg:"author ID is required "});
        }
  if(!isValidObjectId(authorId))
         {
            return res.send({msg:"invalid autherId"})
         }
  if(!publisherId) 
        {
           return res.send({msg:"publisher ID is required"});
        }

  if(!isValidObjectId(publisherId))
         {
            return res.send({msg:"invalid publisherId"})
         }

    let addBook = await bookModel.create(book);
    res.send({msg:addBook})
}
const bookDetails= async function (req, res) 
{
    let books = await bookModel.find().populate("author publisher") 
    res.send({data: books})
}

const updateByPublisher = async function (req,res)
{
    const pub = await publisherController.find({$and: [{PublisherName:"Penguin"},{PublisherName:"HarperCollins"}]}).select({_id:1})
    for(let i =0; i<pub.length; i++)
    {
         await bookModel.updateMany({publisher: pub[i]._id}, {isHardCover: true}) 
    } 
    res.send({msg:"done"})
 }

 const updateByRating = async function (req,res)
 {
    const auth = await authorcontroller.find({rating:{$gt:3.5}}).select({_id:1})
    for(let i =0; i<auth.length; i++)
    {  
         await bookModel.updateMany({author: auth[i]._id}, { $inc: {price:10}})
    } 
    res.send({msg: auth})
 }

 
module.exports = { createBooks, bookDetails, updateByPublisher, updateByRating };
    
    