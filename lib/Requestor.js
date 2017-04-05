var Promise = require('bluebird');
var URL = require('url');
var util = require('util');
var request;

function _constructOptionsArray( method, url, data, apiKey ) {
    var fs = require('fs');
    
    // predicate(s)
    var isPOST = method === 'POST';
    var isPUT  = method === 'PUT';
    var isCreativeURL = url.split('/').indexOf("creatives") > -1;
    var hasFile = isCreativeURL && ( isPOST || isPUT );

    var opts = {
        uri: url,
        method: method,
        json: true, // response type
        headers : {
            'Authorization': 'Basic ' + apiKey,
        },
    }

    opts.method = hasFile && isPUT ? 'POST' : opts.method;

    if (!hasFile && (isPOST || isPUT)) {
        opts.body = data;
    }

    if (hasFile) {
        opts.formData = {};
        if (data.file) {
            opts.formData.file = fs.createReadStream(data.file)
            delete data.file;
        }
        opts.formData.attributes = JSON.stringify(data);
    }
    
    return opts;
}

/**
 * this refers to adbutler
 * @param method
 * @param url
 * @param data
 * @param callback
 * @param config
 * @returns {*}
 */
function makeRequest( method, url, data, callback ) {
    var opts = _constructOptionsArray( method, url, data, this.get('apiKey') );
    checkForErrorsAndThrowThem(opts);
    return !!callback ? invokeCallback(opts, callback) : returnPromise(opts);
}

/**
 * 
 * @param opts
 */
function checkForErrorsAndThrowThem( opts ) {
    // TODO: throw error if method is POST or PUT nad data is null
    if ((opts.method === 'POST' || opts.method === 'PUT') && opts.data === null) {
        throw new Error('Data cannot be null in POST and PUT requests');
    }
    var p = URL.parse(opts.uri);
    if (p.protocol === null || p.host === null || p.slashes === null) {
        // TODO: throw error if malformed URL
        
        throw new Error('URL is malformed');
        // how to check for malformed URL? 
    }
}

function invokeCallback(opts, callback) {
    return request(opts, function (err, response, data) {
        callback.call(null, err, data);
    });
}

function returnPromise(opts) {
    return new Promise( function(resolve, reject) {
        try {
            request(opts, function (err, response, data) {
                // TODO; handle both connection errors and response errors
                var error = {};
                if (response && response.statusCode){
                    error.status = response && response.statusCode ? response.statusCode : null;
                    switch (response.statusCode) {
                        case 404:
                            error.message = "Resource not found.";
                            break;
                        // add other cases
                    }
                    response.statusCode === 200 ? resolve(data) : reject(err);
                } else {
                    reject(err);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
}

module.exports = function(HttpRequestClient) {
    request = HttpRequestClient;
    return {
        makeRequest: makeRequest
    }
}
