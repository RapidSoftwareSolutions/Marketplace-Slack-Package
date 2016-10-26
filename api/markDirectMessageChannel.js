const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        channel,
        ts
    } = req.body.args;

    if(!token || !channel || !ts) throw new Error('Required fields: token, channel, ts');

    let slack = new WebClient(token);

    return slack.im.mark(channel, ts);
}