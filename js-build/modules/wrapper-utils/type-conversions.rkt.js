import * as $rjs_core from '../../runtime/core.js';
import * as M0 from "../../runtime/kernel.rkt.js";
import * as M1 from "../../links/racketscript-compiler/racketscript/interop.rkt.js";
import * as M2 from "../../links/racketscript-compiler/racketscript/private/interop.rkt.js";
var js_list__gt_list = function(js_list1417) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return js_list1417.reduce($rjs_core.attachProcedureArity(function(accumulator1418, current_value1419, ..._1420533) {
        if (arguments.length < 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var _1420 = $rjs_core.Pair.listFromArray(_1420533);
        return M0.append(accumulator1418, M0.list(current_value1419));
    }), $rjs_core.Pair.EMPTY);
};
var js_arguments__gt_list = function(arguments1421) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return js_list__gt_list(Array.from(arguments1421));
};
var js_string__gt_symbol = function(str1422) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.string__gt_symbol(M1.js_string__gt_string(str1422));
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    js_arguments__gt_list,
    js_string__gt_symbol,
    js_list__gt_list
};