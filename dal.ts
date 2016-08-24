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


import * as data from "./datafactory";

class DalClass {
    public impl: any = null;

    constructor() {
        this.initImpl();
    }

    public initImpl() {

        if (config.appSettings.database) {
            var dbkey = Object.keys(config.appSettings.database)[0];
            this.impl = data.DataFactory.createDal(dbkey);
        }
    }

    public query(queryStr: string, params: any, callback: Function) {
        if (this.impl === null) this.initImpl();
        this.impl.query(queryStr, params, callback);
    }

    public connect(callback: Function) {
        if (this.impl === null) this.initImpl();
        if (this.impl !== null) {
            this.impl.connect(callback);
        } else {
            callback({ "error": "no database option" }, null);

        }
    }

    public getAll(queryStr: string, params: any, callback: Function) {
        if (this.impl === null) this.initImpl();
        this.impl.getAll(queryStr, params, callback);
    }

    public getCollection(name: string, callback: Function) {
        if (this.impl === null) this.initImpl();
        this.impl.getCollection(name, callback);
    }

    public getSchema(name: string, callback: Function) {
        if (this.impl === null) this.initImpl();
        this.impl.getSchema(name, callback);
    }

    public saveSchema(name: string, schema: any, callback: Function) {
        if (this.impl === null) this.initImpl();
        this.impl.saveSchema(name, schema, callback);
    }

    public deleteCollection(name: string, id: string, callback: Function) {
        if (this.impl === null) this.initImpl();
        this.impl.deleteCollection(name, id, callback);
    }

    public getSingle(name: string, id: string, callback: Function) {
        if (this.impl === null) this.initImpl();
        this.impl.getSingle(name, id, callback);
    }

    public pushObject(id: string, collectionName: string, propertyName: string, pushObject: any, callback: Function) {
        if (this.impl === null) this.initImpl();
        this.impl.pushObject(id, collectionName, propertyName, pushObject, callback);
    }

    public pullObject(id: string, collectionName: string, propertyName: string, pullObject: any, callback: Function) {
        if (this.impl === null) this.initImpl();
        this.impl.pullObject(id, collectionName, propertyName, pullObject, callback);
    }

    public getSet(idArr: Array<string>, collection: string, callback: Function) {
        if (this.impl === null) this.initImpl();
        this.impl.getSet(idArr, collection, callback);
    }

    public addToSet(id: string, collectionName: string, propertyName: string, pushObject: any, callback: Function) {
        if (this.impl === null) this.initImpl();
        this.impl.addToSet(id, collectionName, propertyName, pushObject, callback);
    }

    public get(entity: string, searchCommand: nodulus.SearchCommand, specialCommand: nodulus.SpecialCommand, aggregateCommand: nodulus.AggregateCommand, callback: Function) {
        if (this.impl === null) this.initImpl();
        this.impl.get(entity, searchCommand, specialCommand, aggregateCommand, callback);
    }

}











var exportedClass: any = new DalClass();
export = exportedClass;



