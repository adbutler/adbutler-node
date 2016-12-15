'use strict';

var ResourceFactory = require('../ResourceFactory');

function makeResourceURL(id) {
    return '/zones/banner/' + id + '/tags';
};

var ZoneTag = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, makeResourceURL, {
        create: false,
        update: false,
        delete: false,
        list: false,
    });
};

// Custom Resource Methods
// Banner.customMethod1 = function() {};
// Banner.customMethod2 = function() {};

module.exports = ZoneTag;