'use strict';

var ResourceFactory = require('../ResourceFactory');

var CustomHTMLPopup = function(adbutler) {
    return ResourceFactory.makeResource.call(adbutler, '/popups/custom-html');
};

// Custom Resource Methods
// CustomHTMLPopup.customMethod1 = function() {};
// CustomHTMLPopup.customMethod2 = function() {};

module.exports = CustomHTMLPopup;
