var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');

/* GET UPLOAD IMAGE*/
router.get('/image', function(req, res, next) {
    res.send('IMAGES!');
});

router.post('/image', function(req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath = files.uploadedImage.path;
        filename = '/app/in/' + files.uploadedImage.name;
        var newpath = '/app/public/in/in.gif';
        fs.copyFile(oldpath, newpath, function (err) {
            if (err) throw err;
        });
    });
    res.redirect('/');
});

module.exports = router;
