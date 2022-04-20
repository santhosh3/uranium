const express = require('express');
const moment = require('moment');
const router = express.Router();
var address = require('address')

const Controller= require("../controllers/Controller")
const { route } = require('express/lib/application');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// const mid1 = function(req,res,next)
// {
//     console.log("Hi I am middleware named mid1")
//     let loggedIn = true
//     if(loggedIn == true)
//     {
//        var CurrentDate = moment().format("YYYY-MM-DD hh:mm:ss");
//        console.log(CurrentDate,  '  ',  address.ip())
//         next()
//     }
//     else{
//         res.send("please login or register")
//     }
// }
// const mid2 = function(req,res,next)
// {
//     var CurrentDate = moment().format("YYYY-MM-DD hh:mm:ss");
//     console.log(CurrentDate,  '  ',  address.ip())
//     next()
// }
// const mid3 = function(req,res,next)
// {
//     var CurrentDate = moment().format("YYYY-MM-DD hh:mm:ss");
//     console.log(CurrentDate,  '  ',  address.ip())
//     next()
// }
//  router.get('/basicCode', mid1,mid2,mid3, Controller.basicCode)  

   router.get('/basicCode', Controller.basicCode)
   router.get('/basicApi', Controller.basicCode)
   router.get('/Present' , Controller.basicCode)

module.exports = router;