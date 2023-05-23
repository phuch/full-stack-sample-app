var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET random number between 0 and 1. */
router.get('/random', function(req, res, next) {
  res.status(200).send(`${Math.floor(Math.random() * 100)}`);
});

module.exports = router;
