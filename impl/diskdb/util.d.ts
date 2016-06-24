/// <reference path="../../typings/main.d.ts" />
export declare class util {
    static isValidPath(path: string): any;
    static writeToFile(outputFilename: string, content: any): void;
    static readFromFile(file: string): string;
    static readFromDirectory(path: string): any;
    static removeFile(file: string): any;
    static updateFiltered(collection: string, query: any, data: any, multi: boolean): string;
    static removeFiltered(collection: Array<any>, query: any, multi: boolean): any[];
    static finder: (collection: any[], query: any, multi: boolean) => any[];
}
