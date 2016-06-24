/// <reference path="../../typings/main.d.ts" />
import { collection } from "./collection";
export declare class db {
    _db: any;
    collections: any;
    connect(path: string, collections: any): any;
    listCollections(): collection;
    loadCollections(collections: any): any;
}
