const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        file,
        fileComment,
        channel,
        timestamp   
    } = req.body.args;

    if(!token) throw new Error('Required fields: token');

    let slack = new WebClient(token);

    return slack.stars.remove({
        file,
        fileComment,
        channel,
        timestamp
    });
}