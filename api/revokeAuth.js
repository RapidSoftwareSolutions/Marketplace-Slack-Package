const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
    	token,
    	test
    } = req.body.args;

    let slack = new WebClient(token || '');

	return slack.auth.revoke();    
}