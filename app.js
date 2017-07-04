var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
//var mongo = require('mongodb');
//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/super');
//var db = mongoose.connection;

var main = require('./modules/main');
var home = require('./modules/home');
var app = express();


//default layouts DIR

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, ('public'))));

//Middleware 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



// Express Validator

app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

app.use('/', home);
app.use('/explore', main);

module.exports = app;
