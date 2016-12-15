'use strict';

var ResourceFactory = require('../ResourceFactory');

var BannerZone = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/zones/banner');
};

// Custom Resource Methods
// BannerZone.customMethod1 = function() {};
// BannerZone.customMethod2 = function() {};

module.exports = BannerZone;
