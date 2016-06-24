"use strict";
class ObjectSearcher {
    constructor() {
        this.results = [];
        this.objects = [];
        this.resultIDS = {};
    }
    findAllInObject(object, valueOBj, isMulti) {
        for (var objKey in object) {
            this.searchObject(object[objKey], valueOBj, object[objKey]);
            if (!isMulti && this.results.length == 1) {
                return this.results;
            }
        }
        while (this.objects.length !== 0) {
            var objRef = this.objects.pop();
            this.searchObject(objRef['_obj'], valueOBj, objRef['parent']);
            if (!isMulti && this.results.length == 1) {
                return this.results;
            }
        }
        return this.results;
    }
    meetCrit(crit, value) {
        for (var key in crit) {
            if (key.indexOf('$') == 0) {
                switch (key) {
                    case "$eq":
                        return crit[key] === value;
                }
                return crit === value;
            }
            else {
                return crit === value;
            }
        }
    }
    searchObject(object, valueOBj, opt_parentObj) {
        for (var objKey in object) {
            if (typeof object[objKey] != 'object') {
                if (this.meetCrit(valueOBj[objKey], object[objKey])) {
                    if (opt_parentObj !== undefined) {
                        if (this.resultIDS[opt_parentObj['_id']] === undefined) {
                            this.results.push(opt_parentObj);
                            this.resultIDS[opt_parentObj['_id']] = '';
                        }
                    }
                    else {
                        if (this.resultIDS[object['_id']] === undefined) {
                            this.results.push(object);
                            this.resultIDS[object['_id']] = '';
                        }
                    }
                }
            }
            else {
                var obj = object;
                if (opt_parentObj !== undefined) {
                    obj = opt_parentObj;
                }
                var objRef = {
                    parent: obj,
                    _obj: object[objKey]
                };
                this.objects.push(objRef);
            }
        }
    }
    ;
}
exports.ObjectSearcher = ObjectSearcher;
;
