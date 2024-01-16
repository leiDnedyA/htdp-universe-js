import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "./kw.rkt.js";
import * as M1 from "../../../runtime/kernel.rkt.js";
var new_apply_proc = M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws3360, kw_args3361, proc3362, args3363, ...rest33641891) {
    if (arguments.length < 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var rest3364 = $rjs_core.Pair.listFromArray(rest33641891);
    return M0.keyword_apply(proc3362, kws3360, kw_args3361, M1.apply(M1.list_times_, args3363, rest3364));
}), M1.apply);
var new_keyword_apply = M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws3365, kw_args3366, proc3367, orig_kws3368, orig_kw_args3369, args3370, ...rest33711892) {
    if (arguments.length < 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var rest3371 = $rjs_core.Pair.listFromArray(rest33711892);
    var loop3374 = function(kws3375, kw_args3376, kws23377, kw_args23378, swapped_p3379) {
        if (arguments.length !== 5) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(kws3375) !== false) {
            var if_res1897 = M1.values(kws23377, kw_args23378);
        } else {
            if (M1.null_p(kws23377) !== false) {
                var if_res1896 = M1.values(kws3375, kw_args3376);
            } else {
                if (M1.keyword_lt__p(M1.car(kws3375), M1.car(kws23377)) !== false) {
                    var let_result1893 = loop3374(M1.cdr(kws3375), M1.cdr(kw_args3376), kws23377, kw_args23378, false);
                    var res_kws3380 = let_result1893.getAt(0);
                    var res_kw_args3381 = let_result1893.getAt(1);
                    var if_res1895 = M1.values(M1.cons(M1.car(kws3375), res_kws3380), M1.cons(M1.car(kw_args3376), res_kw_args3381));
                } else {
                    if (swapped_p3379 !== false) {
                        var if_res1894 = M1.raise_mismatch_error($rjs_core.PrimitiveSymbol.make("keyword-apply"), $rjs_core.UString.make("keyword duplicated in list and direct keyword arguments: "), M1.car(kws3375));
                    } else {
                        var if_res1894 = loop3374(kws23377, kw_args23378, kws3375, kw_args3376, true);
                    }
                    var if_res1895 = if_res1894;
                }
                var if_res1896 = if_res1895;
            }
            var if_res1897 = if_res1896;
        }
        return if_res1897;
    };
    var let_result1898 = loop3374(kws3365, kw_args3366, orig_kws3368, orig_kw_args3369, false);
    var kws3372 = let_result1898.getAt(0);
    var kw_args3373 = let_result1898.getAt(1);
    return M0.keyword_apply(proc3367, kws3372, kw_args3373, M1.apply(M1.list_times_, args3370, rest3371));
}), M0.keyword_apply);
var double_flonum_p = function(x3382) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.__rjs_quoted__.flonum_p(x3382);
};
var cl1899 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.random();
};
var cl1900 = function(x3384) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.random(x3384);
};
var cl1901 = function(x3385, y3386) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.exact_integer_p(y3386) !== false) {
        if (M1.exact_integer_p(x3385) !== false) {
            var if_res1904 = M1.rvoid();
        } else {
            var if_res1904 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("exact-integer?"), 0, x3385, y3386);
        }
        if_res1904;
        if (M1.__lt_(x3385, y3386) !== false) {
            var if_res1905 = M1.rvoid();
        } else {
            var if_res1905 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), M1.string_append($rjs_core.UString.make("(>/c "), M1.number__gt_string(x3385), $rjs_core.UString.make(")")), 1, x3385, y3386);
        }
        if_res1905;
        var d3387 = y3386 - x3385;
        if (M1.__lt__eq_(d3387, 4294967087) !== false) {
            var if_res1906 = M1.rvoid();
        } else {
            var if_res1906 = M1.raise_arguments_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("difference between arguments is greater than 4294967087"), $rjs_core.UString.make("min"), x3385, $rjs_core.UString.make("max"), y3386);
        }
        if_res1906;
        var if_res1911 = x3385 + M1.random(d3387);
    } else {
        if (M1.__rjs_quoted__.pseudo_random_generator_p(y3386) !== false) {
            if (M1.exact_integer_p(x3385) !== false) {
                var if_res1907 = M1.__lt__eq_(1, x3385, 4294967087);
            } else {
                var if_res1907 = false;
            }
            if (if_res1907 !== false) {
                var if_res1908 = M1.rvoid();
            } else {
                var if_res1908 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("(integer-in 1 4294967087)"), 0, x3385, y3386);
            }
            if_res1908;
            var if_res1910 = M1.random(x3385, y3386);
        } else {
            if (M1.exact_integer_p(x3385) !== false) {
                var if_res1909 = M1.rvoid();
            } else {
                var if_res1909 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("exact-integer?"), 0, x3385, y3386);
            }
            if_res1909;
            var if_res1910 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("(or/c exact-integer? pseudo-random-generator?)"), 1, x3385, y3386);
        }
        var if_res1911 = if_res1910;
    }
    return if_res1911;
};
var cl1902 = function(min3388, max3389, prng3390) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.exact_integer_p(min3388) !== false) {
        var if_res1912 = M1.rvoid();
    } else {
        var if_res1912 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("exact-integer?"), 0, min3388, max3389, prng3390);
    }
    if_res1912;
    if (M1.exact_integer_p(max3389) !== false) {
        var if_res1913 = M1.rvoid();
    } else {
        var if_res1913 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("exact-integer?"), 1, min3388, max3389, prng3390);
    }
    if_res1913;
    if (M1.__lt_(min3388, max3389) !== false) {
        var if_res1914 = M1.rvoid();
    } else {
        var if_res1914 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), M1.string_append($rjs_core.UString.make("(>/c "), M1.number__gt_string(min3388), $rjs_core.UString.make(")")), 1, min3388, max3389, prng3390);
    }
    if_res1914;
    var d3391 = max3389 - min3388;
    if (M1.__lt__eq_(d3391, 4294967087) !== false) {
        var if_res1915 = M1.rvoid();
    } else {
        var if_res1915 = M1.raise_arguments_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("difference between first and second arguments is greater than 4294967087"), $rjs_core.UString.make("min"), min3388, $rjs_core.UString.make("max"), max3389, $rjs_core.UString.make("rand-gen"), prng3390);
    }
    if_res1915;
    if (M1.__rjs_quoted__.pseudo_random_generator_p(prng3390) !== false) {
        var if_res1916 = M1.rvoid();
    } else {
        var if_res1916 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("pseudo-random-generator?"), 2, min3388, max3389, prng3390);
    }
    if_res1916;
    return min3388 + M1.random(d3391, prng3390);
};
var random3383 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1903 = {
        '0': cl1899,
        '1': cl1900,
        '2': cl1901,
        '3': cl1902
    } [arguments.length];
    if (fixed_lam1903 !== undefined) {
        return fixed_lam1903.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1, 2, 3]);
var __random = random3383;
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    __random as random,
    double_flonum_p,
    new_keyword_apply as keyword_apply,
    new_apply_proc
};