'use strict';

var ResourceFactory = require('../ResourceFactory');

var Bidder = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/bidders');
};

// Custom Resource Methods
// Bidder.customMethod1 = function() {};
// Bidder.customMethod2 = function() {};

module.exports = Bidder;
