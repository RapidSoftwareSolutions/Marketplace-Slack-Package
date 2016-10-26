const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        usergroup,
        includeCount
    } = req.body.args;

    if(!token || !name) throw new Error('Required fields: token, name');

    let slack = new WebClient(token);

    return slack.usergroups.disable(usergroup, {
        include_count: includeCount
    });
}