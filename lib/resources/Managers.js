'use strict';

var ResourceFactory = require('../ResourceFactory');

var Manager = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/managers');
};

// Custom Resource Methods
// Manager.customMethod1 = function() {};
// Manager.customMethod2 = function() {};

module.exports = Manager;
