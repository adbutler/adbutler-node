'use strict';

var ResourceFactory = require('../ResourceFactory');

var PlatformTarget = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/platform-targets');
};

// Custom Resource Methods
// PlatformTarget.customMethod1 = function() {};
// PlatformTarget.customMethod2 = function() {};

module.exports = PlatformTarget;
