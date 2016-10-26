const Q         = require('q');
const lib       = require('../lib/functions');
const request   = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    let {
        token
    } = req.body.args;

    if(!token) throw new Error('Required fields: token');

    let uri  = `https://slack.com/api/users.deletePhoto?token=${token}`;

    request(uri, (err, response, reslut) => {
        if(!err && response.statusCode == 200) 
            defered.resolve(JSON.parse(reslut));
        else 
            defered.reject(err || JSON.parse(reslut));
    });

    return defered.promise;
}