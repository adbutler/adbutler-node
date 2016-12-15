'use strict';

var ResourceFactory = require('../ResourceFactory');

var FlashBanner = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/banners/flash');
};

// Custom Resource Methods
// FlashBanner.customMethod1 = function() {};
// FlashBanner.customMethod2 = function() {};

module.exports = FlashBanner;
