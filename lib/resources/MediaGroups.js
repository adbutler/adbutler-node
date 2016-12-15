'use strict';

var ResourceFactory = require('../ResourceFactory');

var MediaGroup = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/media-groups');
};

// Custom Resource Methods
// MediaGroup.customMethod1 = function() {};
// MediaGroup.customMethod2 = function() {};

module.exports = MediaGroup;
