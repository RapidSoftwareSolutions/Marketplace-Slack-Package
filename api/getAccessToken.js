const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        clientId,
        clientSecret,
        code,
        redirectUri
    } = req.body.args;

    if(!clientId || !clientSecret || !code) throw new Error('Required fields: clientId, clientSecret, code.');

    let slack = new WebClient();

    return slack.oauth.access(clientId, clientSecret, code, {
        redirect_uri: redirectUri
    });
}