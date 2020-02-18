var express = require('express');
var router = express.Router();
const util = require('util');
const exec = util.promisify(require('child_process').exec);
var formidable = require('formidable');

var filename;
var gifEffect;

async function yeetGif() {
    try {
        console.log('Yeeting ' + filename + ' with ' + gifEffect);
        const {stdout, stderr} = await exec('cat ' + filename + ' | gif ' + gifEffect + ' | gif optimize --kb 120 | gif resize -x 120 -y 120 > /app/public/out/output.gif');
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
    } catch (err) {
        console.error(err);
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
        console.log('Yeeting ' + filename + ' with ' + gifEffect);
        yeetGif();
    });
    console.log("Gif successfully YEETED, redirecting.");
    res.redirect('/');
});

module.exports = router;
