'use strict';

var ResourceFactory = require('../ResourceFactory');

var FlashCreative = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/creatives/flash');
};

// Custom Resource Methods
// FlashCreative.customMethod1 = function() {};
// FlashCreative.customMethod2 = function() {};

module.exports = FlashCreative;