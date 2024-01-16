import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "./private/interop.rkt.js";
import * as M1 from "../../../collects/racket/private/reverse.rkt.js";
import * as M2 from "../../../runtime/kernel.rkt.js";
var __eq__gt_$ = function(lam_expr1423) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return $rjs_core.Marks.wrapWithContext(lam_expr1423);
};
var js_string = function(e1424) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return e1424.toString();
};
var js_string__gt_string = function(e1425) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return $rjs_core.UString.makeImmutable(e1425);
};
var js_array__gt_list = function(e1426) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return $rjs_core.Pair.listFromArray(e1426);
};
var assoc__gt_object = function(pairs1427) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var result1428 = {};
    var loop1429 = function(pairs1430) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M2.null_p(pairs1430) !== false) {
            var if_res537 = result1428;
        } else {
            var p1431 = M2.car(pairs1430);
            var k1433 = M2.car(p1431);
            var or_part1434 = typeof(k1433) === "string";
            if (or_part1434 !== false) {
                var if_res534 = or_part1434;
            } else {
                var if_res534 = M2.string_p(k1433);
            }
            if (if_res534 !== false) {
                var if_res536 = k1433;
            } else {
                if (M2.symbol_p(k1433) !== false) {
                    var if_res535 = M2.symbol__gt_string(k1433);
                } else {
                    var if_res535 = M2.error($rjs_core.PrimitiveSymbol.make("assoc->object"), $rjs_core.UString.make("invalid key value"));
                }
                var if_res536 = if_res535;
            }
            var key1432 = if_res536;
            result1428[key1432] = M2.car(M2.cdr(p1431));
            var if_res537 = loop1429(M2.cdr(pairs1430));
        }
        return if_res537;
    };
    return loop1429(pairs1427);
};
var js_array_p = function(v1435) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Array.isArray(v1435);
};
var in_js_array = function(arr1436) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    check_array(arr1436);
    var arr1437 = arr1436;
    if (js_array_p(arr1437) !== false) {
        var if_res538 = M2.rvoid();
    } else {
        var if_res538 = in_js_array(arr1437);
    }
    if_res538;
    var for_loop1438 = function(fold_var1439, i1440) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M2.__lt_(i1440, arr1437.length) !== false) {
            var v1441 = arr1437[i1440];
            if (true !== false) {
                var fold_var1443 = fold_var1439;
                var fold_var1444 = M2.cons(v1441, fold_var1443);
                var fold_var1442 = M2.values(fold_var1444);
                if (true !== false) {
                    var if_res539 = M2.not(false);
                } else {
                    var if_res539 = false;
                }
                if (if_res539 !== false) {
                    var if_res540 = for_loop1438(fold_var1442, i1440 + 1);
                } else {
                    var if_res540 = fold_var1442;
                }
                var if_res541 = if_res540;
            } else {
                var if_res541 = fold_var1439;
            }
            var if_res542 = if_res541;
        } else {
            var if_res542 = fold_var1439;
        }
        return if_res542;
    };
    return M1.alt_reverse(for_loop1438(M2.rnull, 0));
};
var check_array = function(v1445) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (js_array_p(v1445) !== false) {
        var if_res543 = M2.rvoid();
    } else {
        var if_res543 = M2.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-js-array"), $rjs_core.UString.make("js-array?"), v1445);
    }
    return if_res543;
};
var in_js_obect = function(obj1446) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    check_object(obj1446);
    var obj1447 = obj1446;
    var keys1448 = Object.keys(obj1446);
    if (js_object_p(obj1447) !== false) {
        var if_res544 = M2.rvoid();
    } else {
        var if_res544 = in_js_array(obj1447);
    }
    if_res544;
    var for_loop1449 = function(fold_var1450, i1451) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M2.__lt_(i1451, keys1448.length) !== false) {
            var k1452 = keys1448[i1451];
            var v1453 = obj1447[keys1448[i1451]];
            if (true !== false) {
                var fold_var1455 = fold_var1450;
                var fold_var1456 = M2.cons(M2.values(k1452, v1453), fold_var1455);
                var fold_var1454 = M2.values(fold_var1456);
                if (true !== false) {
                    var if_res545 = M2.not(false);
                } else {
                    var if_res545 = false;
                }
                if (if_res545 !== false) {
                    var if_res546 = for_loop1449(fold_var1454, i1451 + 1);
                } else {
                    var if_res546 = fold_var1454;
                }
                var if_res547 = if_res546;
            } else {
                var if_res547 = fold_var1450;
            }
            var if_res548 = if_res547;
        } else {
            var if_res548 = fold_var1450;
        }
        return if_res548;
    };
    return M1.alt_reverse(for_loop1449(M2.rnull, 0));
};
var js_object_p = function(v1457) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return ((typeof(v1457) === "object") && (v1457 !== null)) && M2.not($rjs_core.Primitive.check(v1457));
};
var check_object = function(v1458) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (js_object_p(v1458) !== false) {
        var if_res549 = M2.rvoid();
    } else {
        var if_res549 = M2.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-js-object"), $rjs_core.UString.make("js-object?"), v1458);
    }
    return if_res549;
};
var __rjs_quoted__ = {};
__rjs_quoted__.js_object_p = js_object_p;
__rjs_quoted__.js_array_p = js_array_p;
__rjs_quoted__.in_js_array = in_js_array;
__rjs_quoted__.js_string = js_string;
export {
    __rjs_quoted__,
    js_object_p,
    js_array_p,
    assoc__gt_object,
    js_array__gt_list,
    js_string__gt_string,
    js_string,
    __eq__gt_$
};