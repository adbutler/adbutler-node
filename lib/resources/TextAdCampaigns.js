'use strict';

var ResourceFactory = require('../ResourceFactory');

var TextAdCampaign = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/campaigns/text');
};

// Custom Resource Methods
// TextAdCampaign.customMethod1 = function() {};
// TextAdCampaign.customMethod2 = function() {};

module.exports = TextAdCampaign;