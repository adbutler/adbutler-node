'use strict';

var ResourceFactory = require('../ResourceFactory');

var Publisher = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/publishers');
};

// Custom Resource Methods
// Publisher.customMethod1 = function() {};
// Publisher.customMethod2 = function() {};

module.exports = Publisher;
