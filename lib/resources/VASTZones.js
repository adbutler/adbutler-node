'use strict';

var ResourceFactory = require('../ResourceFactory');

var VASTZone = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/vast-zones');
};

// Custom Resource Methods
// VASTZone.customMethod1 = function() {};
// VASTZone.customMethod2 = function() {};

module.exports = VASTZone;