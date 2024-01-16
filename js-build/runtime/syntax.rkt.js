import * as $rjs_core from './core.js';
import * as M0 from "../links/racketscript-compiler/racketscript/private/interop.rkt.js";
import * as M1 from "./lib.rkt.js";
var __syntax_p = function(v2177) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Correlated.syntaxP(v2177);
};
var __datum__gt_syntax = function(v2178) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Correlated.datumToSyntax(v2178);
};
var __syntax_e = function(v2179) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v2179.get();
};
var __syntax__gt_datum = function(v2180) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v2180.get();
};
var __syntax_source = function(v2181) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var __syntax_line = function(v2182) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var __syntax_column = function(v2183) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var __syntax_position = function(v2184) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var __syntax_span = function(v2185) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var __syntax_property2186 = function(s22187, k32188, val12189) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var s2190 = s22187;
    var k2191 = k32188;
    if (false !== false) {
        var if_res949 = false;
    } else {
        var if_res949 = val12189;
    }
    var val2192 = if_res949;
    if (val2192 !== false) {
        var if_res950 = s2190;
    } else {
        var if_res950 = false;
    }
    return if_res950;
};
var cl951 = function(s2193, k2194) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return __syntax_property2186(s2193, k2194, false);
};
var cl952 = function(s2195, k2196, val12197) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return __syntax_property2186(s2195, k2196, val12197);
};
var __syntax_property = $rjs_core.attachProcedureArity(function() {
    var fixed_lam953 = {
        '2': cl951,
        '3': cl952
    } [arguments.length];
    if (fixed_lam953 !== undefined) {
        return fixed_lam953.apply(null, arguments);
    } else {
        return ___kernel.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var __syntax_property_symbol_keys = function(v2198) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Pair.EMPTY;
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    __syntax_property_symbol_keys as syntax_property_symbol_keys,
    __syntax_property as syntax_property,
    __syntax_span as syntax_span,
    __syntax_position as syntax_position,
    __syntax_column as syntax_column,
    __syntax_line as syntax_line,
    __syntax_source as syntax_source,
    __syntax_e as syntax_e,
    __syntax__gt_datum as syntax__gt_datum,
    __datum__gt_syntax as datum__gt_syntax,
    __syntax_p as syntax_p
};