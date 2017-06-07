const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;
const    datetime = require('node-datetime');
module.exports = (req, res) => {
    let {
        token,
        channel,
        timestamp
    } = req.body.args;

    if(isNaN(timestamp)){
        var dt = datetime.create(timestamp);
        timestamp = dt.epoch();
    }

    if(!token || !channel || !timestamp) throw new Error('Required fields: token, channel, timestamp');

    let slack = new WebClient(token);

    return slack.channels.mark(channel, timestamp);
}