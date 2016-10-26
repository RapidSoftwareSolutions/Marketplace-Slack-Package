const Q         = require('q');
const lib       = require('../lib/functions');
const request   = require('request');
const fs        = require('fs');
const path      = require('path');
const spawn     = require('child_process').spawnSync

module.exports = (req, res) => {
    const defered = Q.defer();

    let {
        token,
        image,
        cropX,
        cropY,
        cropW
    } = req.body.args;

    if(!token || !image) throw new Error('Required fields: token, image');

    let options = lib.clearArgs({
        crop_w: cropW,
        crop_y: cropY,
        crop_x: cropX
    });

    let attach = spawn(process.execPath, [require.resolve('../lib/download.js'), image]);

    if(!attach.stderr.toString()) {
        let response = JSON.parse(attach.stdout.toString());
        var fn       = path.resolve('./lib', response.message);

        if(!response.success) {
            throw new Error('Bad file!', res, {to});
            return;
        }

        options.image = fs.createReadStream(fn);

    } else {
        console.log('Error with download.js!', attach.stderr.toString());
        throw new Error('Error. Please, call support.');
    }

    fs.unlink(fn, () => {});

    request.post({
        url: `https://slack.com/api/users.setPhoto?token=${token}`, 
        formData: options
    }, (err, response, reslut) => {
        if(!err && response.statusCode == 200) {
            defered.resolve(JSON.parse(reslut));
        } else {
            defered.reject(err || JSON.parse(reslut));
        }

        fs.unlink(fn, () => {});
    });

    return defered.promise;      
}