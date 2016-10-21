'use strict';

// load express
var express = require('express');
// create router 
var router = express.Router();

// Returns the currently authenticated user
router.get('/api/users', function(req, res, next){

});

// Creates a user, sets the Location header to "/", and returns no content
router.post('api/users', function(req, res, next){

});

module.exports = router;
