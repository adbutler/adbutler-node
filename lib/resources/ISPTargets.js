'use strict';

var ResourceFactory = require('../ResourceFactory');

var ISPTarget = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/isp-targets');
};

// Custom Resource Methods
// ISPTarget.customMethod1 = function() {};
// ISPTarget.customMethod2 = function() {};

module.exports = ISPTarget;
