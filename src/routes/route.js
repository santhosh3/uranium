const express = require('express');
const router = express.Router();


const BatchController = require("../controllers/BatchController")
const DeveloperController = require("../controllers/DeveloperController")

const { route } = require('express/lib/application');


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createbatch" ,BatchController.createbatch);
router.post("/creatDeveloper" ,DeveloperController.creatDeveloper);
router.get("/scholarshipDevelopers",DeveloperController.scholarshipDevelopers );
router.get("/developers",DeveloperController.developers );

module.exports = router;