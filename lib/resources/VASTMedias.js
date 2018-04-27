'use strict';

var ResourceFactory = require('../ResourceFactory');

var VASTMedia = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/vast-medias');
};

// Custom Resource Methods
// VASTMedia.customMethod1 = function() {};
// VASTMedia.customMethod2 = function() {};

module.exports = VASTMedia;