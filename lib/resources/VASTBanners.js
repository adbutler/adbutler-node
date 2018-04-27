'use strict';

var ResourceFactory = require('../ResourceFactory');

var VASTBanners = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/vast-banners');
};

// Custom Resource Methods
// VASTBanners.customMethod1 = function() {};
// VASTBanners.customMethod2 = function() {};

module.exports = VASTBanners;
