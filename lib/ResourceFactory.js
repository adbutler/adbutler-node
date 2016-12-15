
function makeResource(resourcePath, methods) {
    var Utils = require('./utils');
    var Requestor = require('./Requestor')(require('request'));
    var resourceMethods = {};
    var adbutler = this;
    
    // predicates
    var hasCreate = methods && methods.hasOwnProperty('create') ? methods.create : true;
    var hasRead   = methods && methods.hasOwnProperty('read')   ? methods.read   : true;
    var hasUpdate = methods && methods.hasOwnProperty('update') ? methods.update : true;
    var hasDelete = methods && methods.hasOwnProperty('delete') ? methods.delete : true;
    var hasList   = methods && methods.hasOwnProperty('list')   ? methods.list   : true;
    
    if (hasCreate) {
        resourceMethods.create = function(data, queryParamsOrCallback, callback) {
            var obj = Utils.getQueryParamsAndCallback(null, queryParamsOrCallback, callback);
            var url = Utils.mkRequestURL.call(adbutler, typeof resourcePath === 'function' ? resourcePath(obj.id) : resourcePath, obj.queryParams);
            return Requestor.makeRequest.call(adbutler, 'POST', url, data, obj.callback);
        };
    }

    if (hasRead) {
        resourceMethods.read = function(id, queryParamsOrCallback, callback) {
            var obj = Utils.getQueryParamsAndCallback(id, queryParamsOrCallback, callback);
            var url = Utils.mkRequestURL.call(adbutler, typeof resourcePath === 'function' ? resourcePath(obj.id) : resourcePath + "/" + obj.id, obj.queryParams);
            return Requestor.makeRequest.call(adbutler, 'GET', url, null, obj.callback);
        };
    }

    if (hasUpdate) {
        resourceMethods.update = function(id, data, queryParamsOrCallback, callback) {
            var obj = Utils.getQueryParamsAndCallback(id, queryParamsOrCallback, callback); // TODO: if data.file, use `request.post`
            var url = Utils.mkRequestURL.call(adbutler, typeof resourcePath === 'function' ? resourcePath(obj.id) : resourcePath + "/" + obj.id, obj.queryParams);
            return Requestor.makeRequest.call(adbutler, 'PUT', url, data, obj.callback);
        };
    }

    if (hasDelete) {
        resourceMethods.delete = function(id, callback) {
            var url = Utils.mkRequestURL.call(adbutler, resourcePath + "/" + id, null);
            return Requestor.makeRequest.call(adbutler, 'DELETE', url, null, callback);
        };
    }

    if (hasList) {
        resourceMethods.list = function(queryParamsOrCallback, callback) {
            var obj = Utils.getQueryParamsAndCallback(null, queryParamsOrCallback, callback);
            var url = Utils.mkRequestURL.call(adbutler, typeof resourcePath === 'function' ? resourcePath(obj.id) : resourcePath, obj.queryParams);
            return Requestor.makeRequest.call(adbutler, 'GET', url, null, obj.callback);
        };
    }
    
    return resourceMethods;
}

module.exports = {
    makeResource: makeResource
}
