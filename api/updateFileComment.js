const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
    	token,
    	file,
        id,
    	comment,
    	channel
    } = req.body.args;

    if(!token || !file || !comment) throw new Error('Required fields: token, file, comment');

    let slack = new WebClient(token);
    let block = slack.files.comments || slack['files.comments']; // sdk bug

	return block.edit(file, id, comment);
}