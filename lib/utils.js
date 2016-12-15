'use strict';

// function mkRequestURL(resourcePathWithID, queryParams, config) {
//     var qs = require('qs');
//     var port    = config.port    ? ':' + config.port    : '';
//     var version = config.version ? '/' + config.version : '/v1'; // defaults to version 1
//     var questionMark = !!queryParams && JSON.stringify(queryParams) !== '{}' ? '?' : '';
//     var params  = qs.stringify(queryParams, {arrayFormat: 'brackets'});
//     return config.protocol + '://' + config.host + port + version + resourcePathWithID + questionMark + params;
// }

function mkRequestURL(resourcePathWithID, queryParams) {
    var qs = require('qs');
    var port    = this.get('port')    ? ':' + this.get('port')    : '';
    var version = this.get('version') ? '/' + this.get('version') : '/v1'; // defaults to version 1
    var questionMark = !!queryParams && JSON.stringify(queryParams) !== '{}' ? '?' : '';
    var params  = qs.stringify(queryParams, {arrayFormat: 'brackets'});
    return this.get('protocol') + '://' + this.get('host') + port + version + resourcePathWithID + questionMark + params;
}

function getQueryParamsAndCallback(idOrQueryParams, queryParamsOrCB, callback) {
    return {
        id:          typeof idOrQueryParams === 'number'   ? idOrQueryParams : null,
        queryParams: typeof idOrQueryParams === 'object'   ? idOrQueryParams : (typeof queryParamsOrCB === 'object' ? queryParamsOrCB : null),
        callback:    typeof queryParamsOrCB === 'function' ? queryParamsOrCB : (typeof callback === 'function' ? callback : null),
    };
}

module.exports = {
    mkRequestURL: mkRequestURL,
    getQueryParamsAndCallback: getQueryParamsAndCallback,
};
