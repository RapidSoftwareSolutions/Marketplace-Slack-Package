const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        includeDisabled,
        includeCount,
        includeUsers,
    } = req.body.args;

    if(!token) throw new Error('Required fields: token');

    let slack = new WebClient(token);

    return slack.usergroups.list(name, {
        include_users:    includeUsers,
        include_count:    includeCount,
        include_disabled: includeDisabled
    });
}