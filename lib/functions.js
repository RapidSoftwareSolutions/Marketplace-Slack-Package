
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