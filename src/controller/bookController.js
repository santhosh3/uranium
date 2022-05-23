const mongoose = require("mongoose")
const aws = require("../aws/aws")
const booksModel = require("../models/bookModel")


const createBooks = async function (req, res) {
    try {
        let reqbody = req.body
        let files = req.files

        if (files && files.length > 0) { 
            let uploadedFileURL = await aws.uploadFile(files[0])
            reqbody.bookCover = uploadedFileURL;
        } else {
            res.status(400).send({ msg: "profileImage is required" })
        }
         
        const book = await booksModel.create(reqbody)
        return res.status(201).send({ status: true, message: "Book is created successfully", data: book })
    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message })
    }
}

module.exports = {createBooks}