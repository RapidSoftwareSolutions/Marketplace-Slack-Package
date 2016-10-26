const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        user,
        //returnIm,
    } = req.body.args;

    if(!token || !user) throw new Error('Required fields: token, user');

    let slack = new WebClient(token);

    return slack.im.open(user);
}