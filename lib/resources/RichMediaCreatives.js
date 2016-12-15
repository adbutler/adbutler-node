'use strict';

var ResourceFactory = require('../ResourceFactory');

var RichMediaCreative = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/creatives/rich-media');
};

// Custom Resource Methods
// RichMediaCreative.customMethod1 = function() {};
// RichMediaCreative.customMethod2 = function() {};

module.exports = RichMediaCreative;