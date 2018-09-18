'use strict';

var AdButler = function ( params ) {
    var VERSION = 'v1';
    var config = {
        protocol: 'https', // http | https
        host: 'api.adbutler.com',
        port: null,
        version: VERSION,
        timeout: 10000,
        basePath: '/',
        method: 'GET',
        packageVersion: VERSION,
        apiKey: null,
        userAgent: {
            bindings_version: VERSION,
            lang: 'node',
            lang_version: process.version, // nodejs version
            platform: process.platform,
            publisher: 'sparklit',
        }
    };
        
    this.get = function(key) {
        return config[key];
    };
    
    this.set = function(key, value) {
        switch(key) {
            case 'protocol':
                if (typeof value === 'string' && (value === 'http' || value === 'https')) {
                    config[key] = value;
                } else {
                    throw new Error("'protocol' can only be 'http' or 'https'")
                }
                break;
            case 'host':
                config[key] = value;
                break;
            case 'port':
                config[key] = value;
                break;
            case 'version':
                config[key] = value;
                break;
            case 'timeout':
                config[key] = value;
                break;
            case 'basePath':
                config[key] = value;
                break;
            case 'method':
                config[key] = value;
                break;
            case 'packageVersion':
                config[key] = value;
                break;
            case 'apiKey':
                config[key] = value;
                break;
            case 'userAgent':
                config[key] = value;
                break;
            default:
                throw new Error(key + ' does not exist.');
        }
    };
    
    for (var key in params) {
        this.set(key, params[key]);
    }

    this.targets = {};

    this.advertisers         = require('./resources/Advertisers')(this);
    this.banners             = require('./resources/Banners')(this);
    this.banners.customHTML  = require('./resources/CustomHTMLBanners')(this);
    this.banners.customHTML.conversionTag = require('./resources/CustomHTMLBannerConvTag')(this);
    this.banners.flash       = require('./resources/FlashBanners')(this);
    this.banners.flash.conversionTag = require('./resources/FlashBannerConvTag')(this);
    this.banners.images      = require('./resources/ImageBanners')(this);
    this.banners.images.conversionTag = require('./resources/ImageBannerConvTag')(this);
    this.banners.richMedia   = require('./resources/RichMediaBanners')(this);
    this.banners.richMedia.conversionTag = require('./resources/RichMediaBannerConvTag')(this);
    this.bidders             = require('./resources/Bidders')(this);
    this.campaignAssignments = require('./resources/CampaignAssignments')(this);
    this.campaigns           = require('./resources/Campaigns')(this);
    this.campaigns.banners   = require('./resources/BannerCampaigns')(this);
    this.campaigns.banners.conversionTag = require('./resources/BannerCampaignConvTag')(this);
    this.campaigns.textAds   = require('./resources/TextAdCampaigns')(this);
    this.campaigns.textAds.conversionTag = require('./resources/TextAdCampaignConvTag')(this);
    this.channels            = require('./resources/Channels')(this);
    this.creatives           = require('./resources/Creatives')(this);
    this.creatives.flash     = require('./resources/FlashCreatives')(this);
    this.creatives.images    = require('./resources/ImageCreatives')(this);
    this.creatives.richMedia = require('./resources/RichMediaCreatives')(this);
    this.creatives.videos    = require('./resources/VideoCreatives')(this);
    this.managers            = require('./resources/Managers')(this);
    this.mediaGroups         = require('./resources/MediaGroups')(this);
    this.placements          = require('./resources/Placements')(this);
    this.placements.conversionTag = require('./resources/PlacementConvTag')(this);
    this.popups              = require('./resources/Popups')(this);
    this.popups.customHTML   = require('./resources/CustomHTMLPopups')(this);
    this.popups.flash        = require('./resources/FlashPopups')(this);
    this.popups.images       = require('./resources/ImagePopups')(this);
    this.publishers          = require('./resources/Publishers')(this);
    this.reports             = require('./resources/Reports')(this);
    this.schedules           = require('./resources/Schedules')(this);
    this.stats               = require('./resources/Stats')(this);
    this.targets.geo         = require('./resources/GeoTargets')(this);
    this.targets.isp         = require('./resources/ISPTargets')(this);
    this.targets.platform    = require('./resources/PlatformTargets')(this);
    this.textAds             = require('./resources/TextAds')(this);
    this.textAds.conversionTag = require('./resources/TextAdConvTag')(this);
    this.zones               = require('./resources/Zones')(this);
    this.zones.tags          = require('./resources/ZoneTags')(this);
    this.zones.banners       = require('./resources/BannerZones')(this);
    this.zones.banners.conversionTag = require('./resources/BannerZoneConvTag')(this);
    this.zones.emails        = require('./resources/EmailZones')(this);
    this.zones.emails.conversionTag = require('./resources/EmailZoneConvTag')(this);
    this.zones.textAds       = require('./resources/TextAdZones')(this);
    this.zones.textAds.conversionTag = require('./resources/TextAdZoneConvTag')(this);

    this.vastBanners = require('./resources/VASTBanners')(this);
    this.vastBanners.conversionTag = require('./resources/VASTBannerConvTag')(this);
    this.vastCampaignAssignments = require('./resources/VASTCampaignAssignments')(this);
    this.vastCampaigns = require('./resources/VASTCampaigns')(this);
    this.vastCampaigns.conversionTag = require('./resources/VASTCampaignConvTag')(this);
    this.vastChannels = require('./resources/VASTChannels')(this);
    this.vastChannelZoneAssignments = require('./resources/VASTChannelZoneAssignments')(this);
    this.vastCompanions = require('./resources/VASTCompanions')(this);
    this.vastMedia = require('./resources/VASTMedia')(this);
    this.vastMedia.linear = require('./resources/VASTLinearMedia')(this);
    this.vastMedia.nonLinear = require('./resources/VASTNonLinearMedia')(this);
    this.vastPlacements = require('./resources/VASTPlacements')(this);
    this.vastPlacements.conversionTag = require('./resources/VASTPlacementConvTag')(this);
    this.vastReports = require('./resources/VASTReports')(this);
    this.vastSchedules = require('./resources/VASTSchedules')(this);
    this.vastTracking = require('./resources/VASTTracking')(this);
    this.vastZones = require('./resources/VASTZones')(this);
    this.vastZones.conversionTag = require('./resources/VASTZoneConvTag')(this);
}

module.exports = AdButler;
