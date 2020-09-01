var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Refresh!');
});

router.post('/', function(req, res, next) {
    res.redirect('/');
});

module.exports = router;