const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;
const request   = require('request');

module.exports = (req, res) => {
    let {
        token,
        file,
        count,
        page
    } = req.body.args;

    if(!token || !file) throw new Error('Required fields: token, file');

    let slack = new WebClient(token);

    return slack.files.info(file, { count, page });
}