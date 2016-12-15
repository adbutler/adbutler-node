'use strict';

var ResourceFactory = require('../ResourceFactory');

var Advertiser = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/advertisers');
};

// Custom Resource Methods
// Advertiser.customMethod1 = function() {};
// Advertiser.customMethod2 = function() {};

module.exports = Advertiser;