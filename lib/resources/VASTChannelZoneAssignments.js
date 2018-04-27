'use strict';

var ResourceFactory = require('../ResourceFactory');

var VASTChannelZoneAssigment = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/vast-channel-zone-assignemnts');
};

// Custom Resource Methods
// VASTChannelZoneAssigment.customMethod1 = function() {};
// VASTChannelZoneAssigment.customMethod2 = function() {};

module.exports = VASTChannelZoneAssigment;