'use strict';

//load express
var express = require('express');
//create router 
var router = express.Router();

// Returns the Course "_id" and "title" properties
router.get('/courses', function(req, res, next){
	res.send(JSON.stringify([{_id: 1000}, {name: "something"}]))
});

// Returns all Course properties and related documents for the provided course ID
router.get('/course/:id', function(req, res, next){

});

//Creates a course, sets the Location header, and returns no content
router.post('/courses', function(req, res, next){

});

//Updates a course and returns no content
router.put('/courses/:id', function(req, res, next){

});

module.exports = router;
