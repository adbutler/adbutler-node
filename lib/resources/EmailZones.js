'use strict';

var ResourceFactory = require('../ResourceFactory');

var EmailZone = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/zones/email');
};

// Custom Resource Methods
// EmailZone.customMethod1 = function() {};
// EmailZone.customMethod2 = function() {};

module.exports = EmailZone;
