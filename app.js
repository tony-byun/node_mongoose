// load packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// configure app to use bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure server port
var port = process.env.PORT || 8080;

// configure router
var router = require('./routes')(app);

// run server
var server = app.listen(port, function() {
    console.log("Express server has started on port " + port);
});