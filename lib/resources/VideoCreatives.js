'use strict';

var ResourceFactory = require('../ResourceFactory');

var VideoCreative = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/creatives/video');
};

// Custom Resource Methods
// VideoCreative.customMethod1 = function() {};
// VideoCreative.customMethod2 = function() {};

module.exports = VideoCreative;