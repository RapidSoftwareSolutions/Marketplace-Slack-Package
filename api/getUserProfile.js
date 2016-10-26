const Q         = require('q');
const lib       = require('../lib/functions');
const request   = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    let {
        token, 
        user,
        includeLabels
    } = req.body.args;

    if(!token) throw new Error('Required fields: token');

    let uri  = `https://slack.com/api/users.profile.get?token=${token}`;
    if(user) 
        uri += `&user=${user}`;
    if(includeLabels) 
        uri += `&include_labels=${user}`;


    request(uri, (err, response, reslut) => {
        if(!err && response.statusCode == 200) 
            defered.resolve(JSON.parse(reslut));
        else 
            defered.reject(err || JSON.parse(reslut));
    });

    return defered.promise;
}