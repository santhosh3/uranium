const { count } = require("console")
const bookModel = require("../models/bookModel");
const authorModel = require("../models/authorModel")

const createNewAuthor = async function (req, res)
{
    const data = req.body;
    const SavedData = await authorModel.create(data)
    res.send({msg : SavedData})
}

const createNewBook = async function (req, res)
{
    const data = req.body;
    const SavedData = await bookModel.create(data)
    res.send({msg : SavedData})
}

const allBooks =async function (req,res)
{
    const authorDetails = await authorModel.find({author_name: "Chetan Bhagat"})
    const id = authorDetails[0].author_id
    const booksName = await bookModel.find({author_id: id}).select({name:1})
    res.send({msg: booksName})
}

const updatedBookPrice = async function(req, res)
{
    const bookDetails = await bookModel.find({name:"Two states"})
    const id = bookDetails[0].author_id
    const authorN = await authorModel.find({author_id:id}).select({author_name:1, _id:0})
    const bkName = bookDetails[0].name
    const updatedPrice = await bookModel.findOneAndUpdate({name:bkName}, {price:100}, {new:true}).select({price:1, _id:0})
    res.send({msg:authorN, updatedPrice})
}

const authorName = async function(req,res)
{
    const bookId = await bookModel.find({$gte:50,$lte:100}).select({author_id:1,_id:0})
    const id = bookId.map(x => x.author_id)
    let temp =[]
    for(let i=0; i<id.length; i++)
    {
        let x = id[i]
        const author = await authorModel.find({author_id:x}).select({author_name:1, _id:0})
        temp.push(author)
    }
    const authorName = temp.flat()
    res.send({msg: authorName})
}

module.exports.createNewBook = createNewBook
module.exports.createNewAuthor = createNewAuthor
module.exports.allBooks = allBooks
module.exports.updatedBookPrice = updatedBookPrice
module.exports.authorName = authorName