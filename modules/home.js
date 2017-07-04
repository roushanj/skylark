var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	res.render('home');
});

router.get('/explore', function(req, res, next){
    res.render('index');
});


module.exports = router;