const lib = require('../lib/functions');

module.exports = (req, res) => {
    const {
        body, account
    } = req.body.args;
    
    if (!account.token) throw new Error('Required fields: token');
    if (account.token !== body.token) throw new Error('Mismatching tokens');

    const resp = {
        http_resp: '',
        client_msg: body
    };

    return resp;
}
