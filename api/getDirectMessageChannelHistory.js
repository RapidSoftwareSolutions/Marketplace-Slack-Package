const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;
const    datetime = require('node-datetime');

module.exports = (req, res) => {
    let {
        token,
        channel,
        latest,
        oldest,
        inclusive,
        count,
        unreads
    } = req.body.args;

    if(!token || !channel) throw new Error('Required fields: token, channel');

    if(latest!=undefined && isNaN(latest)){
        var dt = datetime.create(latest);
        latest = dt.epoch();
    }

    if(oldest!=undefined && isNaN(oldest)){
        var dt = datetime.create(oldest);
        oldest = dt.epoch();
    }

    let slack = new WebClient(token);

    return slack.im.history(channel, {
        latest,
        oldest,
        inclusive,
        count,
        unreads
    });
}