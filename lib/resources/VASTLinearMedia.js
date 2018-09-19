'use strict';

var ResourceFactory = require('../ResourceFactory');

var VASTLinearMedia = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/vast-media/linear');
};

// Custom Resource Methods
// VASTLinearMedia.customMethod1 = function() {};
// VASTLinearMedia.customMethod2 = function() {};

module.exports = VASTLinearMedia;
