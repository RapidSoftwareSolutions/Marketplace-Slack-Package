const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        name,
        file,
        fileComment,
        channel,
        timestamp
    } = req.body.args;

    if(!token || !name) throw new Error('Required fields: token, name');

    let slack = new WebClient(token);

    return slack.reactions.remove(name, {
        file:         file,
        file_comment: fileComment,
        channel:      channel,
        timestamp:    timestamp
    });
}