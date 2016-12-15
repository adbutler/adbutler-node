'use strict';

var ResourceFactory = require('../ResourceFactory');

var ImagePopup = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/popups/image');
};

// Custom Resource Methods
// ImagePopup.customMethod1 = function() {};
// ImagePopup.customMethod2 = function() {};

module.exports = ImagePopup;
