const express = require('express');
const router = express.Router();

const Controller= require("../controllers/Controller")
const { route } = require('express/lib/application');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

 router.post("/createBatches", Controller.createBatches)
 router.post('/createDeveloper', Controller.createDeveloper)
 router.get('/getDetails', Controller.getDetails)
 router.get('/scholarship_developers',Controller.scholarship_developers)
 router.get('/developers',Controller.developers)
 router.get('/updateData',Controller.updateData)

module.exports = router;