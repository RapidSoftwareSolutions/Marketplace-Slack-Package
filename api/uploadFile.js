const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;
const request   = require('request');
const fs        = require('fs');
const path      = require('path');
const spawn     = require('child_process').spawnSync


module.exports = (req, res) => {
    let {
    	token,
    	file,
        filetype,
        filename,
        title,
        initialComment,
        channels,
    } = req.body.args;

    if(!token || !filename) throw new Error('Required fields: token, filename');

    let slack   = new WebClient(token);

    let options = lib.clearArgs({
        filetype:        filetype,
        filename:        filename,
        title:           title,
        initial_comment: initialComment,
        channels:        channels
    });

    if(file) {
        let attach = spawn(process.execPath, [require.resolve('../lib/download.js'), file]);
    
        if(!attach.stderr.toString()) {
            let response = JSON.parse(attach.stdout.toString());
            var fn       = path.resolve('./lib', response.message);

            if(!response.success) {
                throw new Error('Bad file!', res, {to});
                return;
            }

            options.file = fs.createReadStream(fn);

        } else {
            console.log('Error with download.js!', attach.stderr.toString());
            throw new Error('Error. Please, call support.');
        }
    }

    fs.unlink(fn, () => {});

	return slack.files.upload(filename, options);
}