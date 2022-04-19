const batchesModel = require("../models/batchesModel")
const developerModel= require("../models/developerModel")

const createBatches= async function (req, res) 
{
    let data = req.body
    let batches = await batchesModel.create(data)
    res.send({data: batches})
}

module.exports.createBatches= createBatches

const createDeveloper= async function (req, res) 
{
    let data = req.body
    let developer = await developerModel.create(data)
    res.send({data: developer})
}

module.exports.createDeveloper= createDeveloper

const getDetails = async function (req,res)
{
    let books = await developerModel.find().populate('batch')
    res.send({data: books})
}
module.exports.getDetails = getDetails

const scholarship_developers = async function (req,res)
{
    let ans = await developerModel.find({gender : "female", percentage: {$gt : 70}})
    res.send({data : ans})
}
module.exports.scholarship_developers = scholarship_developers

const updateData = async function(req,res)
{
    let abc = await developerModel.findOneAndUpdate({name : "santhosh"},{$set : {percentage : 70}},{new : true, upsert:true})
}
module.exports.updateData = updateData

const developers = async function (req,res)
{
    let ans1 = await developerModel.find({}).select({percentage:1})
    res.send({data : ans1})
}
module.exports.developers = developers


