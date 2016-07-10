"use strict";
var configns = require("@nodulus/config").config;
var config = new configns();
const data = require("./impl/datafactory");
class DalClass {
    constructor() {
        this.impl = null;
        this.initImpl();
    }
    initImpl() {
        if (config.appSettings.database) {
            if (config.appSettings.database.diskdb)
                this.impl = data.DataFactory.createDal("diskdb");
            else
                this.impl = data.DataFactory.createDal("mongodb");
        }
    }
    query(queryStr, params, callback) {
        if (this.impl === null)
            this.initImpl();
        this.impl.query(queryStr, params, callback);
    }
    connect(callback) {
        if (this.impl === null)
            this.initImpl();
        if (this.impl !== null) {
            this.impl.connect(callback);
        }
        else {
            callback({ "error": "no database option" }, null);
        }
    }
    getAll(queryStr, params, callback) {
        if (this.impl === null)
            this.initImpl();
        this.impl.getAll(queryStr, params, callback);
    }
    getCollection(name, callback) {
        if (this.impl === null)
            this.initImpl();
        this.impl.getCollection(name, callback);
    }
    getSchema(name, callback) {
        if (this.impl === null)
            this.initImpl();
        this.impl.getSchema(name, callback);
    }
    saveSchema(name, schema, callback) {
        if (this.impl === null)
            this.initImpl();
        this.impl.saveSchema(name, schema, callback);
    }
    deleteCollection(name, id, callback) {
        if (this.impl === null)
            this.initImpl();
        this.impl.deleteCollection(name, id, callback);
    }
    getSingle(name, id, callback) {
        if (this.impl === null)
            this.initImpl();
        this.impl.getSingle(name, id, callback);
    }
    pushObject(id, collectionName, propertyName, pushObject, callback) {
        if (this.impl === null)
            this.initImpl();
        this.impl.pushObject(id, collectionName, propertyName, pushObject, callback);
    }
    pullObject(id, collectionName, propertyName, pullObject, callback) {
        if (this.impl === null)
            this.initImpl();
        this.impl.pullObject(id, collectionName, propertyName, pullObject, callback);
    }
    getSet(idArr, collection, callback) {
        if (this.impl === null)
            this.initImpl();
        this.impl.getSet(idArr, collection, callback);
    }
    addToSet(id, collectionName, propertyName, pushObject, callback) {
        if (this.impl === null)
            this.initImpl();
        this.impl.addToSet(id, collectionName, propertyName, pushObject, callback);
    }
    get(entity, searchCommand, specialCommand, aggregateCommand, callback) {
        if (this.impl === null)
            this.initImpl();
        this.impl.get(entity, searchCommand, specialCommand, aggregateCommand, callback);
    }
}
var exportedClass = new DalClass();
module.exports = exportedClass;
