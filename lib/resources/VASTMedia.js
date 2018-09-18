'use strict';

var ResourceFactory = require('../ResourceFactory');

var VASTMedia = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/vast-media', {
        create: false,
        read: false,
        update: false,
        delete: false,
    });
};

// Custom Resource Methods
// VASTMedia.customMethod1 = function() {};
// VASTMedia.customMethod2 = function() {};

module.exports = VASTMedia;
