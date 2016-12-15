'use strict';

var ResourceFactory = require('../ResourceFactory');

var TextAd = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/text-ads');
};

// Custom Resource Methods
// TextAd.customMethod1 = function() {};
// TextAd.customMethod2 = function() {};

module.exports = TextAd;
