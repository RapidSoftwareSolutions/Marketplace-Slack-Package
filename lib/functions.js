const Q    = require('q');
const fs   = require('fs');
const path = require('path');

module.exports.callback = (gen) => {
    return function() {
        return Q.async(gen).apply(null, arguments).done();
    };
}

module.exports.init = () => {
    let apiObject = new Object(null);

    fs.readdirSync(path.join(process.env.PWD, 'api')).forEach((file) => {
        try {
            var type    = file.substring(file.lastIndexOf('.') + 1),
                route   = file.substring(0, file.length - type.length - 1);

            if(!type == 'js' || route == 'metadata.js') return;

            apiObject[route] = require(`../api/${file}`);
        } catch(e) { 
            console.log(e);
            return;
        }
    });

    return apiObject;
}

module.exports.clearArgs = function fn(obj, recurse) {
    for (var i in obj) {
        if (obj[i] == undefined || obj[i] == '') {
            delete obj[i];
        } else if (recurse && typeof obj[i] === 'object') {
            if(JSON.stringify(obj[i]) == '{}') {
                delete obj[i];
            }

            fn(obj[i], true);
        }
    }

    return obj;
}

module.exports.randomString = () => Math.random().toString(36).substring(10);

module.exports.errors = {
    'invalid_auth': 'Invalid authentication token.',
    'account_inactive': 'Authentication token is for a deleted user or team.',
    'bot_not_found': 'Value passed for bot was invalid.',
    'user_is_bot': 'This method cannot be called by a bot user.',
    'channel_not_found': 'Value passed for channel was invalid.',
    'not_in_channel': 'Caller is not a member of the channel.',
    'invalid_name': 'Name is invalid',
    'name_taken': 'Channel name is taken',
    'message_not_found': 'No message exists with the requested timestamp.',
    'restricted_action': 'A team preference prevents the authenticated user',
    'posting_to_general_channel_denied': 'An admin has restricted posting to the #general channel.',
    'paid_only': 'This is only available to paid teams.',
    'over_pagination_limit': 'It is not possible to request more than 1000 items per page or more than 100 pages.'   
}