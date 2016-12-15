'use strict';

var ResourceFactory = require('../ResourceFactory');

var Placement = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/placements');
};

// Custom Resource Methods
// Placement.customMethod1 = function() {};
// Placement.customMethod2 = function() {};

module.exports = Placement;
