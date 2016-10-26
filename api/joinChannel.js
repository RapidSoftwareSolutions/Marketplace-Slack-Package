const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        name
    } = req.body.args;

    if(!token || !name) throw new Error('Required fields: token, name, channel');

    let slack = new WebClient(token);

    return slack.channels.join(name);
}