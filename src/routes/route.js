const express = require('express');
const loggerModule = require('../logger/logger');
const helperModule = require('../util/helper');
const formateModule = require('../validator/formatter');
const lodash = require('lodash');

const router = express.Router();

router.get('/test-me', function (req, res) {

    loggerModule.welcomemessage();
    helperModule.printtodaydate();
    helperModule.printCurrentMonth();
    helperModule.printBatchInformation();
    formateModule.trimString();
    formateModule.changeToLowerCase();
    formateModule.changeToUpperCase();

    res.send('My first ever ap! Up');
});

router.get('/hello', function (req, res) {
    let months = ['jan','feb','march','april','may','june','july','august','sep','oct','nov','dec'];
    let subArray = lodash.chunk(months,3);
    console.log(subArray);

    res.send('My first ever lodash set');
});
module.exports = router;
// adding this comment for no reason