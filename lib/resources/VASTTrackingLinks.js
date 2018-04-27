'use strict';

var ResourceFactory = require('../ResourceFactory');

var VASTTracking = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/vast-tracking');
};

// Custom Resource Methods
// VASTTracking.customMethod1 = function() {};
// VASTTracking.customMethod2 = function() {};

module.exports = VASTTracking;