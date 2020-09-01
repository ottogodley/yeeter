var express = require('express');
var router = express.Router();
const util = require('util');
const exec = util.promisify(require('child_process').exec);
var formidable = require('formidable');

var filename;
var gifEffect;

async function cleanUp() {
    try {
        const {stdout, stderr} = await exec('rm /app/public/in/in.gif && rm /app/public/out/output.gif');
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
    } catch (err) {
        console.error(err);
    };
};

router.post('/', function(req, res, next) {
    console.log("Cleaning up...");
    cleanUp();
    console.log("Cleaning finished, redirecting now...");
    res.redirect('/');
});

module.exports = router;
