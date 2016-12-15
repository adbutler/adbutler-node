'use strict';

var utils = require('../lib/utils');
var expect = require('chai').expect;

describe('utils', function() {
    var AdButler = require('../lib/adbutler');
    var adbutler;
    
    beforeEach(function() {
        adbutler = new AdButler();
    });
    
    afterEach(function() {
        adbutler = null;
    })

    describe('makeRequestURL', function() {
        it('makes the correct request URL', function() {
            var url = utils.mkRequestURL.call(adbutler, '/blablabla/123', null);
            expect(url).to.equal('https://api.adbutler.com/v1/blablabla/123');
        });
        it('URL request with query parameters', function() {
            var url = utils.mkRequestURL.call(adbutler, '/blablabla/123', {a:1, b:2, c:3});
            expect(url).to.equal('https://api.adbutler.com/v1/blablabla/123?a=1&b=2&c=3');
        });

        describe('handles query parameters correctly', function() {
            var url = 'https://api.adbutler.com/v1/abc?';

            it('Handles basic types', function () {
                expect(utils.mkRequestURL.call(adbutler, '/abc', {
                    a: 1,
                    b: 'foo',
                })).to.equal(url + 'a=1&b=foo');
            });

            it('Handles deeply nested object', function () {
                expect(decodeURI(utils.mkRequestURL.call(adbutler, '/abc', {
                    a: {
                        b: {
                            c: {
                                d: 2,
                            },
                        },
                    },
                }))).to.equal(url + 'a[b][c][d]=2');
            });

            it('Handles arrays of objects', function () {
                expect(decodeURI(utils.mkRequestURL.call(adbutler, '/abc', {
                    a: [
                        {b: 'c'},
                        {b: 'd'},
                    ],
                }))).to.equal(url + 'a[][b]=c&a[][b]=d');
            })

            it('Creates a string from an object, handling shallow nested objects', function () {
                expect(utils.mkRequestURL.call(adbutler, '/abc', {
                    test: 1,
                    foo: 'baz',
                    somethingElse: '::""%&',
                    nested: {
                        1: 2,
                        'a n o t h e r': null,
                    },
                })).to.equal(url + [
                    'test=1',
                    'foo=baz',
                    'somethingElse=%3A%3A%22%22%25%26',
                    'nested%5B1%5D=2', // Unencoded: nested[1]=2
                    'nested%5Ba%20n%20o%20t%20h%20e%20r%5D=',
                ].join('&'));
            });
        });

        describe('handles different configurations correctly', function() {
            it('uses HTTPS protocol when configured to do so', function () {
                adbutler.set('protocol', 'https');
                expect(
                    utils.mkRequestURL.call(adbutler, '/abc', {})
                ).to.equal('https://api.adbutler.com/v1/abc');

            });
            it('uses the host specified in the config', function () {
                adbutler.set('host', 'api.adbutler.com');
                expect(
                    utils.mkRequestURL.call(adbutler, '/abc', {})
                ).to.equal('https://api.adbutler.com/v1/abc');

            });
            it('uses the port specified in the config', function () {
                adbutler.set('port', '8000');
                expect(
                    utils.mkRequestURL.call(adbutler, '/abc', {})
                ).to.equal('https://api.adbutler.com:8000/v1/abc');

            });
            it('uses the version specified in the config', function () {
                adbutler.set('version', 'v2');
                expect(
                    utils.mkRequestURL.call(adbutler, '/abc', {})
                ).to.equal('https://api.adbutler.com/v2/abc');
            });
        });
    });

    describe('getQueryParamsAndCallback', function() {
        var id = 123;
        var qp = {a:1, b:2};
        var cb = function(){};

        it('`queryParams` and `callback` should be null when only a numeric ID is given', function() {
            var obj = utils.getQueryParamsAndCallback(id)
            expect(obj).to.have.property('id').that.is.a('number');
            expect(obj).to.have.property('queryParams').that.is.null;
            expect(obj).to.have.property('callback').that.is.null;
        });
        it('`id` and `callback` should be null when only a query parameter object is given', function() {
            var obj = utils.getQueryParamsAndCallback(qp)
            expect(obj).to.have.property('id').that.is.null;
            expect(obj).to.have.property('queryParams').that.is.an('object');
            expect(obj).to.have.property('callback').that.is.null;
        });
        it('`callback` should be null when only a numeric ID and a query parameter object is given', function() {
            var obj = utils.getQueryParamsAndCallback(id, qp)
            expect(obj).to.have.property('id').that.is.a('number');
            expect(obj).to.have.property('queryParams').that.is.an('object');
            expect(obj).to.have.property('callback').that.is.null;
        });
        it('`id` should be null when only a query parameter object and callback function is given', function() {
            var obj = utils.getQueryParamsAndCallback(qp, cb)
            expect(obj).to.have.property('id').that.is.null;
            expect(obj).to.have.property('queryParams').that.is.an('object');
            expect(obj).to.have.property('callback').that.is.a('function');
        });
    });

});