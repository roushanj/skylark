var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = require('./app.js');

var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.listen(port, function() {

	console.log('server is listening');
});