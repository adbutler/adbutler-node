'use strict';

var ResourceFactory = require('../ResourceFactory');

var VASTCampaign = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/vast-campaigns');
};

// Custom Resource Methods
// VASTCampaign.customMethod1 = function() {};
// VASTCampaign.customMethod2 = function() {};

module.exports = VASTCampaign;
