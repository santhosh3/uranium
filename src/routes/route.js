const express = require('express');
const moment = require('moment');
const router = express.Router();
var address = require('address')

const Controller= require("../controllers/Controller")
const { route } = require('express/lib/application');


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", Controller.createUser)

router.post("/login", Controller.loginUser)

router.get("/users/:userId", Controller.getUserData)

router.put("/users/:userId", Controller.updateUser)

router.delete("/delete/:userId", Controller.deleteUser)

module.exports = router;