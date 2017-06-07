const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;
const    datetime = require('node-datetime');
module.exports = (req, res) => {
    let {
        token,
        file,
        fileComment,
        channel,
        timestamp   
    } = req.body.args;

    if(isNaN(timestamp)){
        var dt = datetime.create(timestamp);
        timestamp = dt.epoch();
    }

    if(!token) throw new Error('Required fields: token');

    let slack = new WebClient(token);

    return slack.stars.remove({
        file,
        fileComment,
        channel,
        timestamp
    });
}