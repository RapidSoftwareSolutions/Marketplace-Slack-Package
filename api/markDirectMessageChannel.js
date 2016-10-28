const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        channel,
        timestamp
    } = req.body.args;

    if(!token || !channel || !timestamp) throw new Error('Required fields: token, channel, timestamp');

    let slack = new WebClient(token);

    return slack.im.mark(channel, timestamp);
}