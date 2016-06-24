"use strict";
const diskdb = require("./diskdb");
const mongodb = require("./mongodb");
class DataFactory {
    static createDal(type) {
        if (type === "diskdb") {
            return new diskdb.dal();
        }
        else if (type === "mongodb") {
            return new mongodb.dal();
        }
        return null;
    }
}
exports.DataFactory = DataFactory;
