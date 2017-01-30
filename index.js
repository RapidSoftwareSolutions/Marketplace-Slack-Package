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
            r.contextWrites[to] = response;
        } catch(e) {
            r.callback          = 'error';
            r.contextWrites[to] =  e.name == 'SlackAPIError' ? lib.errors[e.message] || lib.parseError(e.message) : e.message;
        }

        res.status(200).send(r);
    }));
}

app.listen(PORT);
module.exports = app;