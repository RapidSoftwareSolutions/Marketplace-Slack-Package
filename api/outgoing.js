const lib = require('../lib/functions');

module.exports = (req, res) => {
    const {
        body, params
    } = req.body.args;
    
    if (!params.token) throw new Error('Required fields: token');
    if (params.token !== body.token) throw new Error('Mismatching tokens');

    const resp = {
        http_resp: '',
        client_msg: body
    }

    return resp;
}
