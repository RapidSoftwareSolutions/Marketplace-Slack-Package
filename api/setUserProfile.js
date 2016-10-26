const Q         = require('q');
const lib       = require('../lib/functions');
const request   = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    let {
        token, 
        user,
        profile,
        name,
        value,
    } = req.body.args;

    if(!token) throw new Error('Required fields: token');

    if(profile) {
        try {
            JSON.parse(profile);
        } catch(e) {
            throw new Error('Invalid profile field JSON data. Please, check it.');
        }
    }

    let uri  = `https://slack.com/api/users.profile.set?token=${token}`;

    if(user)    uri += `&user=${user}`;
    if(profile) uri += `&profile=${encodeURIComponent(profile)}`;
    if(name)    uri += `&name=${name}`;
    if(value)   uri += `&value=${value}`;

    request(uri, (err, response, reslut) => {
        if(!err && response.statusCode == 200) 
            defered.resolve(JSON.parse(reslut));
        else 
            defered.reject(err || JSON.parse(reslut));
    });

    return defered.promise;
}