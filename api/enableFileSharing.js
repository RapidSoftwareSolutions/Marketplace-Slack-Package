const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;
const request   = require('request');
const fs        = require('fs');
const path      = require('path');
const spawn     = require('child_process').spawnSync


module.exports = (req, res) => {
    let {
        token,
        file
    } = req.body.args;

    if(!token || !file) throw new Error('Required fields: token, file');

    let slack = new WebClient(token);

    return slack.files.sharedPublicURL(file);
}