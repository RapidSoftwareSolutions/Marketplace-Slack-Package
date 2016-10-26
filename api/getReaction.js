const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        file,
        fileComment,
        channel,
        timestamp,
        full
    } = req.body.args;

    if(!token) throw new Error('Required fields: token, name');

    let slack = new WebClient(token);

    return slack.reactions.get({
        file:         file,
        file_comment: fileComment,
        channel:      channel,
        timestamp:    timestamp,
        full:         full
    });
}