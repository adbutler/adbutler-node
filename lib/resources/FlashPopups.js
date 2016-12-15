'use strict';

var ResourceFactory = require('../ResourceFactory');

var FlashPopup = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/popups/flash');
};

// Custom Resource Methods
// FlashPopup.customMethod1 = function() {};
// FlashPopup.customMethod2 = function() {};

module.exports = FlashPopup;
