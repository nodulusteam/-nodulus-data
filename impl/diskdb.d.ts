/// <reference path="../typings/main.d.ts" />
export declare class dal implements nodulus.IDal {
    db: any;
    mongoOperator(key: string): any;
    parse(str: string, params: any): any;
    getAll(callback: Function): void;
    getCollection(name: string, callback: Function): void;
    getSingle(name: string, id: string, callback: Function): void;
    connect(callback: Function): void;
    saveSchema(name: string, schema: any, callback: Function): void;
    getSchema(name: string, callback: Function): void;
    deleteCollection(collection: string, id: string, callback: Function): void;
    addToSet(id: string, collection: string, propertyName: string, pushObject: any, callback: Function): void;
    pushObject(id: string, collection: string, propertyName: string, pushObject: any, callback: Function): void;
    pullObject(id: string, collection: string, propertyName: string, pullObject: any, callback: Function): void;
    getSet(idArr: any, collection: any, callback: Function): void;
    query(queryStr: string, params: any, callback: Function): void;
    sendToArchive(data: any, res: any): void;
    get(entity: string, searchCommand: nodulus.SearchCommand, specialCommand: nodulus.SpecialCommand, aggregateCommand: nodulus.AggregateCommand, callback: Function): void;
}
