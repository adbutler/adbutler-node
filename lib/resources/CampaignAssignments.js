'use strict';

var ResourceFactory = require('../ResourceFactory');

var BannerCampaign = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/campaigns/banner');
};

// Custom Resource Methods
// BannerCampaign.customMethod1 = function() {};
// BannerCampaign.customMethod2 = function() {};

module.exports = BannerCampaign;
