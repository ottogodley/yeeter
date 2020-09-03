var express = require('express');
var router = express.Router();
const util = require('util');
const exec = util.promisify(require('child_process').exec);
var formidable = require('formidable');

var filename;
var gifEffect;
var cleanedUp = false;

async function cleanUp() {
    try {
        const {stdout, stderr} = await exec('rm /app/public/in/in.gif && rm /app/public/out/output.gif');
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
        cleanedUp = true;
    } catch (err) {
        console.error(err);
    };
};

router.post('/', function(req, res, next) {
    console.log("Cleaning up...");
    cleanUp().then((cleanedUp) => res.redirect("/"));
    console.log("Cleaning finished, redirecting now...");
});

module.exports = router;
