import * as $rjs_core from './core.js';
import * as M1 from "./lib.rkt.js";
import * as M2 from "../links/racketscript-compiler/racketscript/compiler/directive.rkt.js";
import * as M3 from "./kernel.rkt.js";
var fl_times_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.mul, 0);
var fl_by_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.div, 1);
var fl_plus_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.add, 0);
var fl_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.sub, 1);
var fl_lt_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.lt, 1);
var fl_gt_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.gt, 1);
var fl_lt__eq_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.lte, 1);
var fl_gt__eq_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.gte, 1);
var fl_eq_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.equals, 1);
var flabs = Math.abs;
var flmin = Math.min;
var flmax = Math.max;
var flround = Math.round;
var flfloor = Math.floor;
var flceiling = Math.ceil;
var fltruncate = Math.trunc;
var flsin = Math.sin;
var flcos = Math.cos;
var fltan = Math.tan;
var flasin = Math.asin;
var flacos = Math.acos;
var flatan = Math.atan;
var fllog = Math.log;
var flexp = Math.exp;
var flsqrt = Math.sqrt;
var flexpt = Math.pow;
var fx_plus_ = function(a898, b899) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a898 + b899) | 0;
};
var fx_ = function(a900, b901) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a900 - b901) | 0;
};
var fx_times_ = function(a902, b903) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a902 * b903) | 0;
};
var fxquotient = function(a904, b905) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a904 / b905) | 0;
};
var fxremainder = function(a906, b907) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a906 % b907) | 0;
};
var fxmodulo = function(a908, b909) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var remainder910 = a908 % b909;
    if ((remainder910 >= 0) !== false) {
        var if_res417 = remainder910;
    } else {
        var if_res417 = remainder910 + b909;
    }
    return Math.floor(if_res417);
};
var fxabs = function(a911) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Math.abs(a911);
};
var fx_eq_ = function(a912, b913) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a912 === b913;
};
var fx_lt_ = function(a914, b915) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a914 < b915;
};
var fx_lt__eq_ = function(a916, b917) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a916 <= b917;
};
var fx_gt_ = function(a918, b919) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a918 > b919;
};
var fx_gt__eq_ = function(a920, b921) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a920 >= b921;
};
var fxmin = function(a922, b923) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a922 < b923) !== false) {
        var if_res418 = a922;
    } else {
        var if_res418 = b923;
    }
    return if_res418;
};
var fxmax = function(a924, b925) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a924 > b925) !== false) {
        var if_res419 = b925;
    } else {
        var if_res419 = a924;
    }
    return if_res419;
};
var fxrshift = function(a926, b927) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a926 >> b927) | 0;
};
var fxlshift = function(a928, b929) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a928 << b929) | 0;
};
var fxand = function(a930, b931) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a930 && b931) | 0;
};
var fxior = function(a932, b933) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a932 || b933) | 0;
};
var fxxor = function(a934, b935) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a934 ^ b935) | 0;
};
var fxnot = M1.Core.bitwiseNot;
var flvector = Array.from;
var flvector_p = Array.isArray;
var fxvector = Array.from;
var fxvector_p = Array.isArray;
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    fl_times_,
    fl_by_,
    fl_plus_,
    fl_,
    fl_lt_,
    fl_gt_,
    fl_lt__eq_,
    fl_gt__eq_,
    fl_eq_,
    flabs,
    flmin,
    flmax,
    flround,
    flfloor,
    flceiling,
    fltruncate,
    flsin,
    flcos,
    fltan,
    flasin,
    flacos,
    flatan,
    fllog,
    flexp,
    flsqrt,
    flexpt,
    fx_plus_,
    fx_,
    fx_times_,
    fxquotient,
    fxremainder,
    fxmodulo,
    fxabs,
    fx_eq_,
    fx_lt_,
    fx_lt__eq_,
    fx_gt_,
    fx_gt__eq_,
    fxmin,
    fxmax,
    fxrshift,
    fxlshift,
    fxand,
    fxior,
    fxxor,
    fxnot,
    flvector,
    flvector_p,
    fxvector,
    fxvector_p
};