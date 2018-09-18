'use strict';

var ResourceFactory = require('../ResourceFactory');

var VASTSchedule = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/vast-schedules');
};

// Custom Resource Methods
// VASTSchedule.customMethod1 = function() {};
// VASTSchedule.customMethod2 = function() {};

module.exports = VASTSchedule;
