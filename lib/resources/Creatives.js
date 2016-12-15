'use strict';

var ResourceFactory = require('../ResourceFactory');

var Creative = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/creatives', {
        create: false,
        read: false,
        update: false,
        delete: false,
    });
};

// Custom Resource Methods
// Creative.customMethod1 = function() {};
// Creative.customMethod2 = function() {};

module.exports = Creative;
