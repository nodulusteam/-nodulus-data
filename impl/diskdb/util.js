"use strict";
var fs = require('fs');
var merge = require('merge');
class util {
    static isValidPath(path) {
        return fs.existsSync(path);
    }
    ;
    static writeToFile(outputFilename, content) {
        if (!content) {
            content = [];
        }
        fs.writeFileSync(outputFilename, JSON.stringify(content, null, 0));
    }
    ;
    static readFromFile(file) {
        return fs.readFileSync(file, 'utf-8');
    }
    ;
    static readFromDirectory(path) {
        return fs.readdirSync(path);
    }
    ;
    static removeFile(file) {
        return fs.unlinkSync(file);
    }
    ;
    static updateFiltered(collection, query, data, multi) {
        loop: for (var i = collection.length - 1; i >= 0; i--) {
            var c = collection[i];
            for (var p in query) {
                if (p in c && c[p] == query[p]) {
                    collection[i] = merge(c, data);
                    if (!multi) {
                        break loop;
                    }
                }
            }
        }
        return collection;
    }
    ;
    static removeFiltered(collection, query, multi) {
        loop: for (var i = collection.length - 1; i >= 0; i--) {
            var c = collection[i];
            for (var p in query) {
                if (p in c && c[p] == query[p]) {
                    collection.splice(i, 1);
                    if (!multi) {
                        break loop;
                    }
                }
            }
        }
        return collection;
    }
    ;
}
util.finder = function (collection, query, multi) {
    var retCollection = [];
    loop: for (var i = collection.length - 1; i >= 0; i--) {
        var c = collection[i];
        for (var p in query) {
            if (p in c && c[p] == query[p]) {
                retCollection.push(collection[i]);
                if (!multi) {
                    break loop;
                }
            }
        }
    }
    return retCollection;
};
exports.util = util;
