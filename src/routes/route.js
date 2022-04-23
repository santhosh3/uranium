const express = require('express');
const moment = require('moment');
const router = express.Router();
var address = require('address')

const Author = require("../controllers/AuthorController")
const Publisher = require("../controllers/PublisherController")
const Book = require("../controllers/BookController")
const { route } = require('express/lib/application');


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/creatAuthor" , Author.createAuthor);
router.post("/createPublisher" , Publisher.createPublisher);
router.post("/creatBooks" , Book.createBooks);
router.post("/bookDetails" , Book.bookDetails);
router.put("/updateByPublisher" , Book.updateByPublisher);
router.put("/updateByRating" ,Book.updateByRating);

module.exports = router;