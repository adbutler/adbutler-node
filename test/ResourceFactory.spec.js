'use strict';

describe('ResourceFactory', function() {
    var ResourceFactory = require('../lib/ResourceFactory');
    var expect = require('chai').expect;

    it('should not contain the `create` method when it is false in the config', function() {
        var ResourceFactory = require('../lib/ResourceFactory');
        var resource = ResourceFactory.makeResource('/blablabla', {
            create: false
        });
        expect(resource).to.not.have.property('create').that.is.a('function');
        expect(resource).to.have.property('read').that.is.a('function');
        expect(resource).to.have.property('update').that.is.a('function');
        expect(resource).to.have.property('delete').that.is.a('function');
        expect(resource).to.have.property('list').that.is.a('function');
    });

    it('should not contain the `read` method when it is false in the config', function() {
        var ResourceFactory = require('../lib/ResourceFactory');
        var resource = ResourceFactory.makeResource('/blablabla', {
            read: false
        });
        expect(resource).to.have.property('create').that.is.a('function');
        expect(resource).to.not.have.property('read').that.is.a('function');
        expect(resource).to.have.property('update').that.is.a('function');
        expect(resource).to.have.property('delete').that.is.a('function');
        expect(resource).to.have.property('list').that.is.a('function');
    });

    it('should not contain the `update` method when it is false in the config', function() {
        var ResourceFactory = require('../lib/ResourceFactory');
        var resource = ResourceFactory.makeResource('/blablabla', {
            update: false
        });
        expect(resource).to.have.property('create').that.is.a('function');
        expect(resource).to.have.property('read').that.is.a('function');
        expect(resource).to.not.have.property('update').that.is.a('function');
        expect(resource).to.have.property('delete').that.is.a('function');
        expect(resource).to.have.property('list').that.is.a('function');
    });

    it('should not contain the `delete` method when it is false in the config', function() {
        var ResourceFactory = require('../lib/ResourceFactory');
        var resource = ResourceFactory.makeResource('/blablabla', {
            delete: false
        });
        expect(resource).to.have.property('create').that.is.a('function');
        expect(resource).to.have.property('read').that.is.a('function');
        expect(resource).to.have.property('update').that.is.a('function');
        expect(resource).to.not.have.property('delete').that.is.a('function');
        expect(resource).to.have.property('list').that.is.a('function');
    });

    it('should not contain the `list` method when it is false in the config', function() {
        var ResourceFactory = require('../lib/ResourceFactory');
        var resource = ResourceFactory.makeResource('/blablabla', {
            list: false
        });
        expect(resource).to.have.property('create').that.is.a('function');
        expect(resource).to.have.property('read').that.is.a('function');
        expect(resource).to.have.property('update').that.is.a('function');
        expect(resource).to.have.property('delete').that.is.a('function');
        expect(resource).to.not.have.property('list').that.is.a('function');
    });

});