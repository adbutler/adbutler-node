'use strict';

var ResourceFactory = require('../ResourceFactory');

function makeResourceURL(id) {
    return '/reports';
};

var Report = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, makeResourceURL, {
        create: false,
        update: false,
        delete: false,
        list: false,
    });
};

// Custom Resource Methods
// Report.customMethod1 = function() {};
// Report.customMethod2 = function() {};

module.exports = Report;
