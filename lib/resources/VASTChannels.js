'use strict';

var ResourceFactory = require('../ResourceFactory');

var VASTChannel = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/vast-channels');
};

// Custom Resource Methods
// VASTChannel.customMethod1 = function() {};
// VASTChannel.customMethod2 = function() {};

module.exports = VASTChannel;