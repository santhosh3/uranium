const express = require('express');
<<<<<<< HEAD
const res = require('express/lib/response');
const logger = require('./logger')

const router = express.Router();


// router.get('/api/courses', function (req, res) {
//     res.send([1,2,3]);
// });

// router.get('/api/posts/:year/:month', function (req,res){
//     res.send(req.params);
// });


router.get('/movies', function(req,res){
    let movies = ['rand be basnasti', 'RRR','kaleja', 'pokiri', 'maya'];
    res.send(movies);
});


// router.get('/movies/:indexNumber',function(req,res){

//         let movies = ['RRR', 'khiladi', 'ravi', 'sai'];
//         let id = req.params.indexNumber;
//         if(id < movies.length)
//         {
//             res.send(movies[id-1]);
//         }


// router.get('/movies/:indexNumber',function(req,res){

//     let movies = ['RRR', 'khiladi', 'ravi', 'sai'];
//     let id = req.params.indexNumber;
//     if(id < movies.length)
//     {
//         res.send(movies[id-1]);
//     }
//     else
//     {
//         res.send('there is no movie name with respective id')
//     }
// });

// router.get('/films', function(req,res){
//     let films = 
//     [{
//         "id": 1,
//         "name": "RRR"
//     },
//     {
//         "id": 2,
//         "name": "egga"
//     },
//     {
//         "id": 3,
//         "name": "Finding nemo"
//     }];
//     res.send(films);
// });

// router.get('/films/:filmid', function(req,res){
//         let films = 
//         [{
//             "id": 1,
//             "name": "RRR"
//         },
//         {
//             "id": 2,
//             "name": "egga"
//         },
//         {
//             "id": 3,
//             "name": "Finding nemo"
//         }];
//         let id = req.params.filmid;
//         if(id === films.id)
//         {
//             res.send(films.name)
//         }

//     });


=======
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
>>>>>>> 1c53b6a8163c753ff7872b5a98edaee2e6bbaaf0
module.exports = router;
// adding this comment for no reason