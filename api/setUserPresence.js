const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        presence
    } = req.body.args;

    if(!token || !presence) throw new Error('Required fields: token, presence');
    if(!/auto|away/.test(presence))
        throw new Error('Valid presence values: auto or away')

    let slack = new WebClient(token);

    return slack.users.setPresence(presence);
}