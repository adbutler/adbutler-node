'use strict';

var ResourceFactory = require('../ResourceFactory');

var Popup = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/popups', {
        create: false,
        read: false,
        update: false,
        delete: false,
    });
};

// Custom Resource Methods
// Popup.customMethod1 = function() {};
// Popup.customMethod2 = function() {};

module.exports = Popup;
