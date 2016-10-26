const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;
const request   = require('request');
const fs        = require('fs');
const path      = require('path');
const spawn     = require('child_process').spawnSync


module.exports = (req, res) => {
    let {
        token,
        channel,
        user,
        timestampFrom,
        timestampTo,
        types,
        count,
        page
    } = req.body.args;

    if(!token) throw new Error('Required fields: token');

    let slack = new WebClient(token);

    return slack.files.list(lib.clearArgs({
        channel:       channel,
        user:          user,
        timestampFrom: timestampFrom,
        timestampTo:   timestampTo,
        types:         types,
        count:         count,
        page:          page
    }));
}