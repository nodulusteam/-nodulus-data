"use strict";
var path = require('path'), c = require('chalk'), e = c.red, s = c.green;
const collection_1 = require("./collection");
const util_1 = require("./util");
class db {
    constructor() {
        this._db = {};
        this.collections = {};
    }
    connect(path, collections) {
        if (util_1.util.isValidPath(path)) {
            this._db.path = path;
            console.log(s('Successfully connected to : ' + path));
            if (collections) {
                this.loadCollections(collections);
            }
        }
        else {
            console.log(e('The DB Path [' + path + '] does not seem to be valid. Recheck the path and try again'));
            return false;
        }
        return this;
    }
    listCollections() {
        var list = util_1.util.readFromDirectory(this._db.path);
        for (var i = 0; i < list.length; i++) {
            list[i] = { name: list[i].split('.json')[0] };
        }
        var col = new collection_1.collection(this, "collections");
        col.results = list;
        return col;
    }
    ;
    loadCollections(collections) {
        if (!this._db) {
            console.log(e('Initialize the DB before you add collections. Use : ', 'db.connect(\'path-to-db\');'));
            return false;
        }
        if (typeof collections === 'object' && collections.length) {
            for (var i = 0; i < collections.length; i++) {
                var p = path.join(this._db.path, (collections[i].indexOf('.json') >= 0 ? collections[i] : collections[i] + '.json'));
                if (!util_1.util.isValidPath(p)) {
                    util_1.util.writeToFile(p, []);
                }
                var _c = collections[i].replace('.json', '');
                this.collections[_c] = new collection_1.collection(this, _c);
            }
        }
        else {
            console.log(e('Invalid Collections Array.', 'Expected Format : ', '[\'collection1\',\'collection2\',\'collection3\']'));
        }
        return this;
    }
}
exports.db = db;
