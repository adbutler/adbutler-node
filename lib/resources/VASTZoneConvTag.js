'use strict';

var ResourceFactory = require('../ResourceFactory');

function makeResourceURL(id) {
    return '/vast-zones/' + id + '/conversion-tag';
};

var ConvTag = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, makeResourceURL, {
        create: false,
        update: false,
        delete: false,
        list: false,
    });
};

// Custom Resource Methods
// ConvTag.customMethod1 = function() {};
// ConvTag.customMethod2 = function() {};

module.exports = ConvTag;