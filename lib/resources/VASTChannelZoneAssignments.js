'use strict';

var ResourceFactory = require('../ResourceFactory');

var VASTChannelZoneAssignment = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/vast-channel-zone-assignments');
};

// Custom Resource Methods
// VASTChannelZoneAssignment.customMethod1 = function() {};
// VASTChannelZoneAssignment.customMethod2 = function() {};

module.exports = VASTChannelZoneAssignment;
