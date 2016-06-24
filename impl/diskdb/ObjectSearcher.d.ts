export declare class ObjectSearcher {
    constructor();
    results: Array<any>;
    objects: Array<any>;
    resultIDS: any;
    findAllInObject(object: any, valueOBj: any, isMulti: boolean): any[];
    meetCrit(crit: any, value: any): boolean;
    searchObject(object: any, valueOBj: any, opt_parentObj: any): void;
}
