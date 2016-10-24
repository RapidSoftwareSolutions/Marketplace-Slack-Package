'use strict';
global.PACKAGE_NAME = "Slack";

const express       = require('express');
const request       = require('request');
const bodyParser    = require('body-parser');
const lib           = require('./lib/functions.js');
const _             = lib.callback;

const PORT          = process.env.PORT || 8080;
const app           = express();
const API           = lib.init();

app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.all(`/api/${PACKAGE_NAME}`, require('./api/metadata.js').do);

/** Remove on productions **/
const cid   = '3963534793.95249355829';
const cs    = '29754c215432261d1fa99dbfde8ef212';
const scope = '';

app.all(`/api/${PACKAGE_NAME}/token`, function(req, res) {
    let qs = `client_id=${cid}&scope=${scope}`;
    res.redirect('https://slack.com/oauth/authorize\?' + qs);
});

app.all(`/api/${PACKAGE_NAME}/callback`, function(req, res) {
    let code = req.query.code;
    let uri  = `https://slack.com/api/oauth.access?client_id=${cid}&client_secret=${cs}&code=${code}`;

    console.log(uri);

    request(uri, (error, response, body) => {
        if (!error && response.statusCode == 200) res.send(body);
        else res.end(response.statusCode);
    });    
});
/*  */

for(let route in API) {
    app.post(`/api/${PACKAGE_NAME}/${route}`, _(function* (req, res) {
        let r  = {
            callback     : "",
            contextWrites: {}
        };
        let to = req.body.args.to || 'to';
        let response;

        try {
            response            = yield API[route](req, res);
            r.callback          = 'success';
            r.contextWrites[to] = JSON.stringify(response);
        } catch(e) {
            r.callback          = 'error';
            r.contextWrites[to] =  typeof e == 'object' ? e.message ? e.message : JSON.stringify(e) : e;
        }

        res.status(200).send(r);
    }));
}

app.listen(PORT);
module.exports = app;