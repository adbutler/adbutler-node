'use strict';

var ResourceFactory = require('../ResourceFactory');

var ChannelZoneAssignments = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/channel-zone-assignments');
};

// Custom Resource Methods
// ChannelZoneAssignments.customMethod1 = function() {};
// ChannelZoneAssignments.customMethod2 = function() {};

module.exports = ChannelZoneAssignments;
