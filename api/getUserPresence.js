const WebClient = require('@slack/client').WebClient;
const lib       = require('../lib/functions');
const request   = require('request');

module.exports = (req, res) => {
    let {
        token,
        user
    } = req.body.args;

    if(!token || !user) throw new Error('Required fields: token, user');

    let slack = new WebClient(token);

    return slack.users.getPresence(user);
}