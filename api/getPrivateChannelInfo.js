const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        channel
    } = req.body.args;

    if(!token || !channel) throw new Error('Required fields: token, channel');

    let slack = new WebClient(token);

    return slack.groups.info(channel);
}