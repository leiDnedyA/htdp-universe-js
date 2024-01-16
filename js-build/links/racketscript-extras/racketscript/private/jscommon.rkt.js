import * as $rjs_core from '../../../../runtime/core.js';
import * as M0 from "../../../../runtime/kernel.rkt.js";
import * as M1 from "../../../racketscript-compiler/racketscript/private/interop.rkt.js";
var document = window.document;
var console = window.console;
var Math = window.Math;
var Path2D = window.Path2D;
var abs_plus_ceil = function(n2199) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.abs(M0.ceiling(n2199));
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    abs_plus_ceil,
    Path2D,
    Math,
    console,
    document
};