const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        user,
        full,
        count,
        page
    } = req.body.args;

    if(!token) throw new Error('Required fields: token, name');

    let slack = new WebClient(token);

    return slack.reactions.list({
        user,
        full,
        count,
        page
    });
}