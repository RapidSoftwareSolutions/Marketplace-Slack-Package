const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        channel,
        ts,
        text="Message from rapidapi.com.",
        parse,
        linkNames,
        attachments,
        asUser
    } = req.body.args;

    if(!token || !channel) throw new Error('Required fields: token, channel, text');

    let slack = new WebClient(token);

    if(attachments) {
        try {
            attachments = JSON.parse(attachments);
        } catch(e) {
            throw new Error('Invalid attachments JSON format. Please check it.');
        }
    }

    return slack.chat.update(ts, channel, text, {
        parse:        parse,
        link_names:   linkNames,
        attachments:  attachments,
        as_user:      asUser
    });
}