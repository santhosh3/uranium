
const BatchController = require('../Models/BatchModel');

let createbatch = async function(req,res){
    let data = req.body
    let batch = await BatchController.create(data)
    res.send({msg:batch})
} 
module.exports.createbatch = createbatch 