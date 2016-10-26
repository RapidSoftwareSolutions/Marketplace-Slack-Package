const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        channel,
        text="Message from rapidapi.com."
    } = req.body.args;

    if(!token || !channel) throw new Error('Required fields: token, channel, text');

    let slack = new WebClient(token);

    return slack.chat.meMessage(channel, text);
}