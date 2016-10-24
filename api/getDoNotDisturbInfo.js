const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
    	token,
    	user
    } = req.body.args;

    if(!token) throw new Error('Required fields: token');

    let slack = new WebClient(token);

	return slack.dnd.info(token, user);
}