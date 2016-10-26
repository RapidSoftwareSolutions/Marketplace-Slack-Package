const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        simpleLatest,
        noUnreads,
        mpimAware
    } = req.body.args;

    if(!token) throw new Error('Required fields: token');

    let slack = new WebClient(token);

    return slack.rtm.start({
        simple_latest: simpleLatest,
        no_unreads:    noUnreads,
        mpim_aware:    mpimAware
    });
}