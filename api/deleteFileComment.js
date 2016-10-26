const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        file,
        id
    } = req.body.args;

    if(!token || !file || !id) throw new Error('Required fields: token, file, id');

    let slack = new WebClient(token);
    let block = slack.files.comments || slack['files.comments']; // sdk bug

    return block.delete(file, id);
}