'use strict';

var ResourceFactory = require('../ResourceFactory');

var TextAdZone = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/zones/text');
};

// Custom Resource Methods
// TextAdZone.customMethod1 = function() {};
// TextAdZone.customMethod2 = function() {};

module.exports = TextAdZone;
