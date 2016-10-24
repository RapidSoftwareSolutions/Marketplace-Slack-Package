const fs       = require('fs');
const path     = require('path');
const request  = require('request');
const uri      = process.argv[2];
const filename = require('./functions').randomString();

let file = fs.createWriteStream(path.resolve(__dirname, filename));

let response = (success, message) => {
    process.stdout.write(JSON.stringify({
        success: success,
        message: message
    }));

    process.exit(0);
}

let stream = request
    .get(uri)
    .on('error', (err) => {
        response(false, err);
    })
    .pipe(file);

stream.on('finish', () => response(true, filename));