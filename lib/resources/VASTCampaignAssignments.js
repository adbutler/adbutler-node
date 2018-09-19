'use strict';

var ResourceFactory = require('../ResourceFactory');

var VASTCampaignAssignment = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/vast-campaign-assignments');
};

// Custom Resource Methods
// VASTCampaignAssignment.customMethod1 = function() {};
// VASTCampaignAssignment.customMethod2 = function() {};

module.exports = VASTCampaignAssignment;
