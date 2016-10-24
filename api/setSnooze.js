const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
    	token,
    	numMinutes,
    } = req.body.args;

    if(!token || !numMinutes) throw new Error('Required fields: token, numMinutes');

    let slack = new WebClient(token);

	return slack.dnd.setSnooze(numMinutes);
}