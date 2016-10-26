const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
        token,
        query,
        sort,
        sortDir,
        highlight,
        count,
        page
    } = req.body.args;

    if(!token || !query) throw new Error('Required fields: token, query');

    let slack = new WebClient(token);

    return slack.search.all(query, {
        sort:      sort,
        sort_dir:  sortDir,
        highlight: highlight,
        count:     count,
        page:      page
    });
}