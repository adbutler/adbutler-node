'use strict';

describe('In AdButler', function() {
    var expect = require('chai').expect;
    var util = require('util');
    var AdButler = require('../lib/adbutler');
    var adbutler;
    
    beforeEach(function() {
        adbutler = new AdButler();
    });

    afterEach(function() {
        adbutler = null;
    });
    
    describe('should only allow multiple instantiations', function() {
        var adbutler1 = new AdButler({
            apiKey: 'api_key_1',
        });
        var adbutler2 = new AdButler({
            apiKey: 'api_key_2',
        });
        expect(adbutler1.get('apiKey')).to.equal('api_key_1').that.is.a('string');
        expect(adbutler2.get('apiKey')).to.equal('api_key_2').that.is.a('string');
    });

    describe('the config object', function() {
        it(' should not be directly accessible', function () {
            expect(adbutler.config).to.be.undefined;
            expect(function () {
                adbutler.config.protocol;
            }).to.throw(Error);
        });
    });

    describe('the getter', function() {
        it('protocol: should either return \'http\' or \'https\'', function () {
            expect(adbutler.get('protocol')).to.be.oneOf(['http', 'https']);
        });
    });
        
    describe('the setter', function() {
        it('protocol: ', function () {
            expect(adbutler.get('protocol')).to.equal('https').that.is.a('string');
            adbutler.set('protocol', 'http');
            expect(adbutler.get('protocol')).to.equal('http').that.is.a('string');
            expect(function () {
                adbutler.set('protocol', null);
            }).to.throw(Error);
            expect(function () {
                adbutler.set('protocol', 123);
            }).to.throw(Error);
            expect(function () {
                adbutler.set('protocol', {});
            }).to.throw(Error);
            expect(function () {
                adbutler.set('protocol', []);
            }).to.throw(Error);
            expect(function () {
                adbutler.set('protocol', 'blabla');
            }).to.throw(Error);
        });
        it('host: ', function() {

        });
    });
});