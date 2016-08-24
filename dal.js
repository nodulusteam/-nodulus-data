"use strict";
/*                 _       _
                 | |     | |
  _ __   ___   __| |_   _| |_   _ ___
 | '_ \ / _ \ / _` | | | | | | | / __|
 | | | | (_) | (_| | |_| | | |_| \__ \
 |_| |_|\___/ \__,_|\__,_|_|\__,_|___/
 @nodulus open source | ©Roi ben haim  ®2016
 */
/// <reference path="./typings/main.d.ts" />
var config = require("@nodulus/config").config;
var data = require("./datafactory");
var DalClass = (function () {
    function DalClass() {
        this.impl = null;
        this.initImpl();
    }
    DalClass.prototype.initImpl = function () {
        if (config.appSettings.database) {
            var dbkey = Object.keys(config.appSettings.database)[0];
            this.impl = data.DataFactory.createDal(dbkey);
        }
    };
    DalClass.prototype.query = function (queryStr, params, callback) {
        if (this.impl === null)
            this.initImpl();
        this.impl.query(queryStr, params, callback);
    };
    DalClass.prototype.connect = function (callback) {
        if (this.impl === null)
            this.initImpl();
        if (this.impl !== null) {
            this.impl.connect(callback);
        }
        else {
            callback({ "error": "no database option" }, null);
        }
    };
    DalClass.prototype.getAll = function (queryStr, params, callback) {
        if (this.impl === null)
            this.initImpl();
        this.impl.getAll(queryStr, params, callback);
    };
    DalClass.prototype.getCollection = function (name, callback) {
        if (this.impl === null)
            this.initImpl();
        this.impl.getCollection(name, callback);
    };
    DalClass.prototype.getSchema = function (name, callback) {
        if (this.impl === null)
            this.initImpl();
        this.impl.getSchema(name, callback);
    };
    DalClass.prototype.saveSchema = function (name, schema, callback) {
        if (this.impl === null)
            this.initImpl();
        this.impl.saveSchema(name, schema, callback);
    };
    DalClass.prototype.deleteCollection = function (name, id, callback) {
        if (this.impl === null)
            this.initImpl();
        this.impl.deleteCollection(name, id, callback);
    };
    DalClass.prototype.getSingle = function (name, id, callback) {
        if (this.impl === null)
            this.initImpl();
        this.impl.getSingle(name, id, callback);
    };
    DalClass.prototype.pushObject = function (id, collectionName, propertyName, pushObject, callback) {
        if (this.impl === null)
            this.initImpl();
        this.impl.pushObject(id, collectionName, propertyName, pushObject, callback);
    };
    DalClass.prototype.pullObject = function (id, collectionName, propertyName, pullObject, callback) {
        if (this.impl === null)
            this.initImpl();
        this.impl.pullObject(id, collectionName, propertyName, pullObject, callback);
    };
    DalClass.prototype.getSet = function (idArr, collection, callback) {
        if (this.impl === null)
            this.initImpl();
        this.impl.getSet(idArr, collection, callback);
    };
    DalClass.prototype.addToSet = function (id, collectionName, propertyName, pushObject, callback) {
        if (this.impl === null)
            this.initImpl();
        this.impl.addToSet(id, collectionName, propertyName, pushObject, callback);
    };
    DalClass.prototype.get = function (entity, searchCommand, specialCommand, aggregateCommand, callback) {
        if (this.impl === null)
            this.initImpl();
        this.impl.get(entity, searchCommand, specialCommand, aggregateCommand, callback);
    };
    return DalClass;
}());
var exportedClass = new DalClass();
module.exports = exportedClass;
