'use strict';

var ResourceFactory = require('../ResourceFactory');

var Zone = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/zones', {
        create: false,
        read: false,
        update: false,
        delete: false,
    });
};

// Custom Resource Methods
// Zone.customMethod1 = function() {};
// Zone.customMethod2 = function() {};

module.exports = Zone;
