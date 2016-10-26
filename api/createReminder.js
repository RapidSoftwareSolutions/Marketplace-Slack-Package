const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        text,
        time,
        user
    } = req.body.args;

    if(!token || !text || !time) throw new Error('Required fields: token, text, time');

    let slack = new WebClient(token);

    return slack.reminders.add(text, time, {user});
}