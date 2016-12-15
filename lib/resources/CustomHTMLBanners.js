'use strict';

var ResourceFactory = require('../ResourceFactory');

var CustomHTMLBanner = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/banners/custom-html');
};

// Custom Resource Methods
// CustomHTMLBanner.customMethod1 = function() {};
// CustomHTMLBanner.customMethod2 = function() {};

module.exports = CustomHTMLBanner;
