const lib = require('../lib/functions');

module.exports = (req, res) => {
    const {
        body, params
    } = req.body.args;

    const found = params.filter(param => param.channel === body.channel && param.token === body.token);
    if (!found.length) throw new Error('Mismatching tokens');

    const resp = {
        http_resp: {"text": found[0].response},
        client_msg: body,
        params: found
    }

    return resp;
}
