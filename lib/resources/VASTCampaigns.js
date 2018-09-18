'use strict';

var ResourceFactory = require('../ResourceFactory');

var VASTCampaign = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/vast-campaigns');
};

// Custom Resource Methods
// VASTCampaigns.customMethod1 = function() {};
// VASTCampaigns.customMethod2 = function() {};

module.exports = VASTCampaign;
