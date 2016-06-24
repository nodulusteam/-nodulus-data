/// <reference path="../../typings/main.d.ts" />
export declare class collection implements nodulus.IDbCollection {
    constructor(db: any, collectionName: string);
    db: any;
    dbpath: string;
    results: any;
    query: any;
    collectionName: string;
    toArray(callback: Function): void;
    find(query: any, callback: Function): this;
    next(callback: Function): any;
    each(callback: Function): any;
    findOne(query: any): any;
    save(data: any, callback: Function): void;
    exists(obj: any, collection: any): any;
    update(query: any, data: any, options: any): any;
    remove(query: any, multi: boolean): boolean;
    count: (callback: Function) => any;
    ensureIndex(): void;
    skip(num: number): this;
    limit(num: number): this;
}
