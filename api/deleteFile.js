const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        file,
    } = req.body.args;

    if(!token || !file) throw new Error('Required fields: token, file');

    let slack = new WebClient(token);

    return slack.files.delete(file);
}