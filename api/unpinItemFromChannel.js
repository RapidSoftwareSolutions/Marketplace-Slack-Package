const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;
const    datetime = require('node-datetime');
module.exports = (req, res) => {
    let {
        token,
        file,
        channel,
        fileComment,
        timestamp
    } = req.body.args;

    if(isNaN(timestamp)){
        var dt = datetime.create(timestamp);
        timestamp = dt.epoch();
    }

    if(!token || !channel) throw new Error('Required fields: token, channel');

    let slack = new WebClient(token);

    return slack.pins.remove(channel, {
        file:         file,
        channel:      channel,
        file_comment: fileComment,
        timestamp:    timestamp
    });
}