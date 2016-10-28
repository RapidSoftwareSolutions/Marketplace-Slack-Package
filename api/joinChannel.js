const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        name,
        channel
    } = req.body.args;

    if(!token || !(name || channel)) throw new Error('Required fields: token, (name or channel)');

    let slack = new WebClient(token);

    return slack.channels.join(name || channel);
}