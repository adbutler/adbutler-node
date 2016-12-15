'use strict';

var ResourceFactory = require('../ResourceFactory');

var GeoTarget = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/geo-targets');
};

// Custom Resource Methods
// GeoTarget.customMethod1 = function() {};
// GeoTarget.customMethod2 = function() {};

module.exports = GeoTarget;