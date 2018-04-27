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

    this.advertisers                = require('./resources/Advertisers')(this);
    this.banners                    = require('./resources/Banners')(this);
    this.banners.customHTML         = require('./resources/CustomHTMLBanners')(this);
    this.banners.flash              = require('./resources/FlashBanners')(this);
    this.banners.images             = require('./resources/ImageBanners')(this);
    this.banners.richMedia          = require('./resources/RichMediaBanners')(this);
    this.bidders                    = require('./resources/Bidders')(this);
    this.campaignAssignments        = require('./resources/CampaignAssignments')(this);
    this.campaigns                  = require('./resources/Campaigns')(this);
    this.campaigns.banners          = require('./resources/BannerCampaigns')(this);
    this.campaigns.textAds          = require('./resources/TextAdCampaigns')(this);
    this.channels                   = require('./resources/Channels')(this);
    this.channels.zoneAssignments   = require('./resources/ChannelZoneAssignments')(this);
    this.creatives                  = require('./resources/Creatives')(this);
    this.creatives.flash            = require('./resources/FlashCreatives')(this);
    this.creatives.images           = require('./resources/ImageCreatives')(this);
    this.creatives.richMedia        = require('./resources/RichMediaCreatives')(this);
    this.creatives.videos           = require('./resources/VideoCreatives')(this);
    this.managers                   = require('./resources/Managers')(this);
    this.mediaGroups                = require('./resources/MediaGroups')(this);
    this.placements                 = require('./resources/Placements')(this);
    this.popups                     = require('./resources/Popups')(this);
    this.popups.customHTML          = require('./resources/CustomHTMLPopups')(this);
    this.popups.flash               = require('./resources/FlashPopups')(this);
    this.popups.images              = require('./resources/ImagePopups')(this);
    this.publishers                 = require('./resources/Publishers')(this);
    this.reports                    = require('./resources/Reports')(this);
    this.schedules                  = require('./resources/Schedules')(this);
    this.stats                      = require('./resources/Stats')(this);
    this.targets.geo                = require('./resources/GeoTargets')(this);
    this.targets.isp                = require('./resources/ISPTargets')(this);
    this.targets.platform           = require('./resources/PlatformTargets')(this);
    this.textAds                    = require('./resources/TextAds')(this);
    this.zones                      = require('./resources/Zones')(this);
    this.zones.banners              = require('./resources/BannerZones')(this);
    this.zones.emails               = require('./resources/EmailZones')(this);
    this.zones.tags                 = require('./resources/ZoneTags')(this);
    this.zones.vast                 = require('./resources/VASTZones')(this);
    this.campaigns.vast             = require('./resources/VASTCampaigns')(this);
    this.channels.vast              = require('./resources/VASTChannels')(this);
    this.channels.vastZoneAssigments= require('./resources/VASTChannelZoneAssignments')(this);
    this.banners.vast               = require('./resources/VASTBanners')(this);
    this.companions                 = require('./resources/VASTCompanions')(this);
    this.medias                     = require('./resources/VASTMedias')(this);
    this.schedules.vast             = require('./resources/VASTSchedules')(this);
    this.placements.vast            = require('./resources/VASTPlacements')(this);
    this.tracking                   = require('./resources/VASTTrackingLinks')(this);
}

module.exports = AdButler;
