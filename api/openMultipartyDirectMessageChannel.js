const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        users,
    } = req.body.args;

    if(!token || !users) throw new Error('Required fields: token, users');

    let slack = new WebClient(token);

    return slack.mpim.open(users);
}