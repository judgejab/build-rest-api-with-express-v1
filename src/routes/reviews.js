'use strict';

//load express
var express = require('express');
//create router 
var router = express.Router();

// Creates a review for the specified course ID, sets the Location header to the related course, and returns no content
router.post('/api/courses/:courseId/reviews', function(req, res, next){

});

// Deletes the specified review and returns no content
router.delete('/api/courses/:courseId/reviews/:id', function(req, res, next){

});

module.exports = router;
