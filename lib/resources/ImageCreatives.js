'use strict';

var ResourceFactory = require('../ResourceFactory');

var ImageCreative = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/creatives/image');
};

// Custom Resource Methods
// ImageCreative.customMethod1 = function() {};
// ImageCreative.customMethod2 = function() {};

module.exports = ImageCreative;
