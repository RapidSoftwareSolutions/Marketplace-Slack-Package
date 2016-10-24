const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
    	token,
    	channel,
    	name
    } = req.body.args;

    if(!token || !channel || !name) throw new Error('Required fields: token, channel, name');

    let slack = new WebClient(token);

	return slack.groups.rename(channel, name);
}