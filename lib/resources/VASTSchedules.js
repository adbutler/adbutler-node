'use strict';

var ResourceFactory = require('../ResourceFactory');

var VASTSchedules = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/vast-schedules');
};

// Custom Resource Methods
// VASTSchedules.customMethod1 = function() {};
// VASTSchedules.customMethod2 = function() {};

module.exports = VASTSchedules;