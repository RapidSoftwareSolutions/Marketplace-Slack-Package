const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
    	token,
    	channel,
    	purpose
    } = req.body.args;

    if(!token || !channel || !purpose) throw new Error('Required fields: token, channel, purpose');

    let slack = new WebClient(token);

	return slack.groups.setPurpose(channel, purpose);
}