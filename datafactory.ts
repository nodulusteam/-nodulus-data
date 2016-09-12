﻿/*                 _       _
                 | |     | |
  _ __   ___   __| |_   _| |_   _ ___
 | '_ \ / _ \ / _` | | | | | | | / __|
 | | | | (_) | (_| | |_| | | |_| \__ \
 |_| |_|\___/ \__,_|\__,_|_|\__,_|___/
 @nodulus open source | ©Roi ben haim  ®2016 
 */
/// <reference path="./typings/main.d.ts" />





export class DataFactory {
    public static createDal(type: string): nodulus.IDal {

        try {
            var impl = require("@nodulus/data-" + type);
            return new impl.dal();
        } catch (err) {
            console.log(err);

        }

    }
}
