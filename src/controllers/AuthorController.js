const authorcontroller = require("../Models/AuthorModel")
let createAuthor = async function(req,res){

    let authorData = req.body;
    let saveAuthorData = await authorcontroller.create(authorData);
    res.send({msg : saveAuthorData})
    
    }
    module.exports.createAuthor =createAuthor;