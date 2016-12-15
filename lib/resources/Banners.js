'use strict';

var ResourceFactory = require('../ResourceFactory');

var Banner = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/banners', {
        create: false,
        read: false,
        update: false,
        delete: false,
    });
};

// Custom Resource Methods
// Banner.customMethod1 = function() {};
// Banner.customMethod2 = function() {};

module.exports = Banner;
