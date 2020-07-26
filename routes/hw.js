var express = require('express');
var router = express.Router();

/* GET hw */
router.get('/', function(req, res, next) {
  res.render('t');
  //res.send('hi');

});

module.exports = router;
