'use strict';

var ResourceFactory = require('../ResourceFactory');

var VASTCompanion = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/vast-companions');
};

// Custom Resource Methods
// VASTCompanion.customMethod1 = function() {};
// VASTCompanion.customMethod2 = function() {};

module.exports = VASTCompanion;
