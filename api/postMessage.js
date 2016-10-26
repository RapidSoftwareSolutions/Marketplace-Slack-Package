const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        channel,
        text="Message from rapidapi.com.",
        parse,
        linkNames,
        attachments,
        unfurlLinks,
        unfurlMedia,
        username,
        asUser,
        iconUrl,
        iconEmoji
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

    return slack.chat.postMessage(channel, text, {
        parse:        parse,
        link_names:   linkNames,
        attachments:  attachments,
        unfurl_links: unfurlMedia,
        unfurl_media: unfurlMedia,
        username:     username,
        as_user:      asUser,
        icon_url:     iconUrl,
        icon_emoji:   iconEmoji
    });
}