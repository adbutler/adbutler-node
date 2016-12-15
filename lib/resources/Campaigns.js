'use strict';

var ResourceFactory = require('../ResourceFactory');

var Campaign = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/campaigns', {
        create: false,
        read: false,
        update: false,
        delete: false,
    });
};

// Custom Resource Methods
// Campaign.customMethod1 = function() {};
// Campaign.customMethod2 = function() {};

module.exports = Campaign;
