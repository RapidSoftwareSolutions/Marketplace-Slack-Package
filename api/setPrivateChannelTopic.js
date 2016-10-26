const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        channel,
        topic
    } = req.body.args;

    if(!token || !channel || !topic) throw new Error('Required fields: token, channel, topic');

    let slack = new WebClient(token);

    return slack.groups.setTopic(channel, topic);
}