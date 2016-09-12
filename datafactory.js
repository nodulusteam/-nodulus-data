/*                 _       _
                 | |     | |
  _ __   ___   __| |_   _| |_   _ ___
 | '_ \ / _ \ / _` | | | | | | | / __|
 | | | | (_) | (_| | |_| | | |_| \__ \
 |_| |_|\___/ \__,_|\__,_|_|\__,_|___/
 @nodulus open source | ©Roi ben haim  ®2016
 */
/// <reference path="./typings/main.d.ts" />
"use strict";
var DataFactory = (function () {
    function DataFactory() {
    }
    DataFactory.createDal = function (type) {
        try {
            var impl = require("@nodulus/data-" + type);
            return new impl.dal();
        }
        catch (err) {
            console.log(err);
        }
    };
    return DataFactory;
}());
exports.DataFactory = DataFactory;
