const express = require('express');
const logger = require('./logger');
const randomController = require("../controllers/randomControllers");

const router = express.Router();

router.post('/test-me', function (req, res) {
    let data = req.data
    console.log(data)
    res.send({msg:"my 2nd post api"});
});
router.post('/test-post2',function (req,res){
    let array = [2, 5, 6, 8, 9, 10]
    res.send({msg:"post req 3", data:array})
});
//router.post('/test-post3',randomController.addToArray);

router.post('/test-post4',function (req,res){
    randomController.welcomeMessage();
});

router.post('/players',randomController.players);

module.exports = router;
// adding this comment for no reason