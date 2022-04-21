const express = require('express');
const moment = require('moment');
const router = express.Router();
var address = require('address')

const Controller= require("../controllers/Controller")
const { route } = require('express/lib/application');
const commonMw = require('../middlewares/commonMiddlewares')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post('/createUser' ,commonMw.mid1, Controller.createUser)
router.post('/createProduct', Controller.createProduct)
router.post('/createOrder',commonMw.mid1,Controller.createOrder)
module.exports = router;