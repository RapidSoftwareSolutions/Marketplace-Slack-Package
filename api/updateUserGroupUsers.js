const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        usergroup,
        users,
        includeCount,
    } = req.body.args;

    if(!token || !usergroup || !users) throw new Error('Required fields: token, usergroup, users');

    let slack = new WebClient(token);

    return slack.usergroups.users.update(usergroup, users, {
        include_count: includeCount
    });
}