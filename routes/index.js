var express = require('express');
var router = express.Router();
var fs = require('fs');

var imageExists;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Yeeter', imageExists: imageExists });
  if (fs.exists("./in/in.gif")) {
    imageExists = true;
  }
});

router.get('/upload', function(req, res, next) {
  res.send('IMAGES!');
  // var form = new formidable.IncomingForm();
  // form.parse(req, function (err, fields, files) {
  //     var oldpath = files.uploadedImage.path;
  //     filename = '/app/in/' + files.uploadedImage.name;
  //     var newpath = '/app/in/' + files.uploadedImage.name;
  //     fs.copyFile(oldpath, newpath, function (err) {
  //         if (err) throw err;
  //     });
  // });
});

module.exports = router;
