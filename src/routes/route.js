const express = require('express');
const router = express.Router();

const Controller = require("../controllers/Controller")
const Controllerweather = require("../controllers/Controllerweather")
const MemeController = require("../controllers/MemeController")

const { route } = require('express/lib/application');


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get('/cowin/states',Controller.getStates)
router.get("/cowin/districtsInState/:stateId", Controller.getDistricts)
router.get("/cowin/getByPin", Controller.getByPin)
router.post("/cowin/getOtp", Controller.getOtp)
router.get("/cowin/getByDistrict" , Controller.getDistrictSession)

router.get("/weather",Controllerweather.getSortedCities)

router.post("/MemeCreater", MemeController.MemeCreater)


module.exports = router;