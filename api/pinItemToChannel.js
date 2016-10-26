const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        file,
        channel,
        fileComment,
        timestamp
    } = req.body.args;

    if(!token || !channel) throw new Error('Required fields: token, channel');

    let slack = new WebClient(token);

    return slack.pins.add(channel, {
        file:         file,
        channel:      channel,
        file_comment: fileComment,
        timestamp:    timestamp
    });
}