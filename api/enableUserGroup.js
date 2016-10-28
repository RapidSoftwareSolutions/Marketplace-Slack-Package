const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        usergroup,
        includeCount
    } = req.body.args;

    if(!token || !usergroup) throw new Error('Required fields: token, usergroup');

    let slack = new WebClient(token);

    return slack.usergroups.enable(usergroup, {
        include_count: includeCount
    });
}