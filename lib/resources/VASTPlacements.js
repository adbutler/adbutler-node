'use strict';

var ResourceFactory = require('../ResourceFactory');

var VASTPlacement = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/vast-placements');
};

// Custom Resource Methods
// VASTPlacement.customMethod1 = function() {};
// VASTPlacement.customMethod2 = function() {};

module.exports = VASTPlacement;