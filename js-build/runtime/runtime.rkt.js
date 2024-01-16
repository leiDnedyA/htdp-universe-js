import * as $rjs_core from './core.js';
import * as M1 from "./lib.rkt.js";
var values = function() {
    var vals77 = M1.Core.argumentsToArray(arguments);
    if ((vals77.length === 1) !== false) {
        var if_res13 = vals77[0];
    } else {
        var if_res13 = M1.Values.make(vals77);
    }
    return if_res13;
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    values
};