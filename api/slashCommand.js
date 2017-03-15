const lib = require('../lib/functions');

module.exports = (req, res) => {
    const {
        body, params
    } = req.body.args;

    const found = params.filter(param => param.token === body.token && param.command === body.command);
    if (!found.length) throw new Error("Mismatching tokens");

    const resp = {
        http_resp: found[0].response || body.text,
        client_msg: body,
        params: found
    };

    return resp;
}
