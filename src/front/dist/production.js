'use strict';

var
// required packages
express = require('express'),
    path = require('path'),
    app = express(),
    serverRendererPath = path.join(__dirname, 'server.js'),
    serverRenderer = require(serverRendererPath).default,
    favicon = require('serve-favicon'),
    i18nextMiddleware = require('i18next-express-middleware'),
    i18n = require('./i18n.js'),
    Backend = require('i18next-node-fs-backend')

// configuration
,
    serverHostname = '0.0.0.0',
    serverPort = '9001';

app.use('/public', express.static(path.join(__dirname, '..', 'dist', 'public')));
app.use(favicon(path.join(__dirname, '..', 'dist', 'public', 'images', 'favicon.ico')));

i18n.use(Backend).use(i18nextMiddleware.LanguageDetector).init({
    backend: {
        loadPath: path.resolve(__dirname, '..', 'dist', 'locales', '{{lng}}', '{{ns}}.json')
    }
});

app.use(i18nextMiddleware.handle(i18n));

app.use(serverRenderer());

app.listen(serverPort, serverHostname, function (err) {
    if (err) {
        console.log(err.message);
    } else {
        var hostname = this.address().address;
        var port = this.address().port;
        console.log('Server is listening on http://' + hostname + ':' + port);
    }
});
