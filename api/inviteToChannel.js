const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        channel,
        user
    } = req.body.args;

    if(!token || !channel || !user) throw new Error('Required fields: token, user, channel');

    let slack = new WebClient(token);

    return slack.channels.invite(channel, user);
}