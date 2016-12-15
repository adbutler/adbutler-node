'use strict';

var ResourceFactory = require('../ResourceFactory');

var Channel = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/channels');
};

// Custom Resource Methods
// Channel.customMethod1 = function() {};
// Channel.customMethod2 = function() {};

module.exports = Channel;
