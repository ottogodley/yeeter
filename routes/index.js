var express = require('express');
var router = express.Router();
var fs = require('fs');

var imageExists;
global.yeetCompleted = false;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Yeeter', imageExists: imageExists });
  if (fs.exists("./in/in.gif")) {
    imageExists = true;
  }
  if (fs.exists("./out/output.gif")) {
    global.yeetCompleted = true;
  }
});

router.get('/upload', function(req, res, next) {
  res.send('IMAGES!');
});

module.exports = router;
