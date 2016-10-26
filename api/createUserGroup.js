const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        name,
        handle,
        description,
        channels,
        includeCount
    } = req.body.args;

    if(!token || !name) throw new Error('Required fields: token, name');

    let slack = new WebClient(token);

    return slack.usergroups.create(name, {
        handle:        handle,
        description:   description,
        channels:      channels,
        include_count: includeCount
    });
}