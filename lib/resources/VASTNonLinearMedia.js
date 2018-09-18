'use strict';

var ResourceFactory = require('../ResourceFactory');

var VASTNonLinearMedia = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/vast-media/non-linear');
};

// Custom Resource Methods
// VASTNonLinearMedia.customMethod1 = function() {};
// VASTNonLinearMedia.customMethod2 = function() {};

module.exports = VASTNonLinearMedia;
