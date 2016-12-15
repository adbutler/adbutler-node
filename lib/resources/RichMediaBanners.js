'use strict';

var ResourceFactory = require('../ResourceFactory');

var RichMediaBanner = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/banners/rich-media');
};

// Custom Resource Methods
// RichMediaBanner.customMethod1 = function() {};
// RichMediaBanner.customMethod2 = function() {};

module.exports = RichMediaBanner;
