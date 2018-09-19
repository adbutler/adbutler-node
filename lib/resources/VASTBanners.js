'use strict';

var ResourceFactory = require('../ResourceFactory');

var VASTBanner = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/vast-banners');
};

// Custom Resource Methods
// VASTBanner.customMethod1 = function() {};
// VASTBanner.customMethod2 = function() {};

module.exports = VASTBanner;
