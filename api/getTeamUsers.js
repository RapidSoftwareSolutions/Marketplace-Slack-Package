const WebClient = require('@slack/client').WebClient;
const lib       = require('../lib/functions');
const request   = require('request');

module.exports = (req, res) => {
    let {
        token,
        presence
    } = req.body.args;

    if(!token) throw new Error('Required fields: token');

    let slack = new WebClient(token);

    return slack.users.list({presence});
}