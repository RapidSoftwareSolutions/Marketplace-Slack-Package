const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        usergroup,
        includeDisabled,
    } = req.body.args;

    if(!token || !usergroup) throw new Error('Required fields: token, usergroup');

    let slack = new WebClient(token);

    return slack.usergroups.users.list(usergroup, {
        include_disabled: includeDisabled
    });
}