var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = require('./app.js');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.listen(process.env.PORT || 3000, function() {

	console.log('server is listening');
});