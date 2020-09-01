var express = require('express');
var router = express.Router();
const util = require('util');
const exec = util.promisify(require('child_process').exec);
var formidable = require('formidable');

var filename;
var gifEffect;
global.yeetCompleted = false;

async function yeetGif() {
    try {
        console.log('Yeeting ' + filename + ' with ' + gifEffect);
        const {stdout, stderr} = await exec('cat ' + filename + ' | gif ' + gifEffect + ' | gifsicle --resize 120x120 -o /app/public/out/output.gif');
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
        console.log(filename + ' yeeted successfully with ' + gifEffect);
        yeetCompleted = true;
        return Promise.resolve(yeetCompleted);
    } catch (err) {
        console.error(err);
        return Promise.reject(yeetCompleted);
    };
};

/* GET UPLOAD IMAGE*/
router.get('/gif', function(req, res, next) {
    res.send('IMAGES!');
});

router.post('/gif', function(req, res, next) {
    console.log("Attempting to YEET a gif now.");
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        gifEffect = fields.effect;
        filename = "/app/public/in/in.gif";
        yeetGif().then((stdout) => res.redirect("/"));
    });
});

module.exports = router;
