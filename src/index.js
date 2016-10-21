'use strict';

// load modules
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

// set our port
app.set('port', process.env.PORT || 5000);

// morgan gives us http request logging
app.use(logger('dev'));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// include routes
var routes = require('./routes');
// setup our static route to serve files from the "public" folder
app.use('/', express.static('public'));

app.use('/api', routes.courses);
app.use('/api', routes.reviews);
app.use('/api', routes.users);

// catch 404 and forward to error handler
app.use(function(req, res, next){
	var err = new Error('File Not Found');
	err.status = 404;
	next(err);
});

// error handler
// define as the last app.use callback
app.use(function(err, req, res, next){
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

// start listening on our port
var server = app.listen(app.get('port'), function() {
  console.log('Express server is listening on port ' + server.address().port);  
});
