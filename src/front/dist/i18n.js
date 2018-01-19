'use strict';

var i18n = require('i18next');
var config = require('./config.js').default;

var options = {
    load: 'languageOnly',

    fallbackLng: config.DEFAULT_LANGUAGE,
    debug: false,

    interpolation: {
        escapeValue: false
    },

    ns: ['translations'],
    defaultNS: 'translations',

    detection: {
        order: ['path'],
        lookupPath: 'lng',
        lookupFromPathIndex: 0
    }

};

if (!i18n.isInitialized) {
    i18n.init(options);
}

module.exports = i18n;
