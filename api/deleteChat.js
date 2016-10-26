const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        channel,
        timestamp,
        asUser,
    } = req.body.args;

    if(!token || !channel || !timestamp) throw new Error('Required fields: token, channel, timestamp');

    let slack = new WebClient(token);

    return slack.chat.delete(timestamp, channel, {as_user: asUser});
}