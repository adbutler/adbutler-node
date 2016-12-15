'use strict';

var ResourceFactory = require('../ResourceFactory');

var Schedule = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/schedules');
};

// Custom Resource Methods
// Schedule.customMethod1 = function() {};
// Schedule.customMethod2 = function() {};

module.exports = Schedule;
