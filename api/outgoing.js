const lib = require('../lib/functions');

module.exports = (req, res) => {
    const {
        body, params
    } = req.body.args;

    const found = params.find(param => param.channel === body.channel && param.token === body.token);
    if (!found) throw new Error('Mismatching tokens');

    const resp = {
        http_resp: '',
        client_msg: body,
        socket_token: found._rapid_sock_token
    }

    return resp;
}
