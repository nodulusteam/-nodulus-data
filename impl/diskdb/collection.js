"use strict";
const ObjectSearcher_1 = require("./ObjectSearcher");
const util_1 = require("./util");
var path = require('path'), uuid = require('node-uuid');
class collection {
    constructor(db, collectionName) {
        this.count = function (callback) {
            var c = (JSON.parse(util_1.util.readFromFile(this.dbpath))).length;
            if (!callback)
                return c;
            else
                callback(null, c);
        };
        this.collectionName = collectionName;
        this.db = db;
        this.dbpath = path.join(db._db.path, (collectionName + '.json'));
    }
    toArray(callback) {
        if (!this.results)
            this.results = [];
        callback(null, this.results);
    }
    ;
    find(query, callback) {
        var collection = JSON.parse(util_1.util.readFromFile(this.dbpath));
        if (query["$query"])
            query = query["$query"];
        if (!query || Object.keys(query).length == 0) {
            this.results = collection;
        }
        else {
            this.query = query;
            var searcher = new ObjectSearcher_1.ObjectSearcher();
            this.results = searcher.findAllInObject(collection, query, true);
        }
        return this;
    }
    ;
    next(callback) {
    }
    ;
    each(callback) {
    }
    ;
    findOne(query) {
        var collection = JSON.parse(util_1.util.readFromFile(this.dbpath));
        if (!query) {
            return collection[0];
        }
        else {
            var searcher = new ObjectSearcher_1.ObjectSearcher();
            return searcher.findAllInObject(collection, query, false)[0];
        }
    }
    ;
    save(data, callback) {
        var collection = JSON.parse(util_1.util.readFromFile(this.dbpath));
        if (typeof data === 'object' && data.length) {
            if (data.length === 1) {
                if (data[0].length > 0) {
                    data = data[0];
                }
            }
            var retCollection = [];
            for (var i = data.length - 1; i >= 0; i--) {
                var d = data[i];
                d._id = uuid.v4().replace(/-/g, '');
                collection.push(d);
                retCollection.push(d);
            }
            util_1.util.writeToFile(this.dbpath, collection);
            callback(null, { result: { upserted: retCollection } });
        }
        {
            var index = this.exists(data, collection);
            if (index !== false) {
                collection[index] = data;
            }
            else {
                data._id = uuid.v4().replace(/-/g, '');
                collection.push(data);
            }
            util_1.util.writeToFile(this.dbpath, collection);
            callback(null, { result: { upserted: [data] } });
        }
    }
    ;
    exists(obj, collection) {
        for (var i = 0; i < collection.length; i++) {
            if (obj["_id"] === collection[i]["_id"])
                return i;
        }
        return false;
    }
    update(query, data, options) {
        var ret = {}, collection = JSON.parse(util_1.util.readFromFile(this.dbpath));
        var records = util_1.util.finder(collection, query, true);
        if (records.length) {
            if (options && options.multi) {
                collection = util_1.util.updateFiltered(collection, query, data, true);
                ret.updated = records.length;
                ret.inserted = 0;
            }
            else {
                collection = util_1.util.updateFiltered(collection, query, data, false);
                ret.updated = 1;
                ret.inserted = 0;
            }
        }
        else {
            if (options && options.upsert) {
                data._id = uuid.v4().replace(/-/g, '');
                collection.push(data);
                ret.updated = 0;
                ret.inserted = 1;
            }
            else {
                ret.updated = 0;
                ret.inserted = 0;
            }
        }
        util_1.util.writeToFile(this.dbpath, collection);
        return ret;
    }
    ;
    remove(query, multi) {
        if (query) {
            var collection = JSON.parse(util_1.util.readFromFile(this.dbpath));
            if (typeof multi === 'undefined') {
                multi = true;
            }
            collection = util_1.util.removeFiltered(collection, query, multi);
            util_1.util.writeToFile(this.dbpath, collection);
        }
        else {
            util_1.util.removeFile(this.dbpath);
            delete this.db[this.collectionName];
        }
        return true;
    }
    ;
    ensureIndex() { }
    skip(num) {
        return this;
    }
    limit(num) {
        return this;
    }
}
exports.collection = collection;
