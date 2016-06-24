"use strict";
const data = require("./impl/datafactory");
class DalClass {
    constructor() {
        this.impl = null;
    }
    query(queryStr, params, callback) {
        if (this.impl === null) {
            if (global.config.appSettings.database) {
                if (global.config.appSettings.database.diskdb)
                    this.impl = data.DataFactory.createDal("diskdb");
                else
                    this.impl = data.DataFactory.createDal("mongodb");
            }
        }
        this.impl.query(queryStr, params, callback);
    }
    connect(callback) {
        if (this.impl === null) {
            if (global.config.appSettings.database) {
                var factory = new data.DataFactory();
                if (global.config.appSettings.database.diskdb)
                    this.impl = data.DataFactory.createDal("diskdb");
                else
                    this.impl = data.DataFactory.createDal("mongodb");
            }
        }
        if (this.impl !== null) {
            this.impl.connect(callback);
        }
        else {
            callback({ "error": "no database option" }, null);
        }
    }
    getAll(queryStr, params, callback) {
        this.impl.getAll(queryStr, params, callback);
    }
    getCollection(name, callback) {
        this.impl.getCollection(name, callback);
    }
    getSchema(name, callback) {
        this.impl.getSchema(name, callback);
    }
    saveSchema(name, schema, callback) {
        this.impl.saveSchema(name, schema, callback);
    }
    deleteCollection(name, id, callback) {
        this.impl.deleteCollection(name, id, callback);
    }
    getSingle(name, id, callback) {
        this.impl.getSingle(name, id, callback);
    }
    pushObject(id, collectionName, propertyName, pushObject, callback) {
        this.impl.pushObject(id, collectionName, propertyName, pushObject, callback);
    }
    pullObject(id, collectionName, propertyName, pullObject, callback) {
        this.impl.pullObject(id, collectionName, propertyName, pullObject, callback);
    }
    getSet(idArr, collection, callback) {
        this.impl.getSet(idArr, collection, callback);
    }
    addToSet(id, collectionName, propertyName, pushObject, callback) {
        this.impl.addToSet(id, collectionName, propertyName, pushObject, callback);
    }
    get(entity, searchCommand, specialCommand, aggregateCommand, callback) {
        this.impl.get(entity, searchCommand, specialCommand, aggregateCommand, callback);
    }
}
var exportedClass = new DalClass();
module.exports = exportedClass;
