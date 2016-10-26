const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        reminder
    } = req.body.args;

    if(!token || !reminder) throw new Error('Required fields: token, reminder');

    let slack = new WebClient(token);

    return slack.reminders.info(reminder);
}