import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
import * as M1 from "../../../runtime/unsafe.rkt.js";
var let_result1325 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("keyword-impersonator"));
var prop_keyword_impersonator = let_result1325.getAt(0);
var keyword_impersonator_p = let_result1325.getAt(1);
var keyword_impersonator_ref = let_result1325.getAt(2);
var keyword_procedure_impersonator_of = function(v2668) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_impersonator_p(v2668) !== false) {
        var if_res1326 = keyword_impersonator_ref(v2668)(v2668);
    } else {
        var if_res1326 = false;
    }
    return if_res1326;
};
var let_result1327 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("keyword-procedure"), false, 4, 0, false, M0.list(M0.cons(M0.prop_checked_procedure, true), M0.cons(M0.prop_impersonator_of, keyword_procedure_impersonator_of)), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2, 3));
var struct_keyword_procedure = let_result1327.getAt(0);
var mk_kw_proc = let_result1327.getAt(1);
var keyword_procedure_p = let_result1327.getAt(2);
var keyword_procedure_ref = let_result1327.getAt(3);
var keyword_procedure_set_bang_ = let_result1327.getAt(4);
var keyword_procedure_checker = M0.make_struct_field_accessor(keyword_procedure_ref, 0);
var keyword_procedure_proc = M0.make_struct_field_accessor(keyword_procedure_ref, 1);
var keyword_procedure_required = M0.make_struct_field_accessor(keyword_procedure_ref, 2);
var keyword_procedure_allowed = M0.make_struct_field_accessor(keyword_procedure_ref, 3);
var let_result1328 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure, 0, 0, false, M0.list(M0.cons(M0.prop_method_arity_error, true)));
var struct_keyword_method = let_result1328.getAt(0);
var make_km = let_result1328.getAt(1);
var keyword_method_p = let_result1328.getAt(2);
var km_ref = let_result1328.getAt(3);
var km_set_bang_ = let_result1328.getAt(4);
var generate_arity_string = function(proc2669) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var let_result1329 = procedure_keywords(proc2669);
    var req2670 = let_result1329.getAt(0);
    var allowed2671 = let_result1329.getAt(1);
    var a2672 = M0.procedure_arity(proc2669);
    var keywords_desc2673 = function(opt2675, req2676) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var temp1335 = $rjs_core.UString.make("~a with keyword~a~a");
        if (M0.null_p(M0.cdr(req2676)) !== false) {
            var if_res1334 = M0.format($rjs_core.UString.make("an ~aargument"), opt2675);
        } else {
            var if_res1334 = M0.format($rjs_core.UString.make("~aarguments"), opt2675);
        }
        if (M0.null_p(M0.cdr(req2676)) !== false) {
            var if_res1333 = $rjs_core.UString.make("");
        } else {
            var if_res1333 = $rjs_core.UString.make("s");
        }
        var tmp2677 = M0.length(req2676);
        if (M0.equal_p(tmp2677, 1) !== false) {
            var if_res1332 = M0.format($rjs_core.UString.make(" ~a"), M0.car(req2676));
        } else {
            if (M0.equal_p(tmp2677, 2) !== false) {
                var if_res1331 = M0.format($rjs_core.UString.make(" ~a and ~a"), M0.car(req2676), M0.cadr(req2676));
            } else {
                var loop2678 = function(req2679) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M0.null_p(M0.cdr(req2679)) !== false) {
                        var if_res1330 = M0.format($rjs_core.UString.make(" and ~a"), M0.car(req2679));
                    } else {
                        var if_res1330 = M0.format($rjs_core.UString.make(" ~a,~a"), M0.car(req2679), loop2678(M0.cdr(req2679)));
                    }
                    return if_res1330;
                };
                var if_res1331 = loop2678(req2676);
            }
            var if_res1332 = if_res1331;
        }
        return M0.format(temp1335, if_res1334, if_res1333, if_res1332);
    };
    var method_adjust2674 = function(a2680) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var or_part2681 = okm_p(proc2669);
        if (or_part2681 !== false) {
            var if_res1336 = or_part2681;
        } else {
            var if_res1336 = keyword_method_p(proc2669);
        }
        if (if_res1336 !== false) {
            if (M0.zero_p(a2680) !== false) {
                var if_res1337 = 0;
            } else {
                var if_res1337 = M0.sub1(a2680);
            }
            var if_res1338 = if_res1337;
        } else {
            var if_res1338 = a2680;
        }
        return if_res1338;
    };
    if (M0.number_p(a2672) !== false) {
        var a2682 = method_adjust2674(a2672);
        var if_res1345 = M0.format($rjs_core.UString.make("~a"), a2682);
    } else {
        if (M0.arity_at_least_p(a2672) !== false) {
            var a2683 = method_adjust2674(M0.arity_at_least_value(a2672));
            var if_res1344 = M0.format($rjs_core.UString.make("at least ~a"), a2683);
        } else {
            var if_res1344 = $rjs_core.UString.make("a different number");
        }
        var if_res1345 = if_res1344;
    }
    if (M0.null_p(req2670) !== false) {
        var if_res1343 = $rjs_core.UString.make("");
    } else {
        var if_res1343 = M0.format($rjs_core.UString.make(" plus ~a"), keywords_desc2673($rjs_core.UString.make(""), req2670));
    }
    if (allowed2671 !== false) {
        var loop2685 = function(req2686, allowed2687) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M0.null_p(req2686) !== false) {
                var if_res1340 = allowed2687;
            } else {
                if (M0.eq_p(M0.car(req2686), M0.car(allowed2687)) !== false) {
                    var if_res1339 = loop2685(M0.cdr(req2686), M0.cdr(allowed2687));
                } else {
                    var if_res1339 = M0.cons(M0.car(allowed2687), loop2685(req2686, M0.cdr(allowed2687)));
                }
                var if_res1340 = if_res1339;
            }
            return if_res1340;
        };
        var others2684 = loop2685(req2670, allowed2671);
        if (M0.null_p(others2684) !== false) {
            var if_res1341 = $rjs_core.UString.make("");
        } else {
            var if_res1341 = M0.format($rjs_core.UString.make(" plus ~a"), keywords_desc2673($rjs_core.UString.make("optional "), others2684));
        }
        var if_res1342 = if_res1341;
    } else {
        var if_res1342 = $rjs_core.UString.make(" plus arbitrary keyword arguments");
    }
    return M0.string_append(if_res1345, if_res1343, if_res1342);
};
var let_result1346 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure, 1, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string)), M0.current_inspector(), 0);
var struct_okp = let_result1346.getAt(0);
var make_optional_keyword_procedure = let_result1346.getAt(1);
var okp_p = let_result1346.getAt(2);
var okp_ref = let_result1346.getAt(3);
var okp_set_bang_ = let_result1346.getAt(4);
var let_result1347 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_okp, 0, 0, false, M0.list(M0.cons(M0.prop_method_arity_error, true)));
var struct_okm = let_result1347.getAt(0);
var make_optional_keyword_method = let_result1347.getAt(1);
var okm_p = let_result1347.getAt(2);
var okm_ref = let_result1347.getAt(3);
var okm_set_bang_ = let_result1347.getAt(4);
var let_result1348 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("named-keyword-procedure"));
var prop_named_keyword_procedure = let_result1348.getAt(0);
var named_keyword_procedure_p = let_result1348.getAt(1);
var keyword_procedure_name_plus_fail = let_result1348.getAt(2);
var keyword_procedure_name_plus_fail_times_ = function(p2688) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var v2689 = keyword_procedure_name_plus_fail(p2688);
    if (M0.vector_p(v2689) !== false) {
        var if_res1349 = v2689;
    } else {
        var if_res1349 = v2689(p2688);
    }
    return if_res1349;
};
var let_result1351 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("procedure"), function(v2690, info_l2691) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.exact_integer_p(v2690) !== false) {
        var if_res1350 = M0.make_struct_field_accessor(M0.list_ref(info_l2691, 3), v2690);
    } else {
        var if_res1350 = false;
    }
    return if_res1350;
});
var prop_procedure_accessor = let_result1351.getAt(0);
var procedure_accessor_p = let_result1351.getAt(1);
var procedure_accessor_ref = let_result1351.getAt(2);
var let_result1352 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("procedure"), false, M0.list(M0.cons(M0.prop_procedure, M0.values), M0.cons(prop_procedure_accessor, M0.values)), true);
var new_prop_procedure = let_result1352.getAt(0);
var new_procedure_p = let_result1352.getAt(1);
var new_procedure_ref = let_result1352.getAt(2);
var let_result1353 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure, 1, 0, false, M0.list(M0.cons(prop_keyword_impersonator, function(v2692) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return kpp_ref(v2692, 0);
})));
var struct_keyword_procedure_impersonator = let_result1353.getAt(0);
var make_kpp = let_result1353.getAt(1);
var keyword_procedure_impersonator_p = let_result1353.getAt(2);
var kpp_ref = let_result1353.getAt(3);
var kpp_set_bang_ = let_result1353.getAt(4);
var let_result1354 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method, 1, 0, false, M0.list(M0.cons(prop_keyword_impersonator, function(v2693) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return kmp_ref(v2693, 0);
})));
var struct_keyword_method_impersonator = let_result1354.getAt(0);
var make_kmp = let_result1354.getAt(1);
var keyword_method_impersonator_p = let_result1354.getAt(2);
var kmp_ref = let_result1354.getAt(3);
var kmp_set_bang_ = let_result1354.getAt(4);
var let_result1355 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_okp, 1, 0, false, M0.list(M0.cons(prop_keyword_impersonator, function(v2694) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return okpp_ref(v2694, 0);
})));
var struct_okpp = let_result1355.getAt(0);
var make_optional_keyword_procedure_impersonator = let_result1355.getAt(1);
var okpp_p = let_result1355.getAt(2);
var okpp_ref = let_result1355.getAt(3);
var okpp_set_bang_ = let_result1355.getAt(4);
var let_result1356 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_okp, 1, 0, false, M0.list(M0.cons(prop_keyword_impersonator, function(v2695) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return okmp_ref(v2695, 0);
})));
var struct_okmp = let_result1356.getAt(0);
var make_optional_keyword_method_impersonator = let_result1356.getAt(1);
var okmp_p = let_result1356.getAt(2);
var okmp_ref = let_result1356.getAt(3);
var okmp_set_bang_ = let_result1356.getAt(4);
var let_result1357 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure, 0, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string), M0.cons(M0.prop_incomplete_arity, true)));
var struct_keyword_procedure_by_arity_error = let_result1357.getAt(0);
var make_kp_by_ae = let_result1357.getAt(1);
var kp_by_ae_p = let_result1357.getAt(2);
var kp_by_ae_ref = let_result1357.getAt(3);
var kp_by_ae_set_bang_ = let_result1357.getAt(4);
var let_result1358 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method, 0, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string), M0.cons(M0.prop_incomplete_arity, true)));
var struct_keyword_method_by_arity_error = let_result1358.getAt(0);
var make_km_by_ae = let_result1358.getAt(1);
var km_by_ae_p = let_result1358.getAt(2);
var km_by_ae_ref = let_result1358.getAt(3);
var km_by_ae_set_bang_ = let_result1358.getAt(4);
var let_result1359 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure_impersonator, 0, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string), M0.cons(M0.prop_incomplete_arity, true)));
var struct_keyword_procedure_impersonator_by_arity_error = let_result1359.getAt(0);
var make_kpi_by_ae = let_result1359.getAt(1);
var kpi_by_ae_p = let_result1359.getAt(2);
var kpi_by_ae_ref = let_result1359.getAt(3);
var kpi_by_ae_set_bang_ = let_result1359.getAt(4);
var let_result1360 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method_impersonator, 0, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string), M0.cons(M0.prop_incomplete_arity, true)));
var struct_keyword_method_impersonator_by_arity_error = let_result1360.getAt(0);
var make_kmi_by_ae = let_result1360.getAt(1);
var kmi_by_ae_p = let_result1360.getAt(2);
var kmi_by_ae_ref = let_result1360.getAt(3);
var kmi_by_ae_set_bang_ = let_result1360.getAt(4);
var let_result1361 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure_by_arity_error, 3, 0, false, M0.list(M0.cons(M0.prop_procedure, 0), M0.cons(M0.prop_object_name, 1), M0.cons(prop_named_keyword_procedure, function(r2696) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.vector(rkp_by_ae_ref(r2696, 1), rkp_by_ae_ref(r2696, 2), rkp_by_ae_ref(r2696, 0));
})), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2));
var struct_rkp_by_ae = let_result1361.getAt(0);
var make_required_keyword_procedure_by_arity_error = let_result1361.getAt(1);
var rkp_by_ae_p = let_result1361.getAt(2);
var rkp_by_ae_ref = let_result1361.getAt(3);
var rkp_by_ae_set_bang_ = let_result1361.getAt(4);
var let_result1362 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method_by_arity_error, 3, 0, false, M0.list(M0.cons(M0.prop_procedure, 0), M0.cons(M0.prop_object_name, 1), M0.cons(prop_named_keyword_procedure, function(r2697) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.vector(rkp_by_ae_ref2658(r2697, 1), rkp_by_ae_ref2658(r2697, 2), rkp_by_ae_ref2658(r2697, 0));
})), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2));
var struct_rkp_by_ae2656 = let_result1362.getAt(0);
var make_required_keyword_method_by_arity_error = let_result1362.getAt(1);
var rkp_by_ae_p2657 = let_result1362.getAt(2);
var rkp_by_ae_ref2658 = let_result1362.getAt(3);
var rkp_by_ae_set_bang_2659 = let_result1362.getAt(4);
var let_result1363 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure_impersonator_by_arity_error, 3, 0, false, M0.list(M0.cons(M0.prop_procedure, 0), M0.cons(M0.prop_object_name, 1), M0.cons(prop_named_keyword_procedure, function(r2698) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.vector(rkp_by_ae_ref2662(r2698, 1), rkp_by_ae_ref2662(r2698, 2), rkp_by_ae_ref2662(r2698, 0));
})), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2));
var struct_rkp_by_ae2660 = let_result1363.getAt(0);
var make_required_keyword_procedure_impersonator_by_arity_error = let_result1363.getAt(1);
var rkp_by_ae_p2661 = let_result1363.getAt(2);
var rkp_by_ae_ref2662 = let_result1363.getAt(3);
var rkp_by_ae_set_bang_2663 = let_result1363.getAt(4);
var let_result1364 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method_impersonator_by_arity_error, 3, 0, false, M0.list(M0.cons(M0.prop_procedure, 0), M0.cons(M0.prop_object_name, 1), M0.cons(prop_named_keyword_procedure, function(r2699) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.vector(rkp_by_ae_ref2666(r2699, 1), rkp_by_ae_ref2666(r2699, 2), rkp_by_ae_ref2666(r2699, 0));
})), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2));
var struct_rkp_by_ae2664 = let_result1364.getAt(0);
var make_required_keyword_method_impersonator_by_arity_error = let_result1364.getAt(1);
var rkp_by_ae_p2665 = let_result1364.getAt(2);
var rkp_by_ae_ref2666 = let_result1364.getAt(3);
var rkp_by_ae_set_bang_2667 = let_result1364.getAt(4);
var cl1365 = function(proc2700) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var proc_name2701 = M0.object_name(proc2700);
    if (M0.procedure_p(proc2700) !== false) {
        var if_res1368 = M0.__rjs_quoted__.procedure_realm(proc2700);
    } else {
        var if_res1368 = false;
    }
    var proc_realm2702 = if_res1368;
    var plain_proc2703 = $rjs_core.attachProcedureArity(function(...args27041369) {
        var args2704 = $rjs_core.Pair.listFromArray(args27041369);
        return M0.apply(proc2700, M0.rnull, M0.rnull, args2704);
    });
    if (M0.procedure_p(proc2700) !== false) {
        var if_res1370 = M0.arithmetic_shift(M0.procedure_arity_mask(proc2700), -2);
    } else {
        var if_res1370 = false;
    }
    var mask2705 = if_res1370;
    if (M0.procedure_p(plain_proc2703) !== false) {
        if (M0.exact_integer_p(mask2705) !== false) {
            if (M0.symbol_p(proc_name2701) !== false) {
                if (M0.symbol_p(proc_realm2702) !== false) {
                    var if_res1371 = M0.__rjs_quoted__.procedure_reduce_arity_mask(plain_proc2703, mask2705, proc_name2701, proc_realm2702);
                } else {
                    var if_res1371 = M0.__rjs_quoted__.procedure_reduce_arity_mask(plain_proc2703, mask2705, false, $rjs_core.PrimitiveSymbol.make("ignored"));
                }
                var if_res1372 = if_res1371;
            } else {
                var if_res1372 = M0.__rjs_quoted__.procedure_reduce_arity_mask(plain_proc2703, mask2705, false, $rjs_core.PrimitiveSymbol.make("ignored"));
            }
            var if_res1373 = if_res1372;
        } else {
            var if_res1373 = plain_proc2703;
        }
        var if_res1374 = if_res1373;
    } else {
        var if_res1374 = plain_proc2703;
    }
    return make_keyword_procedure(proc2700, if_res1374);
};
var cl1366 = function(proc2706, plain_proc2707) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.procedure_p(proc2706) !== false) {
        var if_res1375 = M0.procedure_arity_mask(proc2706);
    } else {
        var if_res1375 = false;
    }
    return make_optional_keyword_procedure(make_keyword_checker(M0.rnull, false, if_res1375), proc2706, M0.rnull, false, plain_proc2707);
};
var make_keyword_procedure = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1367 = {
        '1': cl1365,
        '2': cl1366
    } [arguments.length];
    if (fixed_lam1367 !== undefined) {
        return fixed_lam1367.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var keyword_apply = $rjs_core.attachProcedureArity(function(proc2708, kws2709, kw_vals2710, normal_args2711, ...normal_argss27121376) {
    if (arguments.length < 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var normal_argss2712 = $rjs_core.Pair.listFromArray(normal_argss27121376);
    var type_error2713 = function(what2714, which2715) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return M0.apply(M0.raise_argument_error, $rjs_core.PrimitiveSymbol.make("keyword-apply"), what2714, which2715, proc2708, kws2709, kw_vals2710, normal_args2711, normal_argss2712);
    };
    if (M0.procedure_p(proc2708) !== false) {
        var if_res1377 = M0.rvoid();
    } else {
        var if_res1377 = type_error2713($rjs_core.UString.make("procedure?"), 0);
    }
    if_res1377;
    var loop2716 = function(ks2717) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.null_p(ks2717) !== false) {
            var if_res1384 = M0.rvoid();
        } else {
            var or_part2718 = M0.not(M0.pair_p(ks2717));
            if (or_part2718 !== false) {
                var if_res1378 = or_part2718;
            } else {
                var if_res1378 = M0.not(M0.keyword_p(M0.car(ks2717)));
            }
            if (if_res1378 !== false) {
                var if_res1383 = type_error2713($rjs_core.UString.make("(listof keyword?)"), 1);
            } else {
                if (M0.null_p(M0.cdr(ks2717)) !== false) {
                    var if_res1382 = M0.rvoid();
                } else {
                    var or_part2719 = M0.not(M0.pair_p(M0.cdr(ks2717)));
                    if (or_part2719 !== false) {
                        var if_res1379 = or_part2719;
                    } else {
                        var if_res1379 = M0.not(M0.keyword_p(M0.cadr(ks2717)));
                    }
                    if (if_res1379 !== false) {
                        var if_res1381 = loop2716(M0.cdr(ks2717));
                    } else {
                        if (M0.keyword_lt__p(M0.car(ks2717), M0.cadr(ks2717)) !== false) {
                            var if_res1380 = loop2716(M0.cdr(ks2717));
                        } else {
                            var if_res1380 = type_error2713($rjs_core.UString.make("(and/c (listof? keyword?) sorted? distinct?)"), 1);
                        }
                        var if_res1381 = if_res1380;
                    }
                    var if_res1382 = if_res1381;
                }
                var if_res1383 = if_res1382;
            }
            var if_res1384 = if_res1383;
        }
        return if_res1384;
    };
    loop2716(kws2709);
    if (M0.list_p(kw_vals2710) !== false) {
        var if_res1385 = M0.rvoid();
    } else {
        var if_res1385 = type_error2713($rjs_core.UString.make("list?"), 2);
    }
    if_res1385;
    if (M0.__eq_(M0.length(kws2709), M0.length(kw_vals2710)) !== false) {
        var if_res1386 = M0.rvoid();
    } else {
        var if_res1386 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword-apply"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("keyword list length does not match value list length"), $rjs_core.UString.make("keyword list length"), M0.length(kws2709), $rjs_core.UString.make("value list length"), M0.length(kw_vals2710), $rjs_core.UString.make("keyword list"), kws2709, $rjs_core.UString.make("value list"), kw_vals2710);
    }
    if_res1386;
    var loop2721 = function(normal_argss2722, pos2723) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.null_p(M0.cdr(normal_argss2722)) !== false) {
            var l2724 = M0.car(normal_argss2722);
            if (M0.list_p(l2724) !== false) {
                var if_res1387 = l2724;
            } else {
                var if_res1387 = type_error2713($rjs_core.UString.make("list?"), pos2723);
            }
            var if_res1388 = if_res1387;
        } else {
            var if_res1388 = M0.cons(M0.car(normal_argss2722), loop2721(M0.cdr(normal_argss2722), M0.add1(pos2723)));
        }
        return if_res1388;
    };
    var normal_args2720 = loop2721(M0.cons(normal_args2711, normal_argss2712), 3);
    if (M0.null_p(kws2709) !== false) {
        var if_res1389 = M0.apply(proc2708, normal_args2720);
    } else {
        var if_res1389 = M0.apply(keyword_procedure_extract_by_method(kws2709, 2 + M0.length(normal_args2720), proc2708, 0), kws2709, kw_vals2710, normal_args2720);
    }
    return if_res1389;
});
var procedure_keywords = function(p2725) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_procedure_p(p2725) !== false) {
        var if_res1394 = M0.values(keyword_procedure_required(p2725), keyword_procedure_allowed(p2725));
    } else {
        if (M0.procedure_p(p2725) !== false) {
            if (new_procedure_p(p2725) !== false) {
                var v2726 = new_procedure_ref(p2725);
                if (M0.procedure_p(v2726) !== false) {
                    var if_res1391 = procedure_keywords(v2726);
                } else {
                    var a2727 = procedure_accessor_ref(p2725);
                    if (a2727 !== false) {
                        var if_res1390 = procedure_keywords(a2727(p2725));
                    } else {
                        var if_res1390 = M0.values(M0.rnull, M0.rnull);
                    }
                    var if_res1391 = if_res1390;
                }
                var if_res1392 = if_res1391;
            } else {
                var if_res1392 = M0.values(M0.rnull, M0.rnull);
            }
            var if_res1393 = if_res1392;
        } else {
            var if_res1393 = M0.__rjs_quoted__.raise_argument_error_times_($rjs_core.PrimitiveSymbol.make("procedure-keywords"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("procedure?"), p2725);
        }
        var if_res1394 = if_res1393;
    }
    return if_res1394;
};
var extract_keyword_root = function(p2728) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_procedure_p(p2728) !== false) {
        var if_res1398 = p2728;
    } else {
        if (M0.procedure_p(p2728) !== false) {
            var v2729 = new_procedure_ref(p2728, false);
            if (M0.procedure_p(v2729) !== false) {
                var if_res1396 = extract_keyword_root(v2729);
            } else {
                var a2730 = procedure_accessor_ref(p2728, false);
                if (a2730 !== false) {
                    var if_res1395 = extract_keyword_root(a2730(p2728));
                } else {
                    var if_res1395 = false;
                }
                var if_res1396 = if_res1395;
            }
            var if_res1397 = if_res1396;
        } else {
            var if_res1397 = false;
        }
        var if_res1398 = if_res1397;
    }
    return if_res1398;
};
var missing_kw = $rjs_core.attachProcedureArity(function(proc2731, ...args27321399) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2732 = $rjs_core.Pair.listFromArray(args27321399);
    return M0.apply(keyword_procedure_extract_by_method(M0.rnull, 0, proc2731, 0), M0.rnull, M0.rnull, args2732);
});
var raise_missing_kw = function(name2733, req_kws2734, args2735) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return raise_wrong_kws(name2733, true, true, false, M0.rnull, M0.rnull, req_kws2734, M0.rnull, args2735);
};
var check_kw_args = function(p2736, kws2737) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2738 = function(kws2739, required2740, allowed2741) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.null_p(kws2739) !== false) {
            if (M0.null_p(required2740) !== false) {
                var if_res1400 = M0.values(false, false);
            } else {
                var if_res1400 = M0.values(M0.car(required2740), false);
            }
            var if_res1409 = if_res1400;
        } else {
            if (M0.pair_p(required2740) !== false) {
                var if_res1401 = M0.eq_p(M0.car(required2740), M0.car(kws2739));
            } else {
                var if_res1401 = false;
            }
            if (if_res1401 !== false) {
                var temp1404 = M0.cdr(kws2739);
                var temp1403 = M0.cdr(required2740);
                if (allowed2741 !== false) {
                    var if_res1402 = M0.cdr(allowed2741);
                } else {
                    var if_res1402 = false;
                }
                var if_res1408 = loop2738(temp1404, temp1403, if_res1402);
            } else {
                if (M0.not(allowed2741) !== false) {
                    var if_res1407 = loop2738(M0.cdr(kws2739), required2740, false);
                } else {
                    if (M0.pair_p(allowed2741) !== false) {
                        if (M0.eq_p(M0.car(allowed2741), M0.car(kws2739)) !== false) {
                            var if_res1405 = loop2738(M0.cdr(kws2739), required2740, M0.cdr(allowed2741));
                        } else {
                            var if_res1405 = loop2738(kws2739, required2740, M0.cdr(allowed2741));
                        }
                        var if_res1406 = if_res1405;
                    } else {
                        var if_res1406 = M0.values(false, M0.car(kws2739));
                    }
                    var if_res1407 = if_res1406;
                }
                var if_res1408 = if_res1407;
            }
            var if_res1409 = if_res1408;
        }
        return if_res1409;
    };
    return loop2738(kws2737, keyword_procedure_required(p2736), keyword_procedure_allowed(p2736));
};
var make_keyword_checker = function(req_kws2742, allowed_kws2743, arity_mask2744) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.not(allowed_kws2743) !== false) {
        if (M0.null_p(req_kws2742) !== false) {
            var if_res1412 = function(kws2745, a2746) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (true !== false) {
                    var if_res1410 = M0.bitwise_bit_set_p(arity_mask2744, a2746);
                } else {
                    var if_res1410 = false;
                }
                return if_res1410;
            };
        } else {
            var if_res1412 = function(kws2747, a2748) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (subset_p(req_kws2742, kws2747) !== false) {
                    var if_res1411 = M0.bitwise_bit_set_p(arity_mask2744, a2748);
                } else {
                    var if_res1411 = false;
                }
                return if_res1411;
            };
        }
        var if_res1425 = if_res1412;
    } else {
        if (M0.null_p(allowed_kws2743) !== false) {
            var if_res1424 = function(kws2749, a2750) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M0.null_p(kws2749) !== false) {
                    var if_res1413 = M0.bitwise_bit_set_p(arity_mask2744, a2750);
                } else {
                    var if_res1413 = false;
                }
                return if_res1413;
            };
        } else {
            if (M0.null_p(req_kws2742) !== false) {
                var if_res1423 = function(kws2751, a2752) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (subset_p(kws2751, allowed_kws2743) !== false) {
                        var if_res1414 = M0.bitwise_bit_set_p(arity_mask2744, a2752);
                    } else {
                        var if_res1414 = false;
                    }
                    return if_res1414;
                };
            } else {
                if (M0.list_p(req_kws2742) !== false) {
                    if (M0.list_p(allowed_kws2743) !== false) {
                        var if_res1415 = M0.eq_p(M0.length(req_kws2742), M0.length(allowed_kws2743));
                    } else {
                        var if_res1415 = false;
                    }
                    var if_res1416 = if_res1415;
                } else {
                    var if_res1416 = false;
                }
                if (if_res1416 !== false) {
                    var if_res1422 = function(kws2753, a2754) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var loop2755 = function(kws2756, req_kws2757) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            if (M0.null_p(req_kws2757) !== false) {
                                var if_res1419 = M0.null_p(kws2756);
                            } else {
                                if (M0.null_p(kws2756) !== false) {
                                    var if_res1418 = false;
                                } else {
                                    if (M0.eq_p(M0.car(kws2756), M0.car(req_kws2757)) !== false) {
                                        var if_res1417 = loop2755(M0.cdr(kws2756), M0.cdr(req_kws2757));
                                    } else {
                                        var if_res1417 = false;
                                    }
                                    var if_res1418 = if_res1417;
                                }
                                var if_res1419 = if_res1418;
                            }
                            return if_res1419;
                        };
                        if (loop2755(kws2753, req_kws2742) !== false) {
                            var if_res1420 = M0.bitwise_bit_set_p(arity_mask2744, a2754);
                        } else {
                            var if_res1420 = false;
                        }
                        return if_res1420;
                    };
                } else {
                    var if_res1422 = function(kws2758, a2759) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (subsets_p(req_kws2742, kws2758, allowed_kws2743) !== false) {
                            var if_res1421 = M0.bitwise_bit_set_p(arity_mask2744, a2759);
                        } else {
                            var if_res1421 = false;
                        }
                        return if_res1421;
                    };
                }
                var if_res1423 = if_res1422;
            }
            var if_res1424 = if_res1423;
        }
        var if_res1425 = if_res1424;
    }
    return if_res1425;
};
var subset_p = function(l12760, l22761) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.null_p(l12760) !== false) {
        var if_res1428 = true;
    } else {
        if (M0.null_p(l22761) !== false) {
            var if_res1427 = false;
        } else {
            if (M0.eq_p(M0.car(l12760), M0.car(l22761)) !== false) {
                var if_res1426 = subset_p(M0.cdr(l12760), M0.cdr(l22761));
            } else {
                var if_res1426 = subset_p(l12760, M0.cdr(l22761));
            }
            var if_res1427 = if_res1426;
        }
        var if_res1428 = if_res1427;
    }
    return if_res1428;
};
var subsets_p = function(l12762, l22763, l32764) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.null_p(l12762) !== false) {
        var if_res1433 = subset_p(l22763, l32764);
    } else {
        if (M0.null_p(l22763) !== false) {
            var if_res1432 = false;
        } else {
            if (M0.null_p(l32764) !== false) {
                var if_res1431 = false;
            } else {
                var v22765 = M0.car(l22763);
                if (M0.eq_p(M0.car(l12762), v22765) !== false) {
                    var if_res1430 = subsets_p(M0.cdr(l12762), M0.cdr(l22763), M0.cdr(l32764));
                } else {
                    if (M0.eq_p(v22765, M0.car(l32764)) !== false) {
                        var if_res1429 = subsets_p(l12762, M0.cdr(l22763), M0.cdr(l32764));
                    } else {
                        var if_res1429 = subsets_p(l12762, l22763, M0.cdr(l32764));
                    }
                    var if_res1430 = if_res1429;
                }
                var if_res1431 = if_res1430;
            }
            var if_res1432 = if_res1431;
        }
        var if_res1433 = if_res1432;
    }
    return if_res1433;
};
var keyword_procedure_extract_by_method = function(kws2766, n2767, p2768, method_n2769) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_procedure_p(p2768) !== false) {
        var if_res1434 = keyword_procedure_checker(p2768)(kws2766, n2767);
    } else {
        var if_res1434 = false;
    }
    if (if_res1434 !== false) {
        var if_res1457 = keyword_procedure_proc(p2768);
    } else {
        if (M0.not(keyword_procedure_p(p2768)) !== false) {
            if (M0.procedure_p(p2768) !== false) {
                if (new_procedure_p(p2768) !== false) {
                    var a2772 = procedure_accessor_ref(p2768);
                    if (a2772 !== false) {
                        var if_res1435 = a2772(p2768);
                    } else {
                        var if_res1435 = false;
                    }
                    var if_res1436 = if_res1435;
                } else {
                    var if_res1436 = false;
                }
                var or_part2771 = if_res1436;
                if (or_part2771 !== false) {
                    var if_res1439 = or_part2771;
                } else {
                    var or_part2773 = M0.procedure_extract_target(p2768);
                    if (or_part2773 !== false) {
                        var if_res1438 = or_part2773;
                    } else {
                        if (new_procedure_p(p2768) !== false) {
                            var if_res1437 = $rjs_core.PrimitiveSymbol.make("method");
                        } else {
                            var if_res1437 = false;
                        }
                        var if_res1438 = if_res1437;
                    }
                    var if_res1439 = if_res1438;
                }
                var if_res1440 = if_res1439;
            } else {
                var if_res1440 = false;
            }
            var if_res1441 = if_res1440;
        } else {
            var if_res1441 = false;
        }
        var p22770 = if_res1441;
        if (p22770 !== false) {
            if (M0.eq_p(p22770, $rjs_core.PrimitiveSymbol.make("method")) !== false) {
                var p32774 = keyword_procedure_extract_by_method(kws2766, M0.add1(n2767), new_procedure_ref(p2768), M0.add1(method_n2769));
                var if_res1443 = $rjs_core.attachProcedureArity(function(kws2775, kw_args2776, ...args27771442) {
                    if (arguments.length < 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var args2777 = $rjs_core.Pair.listFromArray(args27771442);
                    return M0.apply(p32774, kws2775, kw_args2776, M0.cons(p2768, args2777));
                });
            } else {
                var if_res1443 = keyword_procedure_extract_by_method(kws2766, n2767, p22770, method_n2769);
            }
            var if_res1456 = if_res1443;
        } else {
            var if_res1456 = $rjs_core.attachProcedureArity(function(kws2778, kw_args2779, ...args27801444) {
                if (arguments.length < 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var args2780 = $rjs_core.Pair.listFromArray(args27801444);
                if (keyword_procedure_p(p2768) !== false) {
                    var if_res1445 = check_kw_args(p2768, kws2778);
                } else {
                    var if_res1445 = M0.values(false, M0.car(kws2778));
                }
                var let_result1446 = if_res1445;
                var missing_kw2781 = let_result1446.getAt(0);
                var extra_kw2782 = let_result1446.getAt(1);
                var or_part2786 = keyword_method_p(p2768);
                if (or_part2786 !== false) {
                    var if_res1447 = or_part2786;
                } else {
                    var if_res1447 = okm_p(p2768);
                }
                if (if_res1447 !== false) {
                    var if_res1448 = 1;
                } else {
                    var if_res1448 = 0;
                }
                var method_n2785 = method_n2769 + if_res1448;
                if (M0.__gt__eq_(n2767, method_n2785) !== false) {
                    var if_res1449 = n2767 - method_n2785;
                } else {
                    var if_res1449 = n2767;
                }
                var n2783 = if_res1449;
                var or_part2787 = keyword_procedure_p(p2768);
                if (or_part2787 !== false) {
                    var if_res1451 = or_part2787;
                } else {
                    var or_part2788 = M0.procedure_p(p2768);
                    if (or_part2788 !== false) {
                        var if_res1450 = or_part2788;
                    } else {
                        var if_res1450 = M0.not(extra_kw2782);
                    }
                    var if_res1451 = if_res1450;
                }
                if (if_res1451 !== false) {
                    if (named_keyword_procedure_p(p2768) !== false) {
                        var if_res1452 = M0.vector_ref(keyword_procedure_name_plus_fail_times_(p2768), 0);
                    } else {
                        var if_res1452 = false;
                    }
                    var or_part2789 = if_res1452;
                    if (or_part2789 !== false) {
                        var if_res1454 = or_part2789;
                    } else {
                        var or_part2790 = M0.object_name(p2768);
                        if (or_part2790 !== false) {
                            var if_res1453 = or_part2790;
                        } else {
                            var if_res1453 = p2768;
                        }
                        var if_res1454 = if_res1453;
                    }
                    var if_res1455 = if_res1454;
                } else {
                    var if_res1455 = p2768;
                }
                var name_by_val2784 = if_res1455;
                return raise_wrong_kws(name_by_val2784, keyword_procedure_p(p2768), M0.procedure_p(p2768), n2783, kws2778, kw_args2779, missing_kw2781, extra_kw2782, args2780);
            });
        }
        var if_res1457 = if_res1456;
    }
    return if_res1457;
};
var raise_wrong_kws = function(name_by_val2791, kw_proc_p2792, proc_p2793, n2794, kws2795, kw_args2796, missing_kw2797, extra_kw2798, args2799) {
    if (arguments.length !== 9) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.null_p(args2799) !== false) {
        var if_res1458 = M0.null_p(kws2795);
    } else {
        var if_res1458 = false;
    }
    if (if_res1458 !== false) {
        var if_res1459 = $rjs_core.UString.make("");
    } else {
        var if_res1459 = M0.apply(M0.string_append, $rjs_core.UString.make("\n  arguments...:"), M0.append(M0.map(function(v2801) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M0.format($rjs_core.UString.make("\n   ~e"), v2801);
        }, args2799), M0.map(function(kw2802, kw_arg2803) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M0.format($rjs_core.UString.make("\n   ~a ~e"), kw2802, kw_arg2803);
        }, kws2795, kw_args2796)));
    }
    var args_str2800 = if_res1459;
    var application_message2804 = function(str2805) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return M0.__rjs_quoted__.error_message__gt_adjusted_string($rjs_core.PrimitiveSymbol.make("application"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), str2805, $rjs_core.PrimitiveSymbol.make("racket/primitive"));
    };
    var or_part2806 = extra_kw2798;
    if (or_part2806 !== false) {
        var if_res1466 = or_part2806;
    } else {
        var if_res1466 = missing_kw2797;
    }
    if (if_res1466 !== false) {
        var if_res1467 = M0.__rjs_quoted__.exn_fail_contract;
    } else {
        var if_res1467 = M0.__rjs_quoted__.exn_fail_contract_arity;
    }
    if (extra_kw2798 !== false) {
        if (kw_proc_p2792 !== false) {
            var if_res1461 = application_message2804(M0.format(M0.string_append($rjs_core.UString.make("procedure does not expect an argument with given keyword\n"), $rjs_core.UString.make("  procedure: ~a\n"), $rjs_core.UString.make("  given keyword: ~a"), $rjs_core.UString.make("~a")), name_by_val2791, extra_kw2798, args_str2800));
        } else {
            if (proc_p2793 !== false) {
                var if_res1460 = application_message2804(M0.format(M0.string_append($rjs_core.UString.make("procedure does not accept keyword arguments\n"), $rjs_core.UString.make("  procedure: ~a"), $rjs_core.UString.make("~a")), name_by_val2791, args_str2800));
            } else {
                var if_res1460 = application_message2804(M0.format(M0.string_append($rjs_core.UString.make("not a procedure;\n"), $rjs_core.UString.make(" expected a procedure that can be applied to arguments\n"), $rjs_core.UString.make("  given: ~e"), $rjs_core.UString.make("~a")), name_by_val2791, args_str2800));
            }
            var if_res1461 = if_res1460;
        }
        var if_res1465 = if_res1461;
    } else {
        if (missing_kw2797 !== false) {
            var if_res1464 = application_message2804(M0.format(M0.string_append($rjs_core.UString.make("required keyword argument not supplied\n"), $rjs_core.UString.make("  procedure: ~a\n"), $rjs_core.UString.make("  required keyword: ~a"), $rjs_core.UString.make("~a")), name_by_val2791, missing_kw2797, args_str2800));
        } else {
            var temp1463 = M0.string_append($rjs_core.UString.make("no case matching ~a non-keyword argument~a\n"), $rjs_core.UString.make("  procedure: ~a"), $rjs_core.UString.make("~a"));
            if (M0.__eq_(1, n2794 - 2) !== false) {
                var if_res1462 = $rjs_core.UString.make("");
            } else {
                var if_res1462 = $rjs_core.UString.make("s");
            }
            var if_res1464 = application_message2804(M0.format(temp1463, n2794 - 2, if_res1462, name_by_val2791, args_str2800));
        }
        var if_res1465 = if_res1464;
    }
    return M0.raise(if_res1467(if_res1465, M0.current_continuation_marks()));
};
var keyword_procedure_extract = function(p2807, kws2808, n2809) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return keyword_procedure_extract_by_method(kws2808, n2809, p2807, 0);
};
var cl1468 = function(proc2810, arity2811, req_kw2812, allowed_kw2813, name2814, realm2815) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity"), proc2810, arity2811, false, name2814, realm2815, req_kw2812, allowed_kw2813);
};
var cl1469 = function(proc2816, arity2817, req_kw2818, allowed_kw2819, name2820) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity"), proc2816, arity2817, false, name2820, $rjs_core.PrimitiveSymbol.make("racket"), req_kw2818, allowed_kw2819);
};
var cl1470 = function(proc2821, arity2822, req_kw2823, allowed_kw2824) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity"), proc2821, arity2822, false, false, $rjs_core.PrimitiveSymbol.make("racket"), req_kw2823, allowed_kw2824);
};
var procedure_reduce_keyword_arity = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1471 = {
        '6': cl1468,
        '5': cl1469,
        '4': cl1470
    } [arguments.length];
    if (fixed_lam1471 !== undefined) {
        return fixed_lam1471.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4, 5, 6]);
var cl1472 = function(proc2825, mask2826, req_kw2827, allowed_kw2828, name2829, realm2830) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity-mask"), proc2825, false, mask2826, name2829, realm2830, req_kw2827, allowed_kw2828);
};
var cl1473 = function(proc2831, mask2832, req_kw2833, allowed_kw2834, name2835) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity-mask"), proc2831, false, mask2832, name2835, $rjs_core.PrimitiveSymbol.make("racket"), req_kw2833, allowed_kw2834);
};
var cl1474 = function(proc2836, mask2837, req_kw2838, allowed_kw2839) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity-mask"), proc2836, false, mask2837, false, $rjs_core.PrimitiveSymbol.make("racket"), req_kw2838, allowed_kw2839);
};
var procedure_reduce_keyword_arity_mask = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1475 = {
        '6': cl1472,
        '5': cl1473,
        '4': cl1474
    } [arguments.length];
    if (fixed_lam1475 !== undefined) {
        return fixed_lam1475.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4, 5, 6]);
var do_procedure_reduce_keyword_arity = function(who2840, proc2841, arity2842, mask2843, name2844, realm2845, req_kw2846, allowed_kw2847) {
    if (arguments.length !== 8) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var or_part2849 = M0.null_p(allowed_kw2847);
    if (or_part2849 !== false) {
        var if_res1476 = or_part2849;
    } else {
        var if_res1476 = M0.null_p(req_kw2846);
    }
    if (if_res1476 !== false) {
        if (okp_p(proc2841) !== false) {
            var if_res1477 = okp_ref(proc2841, 0);
        } else {
            var if_res1477 = proc2841;
        }
        var p2850 = if_res1477;
        if (arity2842 !== false) {
            var if_res1478 = M0.__rjs_quoted__.procedure_reduce_arity(p2850, arity2842, name2844, realm2845);
        } else {
            var if_res1478 = M0.__rjs_quoted__.procedure_reduce_arity_mask(p2850, mask2843, name2844, realm2845);
        }
        var if_res1479 = if_res1478;
    } else {
        var if_res1479 = false;
    }
    var plain_proc2848 = if_res1479;
    var sorted_kws_p2851 = function(kws2852) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var loop2853 = function(kws2854) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M0.null_p(kws2854) !== false) {
                var if_res1484 = true;
            } else {
                if (M0.not(M0.pair_p(kws2854)) !== false) {
                    var if_res1483 = false;
                } else {
                    if (M0.not(M0.keyword_p(M0.car(kws2854))) !== false) {
                        var if_res1482 = false;
                    } else {
                        if (M0.null_p(M0.cdr(kws2854)) !== false) {
                            var if_res1481 = true;
                        } else {
                            if (M0.keyword_lt__p(M0.car(kws2854), M0.cadr(kws2854)) !== false) {
                                var if_res1480 = loop2853(M0.cdr(kws2854));
                            } else {
                                var if_res1480 = false;
                            }
                            var if_res1481 = if_res1480;
                        }
                        var if_res1482 = if_res1481;
                    }
                    var if_res1483 = if_res1482;
                }
                var if_res1484 = if_res1483;
            }
            return if_res1484;
        };
        return loop2853(kws2852);
    };
    if (sorted_kws_p2851(req_kw2846) !== false) {
        var if_res1488 = M0.rvoid();
    } else {
        var temp1487 = $rjs_core.PrimitiveSymbol.make("racket/primitive");
        var temp1486 = $rjs_core.UString.make("(and/c (listof? keyword?) sorted? distinct?)");
        var or_part2855 = arity2842;
        if (or_part2855 !== false) {
            var if_res1485 = or_part2855;
        } else {
            var if_res1485 = mask2843;
        }
        var if_res1488 = M0.__rjs_quoted__.raise_argument_error_times_(who2840, temp1487, temp1486, 2, proc2841, if_res1485, req_kw2846, allowed_kw2847);
    }
    if_res1488;
    if (allowed_kw2847 !== false) {
        if (sorted_kws_p2851(allowed_kw2847) !== false) {
            var if_res1492 = M0.rvoid();
        } else {
            var temp1491 = $rjs_core.PrimitiveSymbol.make("racket/primitive");
            var temp1490 = $rjs_core.UString.make("(or/c (and/c (listof? keyword?) sorted? distinct?) #f)");
            var or_part2856 = arity2842;
            if (or_part2856 !== false) {
                var if_res1489 = or_part2856;
            } else {
                var if_res1489 = mask2843;
            }
            var if_res1492 = M0.__rjs_quoted__.raise_argument_error_times_(who2840, temp1491, temp1490, 3, proc2841, if_res1489, req_kw2846, allowed_kw2847);
        }
        if_res1492;
        if (subset_p(req_kw2846, allowed_kw2847) !== false) {
            var if_res1493 = M0.rvoid();
        } else {
            var if_res1493 = M0.__rjs_quoted__.raise_arguments_error_times_(who2840, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("allowed-keyword list does not include all required keywords"), $rjs_core.UString.make("allowed-keyword list"), allowed_kw2847, $rjs_core.UString.make("required keywords"), req_kw2846);
        }
        var if_res1494 = if_res1493;
    } else {
        var if_res1494 = M0.rvoid();
    }
    if_res1494;
    var let_result1495 = procedure_keywords(proc2841);
    var old_req2857 = let_result1495.getAt(0);
    var old_allowed2858 = let_result1495.getAt(1);
    if (subset_p(old_req2857, req_kw2846) !== false) {
        var if_res1496 = M0.rvoid();
    } else {
        var if_res1496 = M0.__rjs_quoted__.raise_arguments_error_times_(who2840, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("cannot reduce required keyword set"), $rjs_core.UString.make("required keywords"), old_req2857, $rjs_core.UString.make("requested required keywords"), req_kw2846);
    }
    if_res1496;
    if (old_allowed2858 !== false) {
        if (subset_p(req_kw2846, old_allowed2858) !== false) {
            var if_res1497 = M0.rvoid();
        } else {
            var if_res1497 = M0.__rjs_quoted__.raise_arguments_error_times_(who2840, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("cannot require keywords not in original allowed set"), $rjs_core.UString.make("original allowed keywords"), old_allowed2858, $rjs_core.UString.make("requested required keywords"), req_kw2846);
        }
        if_res1497;
        var or_part2859 = M0.not(allowed_kw2847);
        if (or_part2859 !== false) {
            var if_res1498 = or_part2859;
        } else {
            var if_res1498 = subset_p(allowed_kw2847, old_allowed2858);
        }
        if (if_res1498 !== false) {
            var if_res1499 = M0.rvoid();
        } else {
            var if_res1499 = M0.__rjs_quoted__.raise_arguments_error_times_(who2840, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("cannot allow keywords not in original allowed set"), $rjs_core.UString.make("original allowed keywords"), old_allowed2858, $rjs_core.UString.make("requested allowed keywords"), allowed_kw2847);
        }
        var if_res1500 = if_res1499;
    } else {
        var if_res1500 = M0.rvoid();
    }
    if_res1500;
    if (M0.null_p(allowed_kw2847) !== false) {
        var if_res1514 = plain_proc2848;
    } else {
        var or_part2861 = mask2843;
        if (or_part2861 !== false) {
            var if_res1501 = or_part2861;
        } else {
            var if_res1501 = arity__gt_mask(arity2842);
        }
        var mask2860 = if_res1501;
        var new_mask2862 = M0.arithmetic_shift(mask2860, 2);
        var kw_checker2863 = make_keyword_checker(req_kw2846, allowed_kw2847, new_mask2862);
        var proc2864 = normalize_proc(proc2841);
        var new_kw_proc2865 = M0.__rjs_quoted__.procedure_reduce_arity_mask(keyword_procedure_proc(proc2864), new_mask2862);
        if (M0.null_p(req_kw2846) !== false) {
            if (okm_p(proc2864) !== false) {
                var if_res1502 = make_optional_keyword_method;
            } else {
                var if_res1502 = make_optional_keyword_procedure;
            }
            var if_res1513 = if_res1502(kw_checker2863, new_kw_proc2865, req_kw2846, allowed_kw2847, plain_proc2848);
        } else {
            var or_part2868 = name2844;
            if (or_part2868 !== false) {
                var if_res1505 = or_part2868;
            } else {
                if (named_keyword_procedure_p(proc2864) !== false) {
                    var if_res1503 = M0.vector_ref(keyword_procedure_name_plus_fail_times_(proc2864), 0);
                } else {
                    var if_res1503 = false;
                }
                var or_part2869 = if_res1503;
                if (or_part2869 !== false) {
                    var if_res1504 = or_part2869;
                } else {
                    var if_res1504 = M0.object_name(proc2864);
                }
                var if_res1505 = if_res1504;
            }
            var name2866 = if_res1505;
            if (name2844 !== false) {
                var if_res1506 = realm2845;
            } else {
                var if_res1506 = false;
            }
            var or_part2870 = if_res1506;
            if (or_part2870 !== false) {
                var if_res1509 = or_part2870;
            } else {
                if (named_keyword_procedure_p(proc2864) !== false) {
                    var if_res1507 = M0.vector_ref(keyword_procedure_name_plus_fail_times_(proc2864), 1);
                } else {
                    var if_res1507 = false;
                }
                var or_part2871 = if_res1507;
                if (or_part2871 !== false) {
                    var if_res1508 = or_part2871;
                } else {
                    var if_res1508 = M0.__rjs_quoted__.procedure_realm(proc2864);
                }
                var if_res1509 = if_res1508;
            }
            var realm2867 = if_res1509;
            var or_part2872 = okm_p(proc2864);
            if (or_part2872 !== false) {
                var if_res1511 = or_part2872;
            } else {
                var if_res1511 = keyword_method_p(proc2864);
            }
            if (if_res1511 !== false) {
                var if_res1512 = make_required_keyword_method_by_arity_error;
            } else {
                var if_res1512 = make_required_keyword_procedure_by_arity_error;
            }
            var if_res1513 = if_res1512(kw_checker2863, new_kw_proc2865, req_kw2846, allowed_kw2847, M0.__rjs_quoted__.procedure_reduce_arity_mask($rjs_core.attachProcedureArity(function(...args28731510) {
                var args2873 = $rjs_core.Pair.listFromArray(args28731510);
                return raise_missing_kw(name2866, req_kw2846);
            }), mask2860), name2866, realm2867);
        }
        var if_res1514 = if_res1513;
    }
    return if_res1514;
};
var arity__gt_mask = function(a2874) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.exact_nonnegative_integer_p(a2874) !== false) {
        var if_res1520 = M0.arithmetic_shift(1, a2874);
    } else {
        if (M0.arity_at_least_p(a2874) !== false) {
            var if_res1519 = M0.bitwise_xor(-1, M0.sub1(M0.arithmetic_shift(1, M0.arity_at_least_value(a2874))));
        } else {
            if (M0.list_p(a2874) !== false) {
                var loop2875 = function(mask2876, l2877) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M0.null_p(l2877) !== false) {
                        var if_res1517 = mask2876;
                    } else {
                        var a2878 = M0.car(l2877);
                        var or_part2879 = M0.exact_nonnegative_integer_p(a2878);
                        if (or_part2879 !== false) {
                            var if_res1515 = or_part2879;
                        } else {
                            var if_res1515 = M0.arity_at_least_p(a2878);
                        }
                        if (if_res1515 !== false) {
                            var if_res1516 = loop2875(M0.bitwise_ior(mask2876, arity__gt_mask(a2878)), M0.cdr(l2877));
                        } else {
                            var if_res1516 = false;
                        }
                        var if_res1517 = if_res1516;
                    }
                    return if_res1517;
                };
                var if_res1518 = loop2875(0, a2874);
            } else {
                var if_res1518 = false;
            }
            var if_res1519 = if_res1518;
        }
        var if_res1520 = if_res1519;
    }
    return if_res1520;
};
var cl1521 = function(proc2881, arity2882, name2883, realm2884) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.procedure_p(proc2881) !== false) {
        var let_result1525 = procedure_keywords(proc2881);
        var req2885 = let_result1525.getAt(0);
        var allows2886 = let_result1525.getAt(1);
        if (M0.pair_p(req2885) !== false) {
            var if_res1526 = M0.not(M0.null_p(arity2882));
        } else {
            var if_res1526 = false;
        }
        var if_res1527 = if_res1526;
    } else {
        var if_res1527 = false;
    }
    if (if_res1527 !== false) {
        var if_res1529 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("procedure-reduce-arity"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("procedure has required keyword arguments"), $rjs_core.UString.make("procedure"), proc2881);
    } else {
        if (okm_p(proc2881) !== false) {
            var if_res1528 = M0.__rjs_quoted__.procedure__gt_method(proc2881);
        } else {
            var if_res1528 = proc2881;
        }
        var if_res1529 = M0.__rjs_quoted__.procedure_reduce_arity(if_res1528, arity2882, name2883, realm2884);
    }
    return if_res1529;
};
var cl1522 = function(proc2887, arity2888, name2889) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new_procedure_reduce_arity(proc2887, arity2888, name2889, $rjs_core.PrimitiveSymbol.make("racket"));
};
var cl1523 = function(proc2890, arity2891) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new_procedure_reduce_arity(proc2890, arity2891, false, $rjs_core.PrimitiveSymbol.make("racket"));
};
var procedure_reduce_arity2880 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1524 = {
        '4': cl1521,
        '3': cl1522,
        '2': cl1523
    } [arguments.length];
    if (fixed_lam1524 !== undefined) {
        return fixed_lam1524.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var new_procedure_reduce_arity = procedure_reduce_arity2880;
var cl1530 = function(proc2893, mask2894, name2895, realm2896) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.procedure_p(proc2893) !== false) {
        var let_result1534 = procedure_keywords(proc2893);
        var req2897 = let_result1534.getAt(0);
        var allows2898 = let_result1534.getAt(1);
        if (M0.pair_p(req2897) !== false) {
            var if_res1535 = M0.not(M0.eqv_p(mask2894, 0));
        } else {
            var if_res1535 = false;
        }
        var if_res1536 = if_res1535;
    } else {
        var if_res1536 = false;
    }
    if (if_res1536 !== false) {
        var if_res1538 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("procedure-reduce-arity"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("procedure has required keyword arguments"), $rjs_core.UString.make("procedure"), proc2893);
    } else {
        if (okm_p(proc2893) !== false) {
            var if_res1537 = M0.__rjs_quoted__.procedure__gt_method(proc2893);
        } else {
            var if_res1537 = proc2893;
        }
        var if_res1538 = M0.__rjs_quoted__.procedure_reduce_arity_mask(if_res1537, mask2894, name2895, realm2896);
    }
    return if_res1538;
};
var cl1531 = function(proc2899, mask2900, name2901) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new_procedure_reduce_arity_mask(proc2899, mask2900, name2901, $rjs_core.PrimitiveSymbol.make("racket"));
};
var cl1532 = function(proc2902, mask2903) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new_procedure_reduce_arity_mask(proc2902, mask2903, false, $rjs_core.PrimitiveSymbol.make("racket"));
};
var procedure_reduce_arity2892 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1533 = {
        '4': cl1530,
        '3': cl1531,
        '2': cl1532
    } [arguments.length];
    if (fixed_lam1533 !== undefined) {
        return fixed_lam1533.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var new_procedure_reduce_arity_mask = procedure_reduce_arity2892;
var procedure__gt_method2904 = function(proc2905) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var proc2906 = normalize_proc(proc2905);
    if (keyword_procedure_p(proc2906) !== false) {
        if (okm_p(proc2906) !== false) {
            var if_res1547 = proc2906;
        } else {
            if (keyword_method_p(proc2906) !== false) {
                var if_res1546 = proc2906;
            } else {
                if (okp_p(proc2906) !== false) {
                    var if_res1545 = make_optional_keyword_method(keyword_procedure_checker(proc2906), keyword_procedure_proc(proc2906), keyword_procedure_required(proc2906), keyword_procedure_allowed(proc2906), okp_ref(proc2906, 0));
                } else {
                    var raw_name_plus_fail2907 = keyword_procedure_name_plus_fail(proc2906);
                    if (M0.vector_p(raw_name_plus_fail2907) !== false) {
                        var if_res1539 = raw_name_plus_fail2907;
                    } else {
                        var if_res1539 = raw_name_plus_fail2907(proc2906);
                    }
                    var name_plus_fail2908 = if_res1539;
                    var name2909 = M0.vector_ref(name_plus_fail2908, 0);
                    var req_kw2910 = keyword_procedure_required(proc2906);
                    var temp1544 = keyword_procedure_checker(proc2906);
                    var temp1543 = keyword_procedure_proc(proc2906);
                    var temp1542 = keyword_procedure_allowed(proc2906);
                    if (M0.vector_p(raw_name_plus_fail2907) !== false) {
                        var if_res1541 = M0.__rjs_quoted__.procedure_reduce_arity_mask($rjs_core.attachProcedureArity(function(...args29111540) {
                            var args2911 = $rjs_core.Pair.listFromArray(args29111540);
                            return raise_missing_kw(name2909, req_kw2910);
                        }), M0.arithmetic_shift(M0.procedure_arity_mask(M0.vector_ref(name_plus_fail2908, 2)), -1));
                    } else {
                        var if_res1541 = M0.vector_ref(name_plus_fail2908, 2);
                    }
                    var if_res1545 = make_required_keyword_method_by_arity_error(temp1544, temp1543, req_kw2910, temp1542, if_res1541, name2909, M0.vector_ref(name_plus_fail2908, 1));
                }
                var if_res1546 = if_res1545;
            }
            var if_res1547 = if_res1546;
        }
        var if_res1548 = if_res1547;
    } else {
        var if_res1548 = M0.__rjs_quoted__.procedure__gt_method(proc2906);
    }
    return if_res1548;
};
var new_procedure__gt_method = procedure__gt_method2904;
var cl1549 = function(proc2913, name2914, realm2915) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.symbol_p(name2914) !== false) {
        var if_res1552 = M0.symbol_p(realm2915);
    } else {
        var if_res1552 = false;
    }
    if (M0.not(if_res1552) !== false) {
        var if_res1554 = M0.__rjs_quoted__.procedure_rename(proc2913, name2914, realm2915);
    } else {
        var c12916 = extract_keyword_root(proc2913);
        if (c12916 !== false) {
            var if_res1553 = (function(kw_p2917) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-rename"), proc2913, false, M0.procedure_arity_mask(proc2913), name2914, realm2915, keyword_procedure_required(kw_p2917), keyword_procedure_allowed(kw_p2917));
            })(c12916);
        } else {
            var if_res1553 = M0.__rjs_quoted__.procedure_rename(proc2913, name2914, realm2915);
        }
        var if_res1554 = if_res1553;
    }
    return if_res1554;
};
var cl1550 = function(proc2918, name2919) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new_procedure_rename(proc2918, name2919, $rjs_core.PrimitiveSymbol.make("racket"));
};
var procedure_rename2912 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1551 = {
        '3': cl1549,
        '2': cl1550
    } [arguments.length];
    if (fixed_lam1551 !== undefined) {
        return fixed_lam1551.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var new_procedure_rename = procedure_rename2912;
var procedure_realm2920 = function(proc2921) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_procedure_p(proc2921) !== false) {
        if (named_keyword_procedure_p(proc2921) !== false) {
            var name_plus_fail2922 = keyword_procedure_name_plus_fail_times_(proc2921);
            var or_part2923 = M0.vector_ref(name_plus_fail2922, 1);
            if (or_part2923 !== false) {
                var if_res1555 = or_part2923;
            } else {
                var if_res1555 = M0.__rjs_quoted__.procedure_realm(M0.vector_ref(name_plus_fail2922, 2));
            }
            var if_res1557 = if_res1555;
        } else {
            if (okp_p(proc2921) !== false) {
                var if_res1556 = M0.__rjs_quoted__.procedure_realm(okp_ref(proc2921, 0));
            } else {
                var if_res1556 = M0.__rjs_quoted__.procedure_realm(keyword_procedure_proc(proc2921));
            }
            var if_res1557 = if_res1556;
        }
        var if_res1558 = if_res1557;
    } else {
        var if_res1558 = M0.__rjs_quoted__.procedure_realm(proc2921);
    }
    return if_res1558;
};
var new_procedure_realm = procedure_realm2920;
var chaperone_procedure2924 = $rjs_core.attachProcedureArity(function(proc2925, wrap_proc2926, ...props29271559) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props2927 = $rjs_core.Pair.listFromArray(props29271559);
    return do_chaperone_procedure(false, false, M0.__rjs_quoted__.chaperone_procedure, $rjs_core.PrimitiveSymbol.make("chaperone-procedure"), proc2925, wrap_proc2926, props2927);
});
var new_chaperone_procedure = chaperone_procedure2924;
var unsafe_chaperone_procedure2928 = $rjs_core.attachProcedureArity(function(proc2929, wrap_proc2930, ...props29311560) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props2931 = $rjs_core.Pair.listFromArray(props29311560);
    return do_unsafe_chaperone_procedure(M1.__rjs_quoted__.unsafe_chaperone_procedure, $rjs_core.PrimitiveSymbol.make("unsafe-chaperone-procedure"), proc2929, wrap_proc2930, props2931);
});
var new_unsafe_chaperone_procedure = unsafe_chaperone_procedure2928;
var impersonate_procedure2932 = $rjs_core.attachProcedureArity(function(proc2933, wrap_proc2934, ...props29351561) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props2935 = $rjs_core.Pair.listFromArray(props29351561);
    return do_chaperone_procedure(true, false, M0.__rjs_quoted__.impersonate_procedure, $rjs_core.PrimitiveSymbol.make("impersonate-procedure"), proc2933, wrap_proc2934, props2935);
});
var new_impersonate_procedure = impersonate_procedure2932;
var unsafe_impersonate_procedure2936 = $rjs_core.attachProcedureArity(function(proc2937, wrap_proc2938, ...props29391562) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props2939 = $rjs_core.Pair.listFromArray(props29391562);
    return do_unsafe_chaperone_procedure(M1.__rjs_quoted__.unsafe_impersonate_procedure, $rjs_core.PrimitiveSymbol.make("unsafe-impersonate-procedure"), proc2937, wrap_proc2938, props2939);
});
var new_unsafe_impersonate_procedure = unsafe_impersonate_procedure2936;
var chaperone_procedure_times_2940 = $rjs_core.attachProcedureArity(function(proc2941, wrap_proc2942, ...props29431563) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props2943 = $rjs_core.Pair.listFromArray(props29431563);
    return do_chaperone_procedure(false, true, M0.__rjs_quoted__.chaperone_procedure_times_, $rjs_core.PrimitiveSymbol.make("chaperone-procedure"), proc2941, wrap_proc2942, props2943);
});
var new_chaperone_procedure_times_ = chaperone_procedure_times_2940;
var impersonate_procedure_times_2944 = $rjs_core.attachProcedureArity(function(proc2945, wrap_proc2946, ...props29471564) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props2947 = $rjs_core.Pair.listFromArray(props29471564);
    return do_chaperone_procedure(true, true, M0.__rjs_quoted__.impersonate_procedure_times_, $rjs_core.PrimitiveSymbol.make("impersonate-procedure"), proc2945, wrap_proc2946, props2947);
});
var new_impersonate_procedure_times_ = impersonate_procedure_times_2944;
var do_chaperone_procedure = function(is_impersonator_p2948, self_arg_p2949, chaperone_procedure2950, name2951, proc2952, wrap_proc2953, props2954) {
    if (arguments.length !== 7) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n_proc2955 = normalize_proc(proc2952);
    var n_wrap_proc2956 = normalize_proc(wrap_proc2953);
    var or_part2957 = M0.not(keyword_procedure_p(n_proc2955));
    if (or_part2957 !== false) {
        var if_res1566 = or_part2957;
    } else {
        var or_part2958 = M0.not(M0.procedure_p(wrap_proc2953));
        if (or_part2958 !== false) {
            var if_res1565 = or_part2958;
        } else {
            var if_res1565 = bad_props_p(props2954);
        }
        var if_res1566 = if_res1565;
    }
    if (if_res1566 !== false) {
        var if_res1655 = M0.apply(chaperone_procedure2950, proc2952, wrap_proc2953, props2954);
    } else {
        chaperone_arity_match_checking(self_arg_p2949, name2951, proc2952, wrap_proc2953, props2954);
        var loop2960 = function(props2961) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M0.null_p(props2961) !== false) {
                var if_res1568 = false;
            } else {
                if (M0.eq_p(M0.car(props2961), M0.__rjs_quoted__.impersonator_prop_application_mark) !== false) {
                    var if_res1567 = M0.cadr(props2961);
                } else {
                    var if_res1567 = loop2960(M0.cddr(props2961));
                }
                var if_res1568 = if_res1567;
            }
            return if_res1568;
        };
        var mark_prop2959 = loop2960(props2954);
        var chaperone_procedure_by_add_mark2962 = function(proc2963, wrap_proc2964) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (mark_prop2959 !== false) {
                var if_res1569 = chaperone_procedure2950(proc2963, wrap_proc2964, M0.__rjs_quoted__.impersonator_prop_application_mark, mark_prop2959);
            } else {
                var if_res1569 = chaperone_procedure2950(proc2963, wrap_proc2964);
            }
            return if_res1569;
        };
        var p2966 = keyword_procedure_proc(n_wrap_proc2956);
        if (self_arg_p2949 !== false) {
            var cl1570 = $rjs_core.attachProcedureArity(function(self_proc2967, kws2968, args2969, ...rest29701575) {
                if (arguments.length < 3) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var rest2970 = $rjs_core.Pair.listFromArray(rest29701575);
                return M0.call_with_values(function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return M0.apply(p2966, kws2968, args2969, self_proc2967, rest2970);
                }, $rjs_core.attachProcedureArity(function(...results29711576) {
                    var results2971 = $rjs_core.Pair.listFromArray(results29711576);
                    var len2972 = M0.length(results2971);
                    var alen2973 = M0.length(rest2970);
                    if (M0.__lt_(len2972, alen2973 + 1) !== false) {
                        var if_res1577 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword procedure chaperone"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("wrong number of results from wrapper procedure"), $rjs_core.UString.make("expected minimum number of results"), alen2973 + 1, $rjs_core.UString.make("received number of results"), len2972, $rjs_core.UString.make("wrapper procedure"), wrap_proc2953);
                    } else {
                        var if_res1577 = M0.rvoid();
                    }
                    if_res1577;
                    var num_extra2974 = len2972 - (alen2973 + 1);
                    var new_args2975 = M0.list_ref(results2971, num_extra2974);
                    if (M0.list_p(new_args2975) !== false) {
                        var if_res1578 = M0.__eq_(M0.length(new_args2975), M0.length(args2969));
                    } else {
                        var if_res1578 = false;
                    }
                    if (if_res1578 !== false) {
                        var if_res1583 = M0.rvoid();
                    } else {
                        var temp1582 = $rjs_core.PrimitiveSymbol.make("keyword procedure chaperone");
                        var temp1581 = $rjs_core.PrimitiveSymbol.make("racket/primitive");
                        var temp1580 = $rjs_core.UString.make("expected a list of keyword-argument values as first result~a from wrapper procedure");
                        if (M0.__eq_(len2972, alen2973) !== false) {
                            var if_res1579 = $rjs_core.UString.make("");
                        } else {
                            var if_res1579 = $rjs_core.UString.make(" (after the result-wrapper procedure or mark specifications)");
                        }
                        var if_res1583 = M0.__rjs_quoted__.raise_arguments_error_times_(temp1582, temp1581, M0.format(temp1580, if_res1579), $rjs_core.UString.make("first result"), new_args2975, $rjs_core.UString.make("wrapper procedure"), wrap_proc2953);
                    }
                    if_res1583;
                    M0.for_each(function(kw2976, new_arg2977, arg2978) {
                        if (arguments.length !== 3) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (is_impersonator_p2948 !== false) {
                            var if_res1585 = M0.rvoid();
                        } else {
                            if (M0.__rjs_quoted__.chaperone_of_p(new_arg2977, arg2978) !== false) {
                                var if_res1584 = M0.rvoid();
                            } else {
                                var if_res1584 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword procedure chaperone"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), M0.format($rjs_core.UString.make("~a keyword result is not a chaperone of original argument from chaperoning procedure"), kw2976), $rjs_core.UString.make("result"), new_arg2977, $rjs_core.UString.make("wrapper procedure"), wrap_proc2953);
                            }
                            var if_res1585 = if_res1584;
                        }
                        return if_res1585;
                    }, kws2968, new_args2975, args2969);
                    var tmp2979 = num_extra2974;
                    if (M0.equal_p(tmp2979, 0) !== false) {
                        var if_res1588 = M0.apply(M0.values, kws2968, results2971);
                    } else {
                        if (M0.equal_p(tmp2979, 1) !== false) {
                            var if_res1587 = M0.apply(M0.values, M0.car(results2971), kws2968, M0.cdr(results2971));
                        } else {
                            var loop2980 = function(results2981, c2982) {
                                if (arguments.length !== 2) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                if (M0.zero_p(c2982) !== false) {
                                    var if_res1586 = M0.cons(kws2968, results2981);
                                } else {
                                    var if_res1586 = M0.cons(M0.car(results2981), loop2980(M0.cdr(results2981), M0.sub1(c2982)));
                                }
                                return if_res1586;
                            };
                            var if_res1587 = M0.apply(M0.values, loop2980(results2971, num_extra2974));
                        }
                        var if_res1588 = if_res1587;
                    }
                    return if_res1588;
                }));
            });
            var cl1571 = $rjs_core.attachProcedureArity(function(...other29831589) {
                var other2983 = $rjs_core.Pair.listFromArray(other29831589);
                return M0.error($rjs_core.UString.make("shouldn't get here"));
            });
            var if_res1610 = $rjs_core.attachProcedureArity(function() {
                var fixed_lam1572 = {} [arguments.length];
                if (fixed_lam1572 !== undefined) {
                    return fixed_lam1572.apply(null, arguments);
                } else {
                    if (M0.__gt__eq_(cl1570.length, 1) !== false) {
                        var if_res1574 = cl1570.apply(null, arguments);
                    } else {
                        if (true !== false) {
                            var if_res1573 = cl1571.apply(null, arguments);
                        } else {
                            var if_res1573 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                        }
                        var if_res1574 = if_res1573;
                    }
                    return if_res1574;
                }
            }, [M0.make_arity_at_least(0)]);
        } else {
            var cl1590 = $rjs_core.attachProcedureArity(function(kws2984, args2985, ...rest29861595) {
                if (arguments.length < 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var rest2986 = $rjs_core.Pair.listFromArray(rest29861595);
                return M0.call_with_values(function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return M0.apply(p2966, kws2984, args2985, rest2986);
                }, $rjs_core.attachProcedureArity(function(...results29871596) {
                    var results2987 = $rjs_core.Pair.listFromArray(results29871596);
                    var len2988 = M0.length(results2987);
                    var alen2989 = M0.length(rest2986);
                    if (M0.__lt_(len2988, alen2989 + 1) !== false) {
                        var if_res1597 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword procedure chaperone"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("wrong number of results from wrapper procedure"), $rjs_core.UString.make("expected minimum number of results"), alen2989 + 1, $rjs_core.UString.make("received number of results"), len2988, $rjs_core.UString.make("wrapper procedure"), wrap_proc2953);
                    } else {
                        var if_res1597 = M0.rvoid();
                    }
                    if_res1597;
                    var num_extra2990 = len2988 - (alen2989 + 1);
                    var new_args2991 = M0.list_ref(results2987, num_extra2990);
                    if (M0.list_p(new_args2991) !== false) {
                        var if_res1598 = M0.__eq_(M0.length(new_args2991), M0.length(args2985));
                    } else {
                        var if_res1598 = false;
                    }
                    if (if_res1598 !== false) {
                        var if_res1603 = M0.rvoid();
                    } else {
                        var temp1602 = $rjs_core.PrimitiveSymbol.make("keyword procedure chaperone");
                        var temp1601 = $rjs_core.PrimitiveSymbol.make("racket/primitive");
                        var temp1600 = $rjs_core.UString.make("expected a list of keyword-argument values as first result~a from wrapper procedure");
                        if (M0.__eq_(len2988, alen2989) !== false) {
                            var if_res1599 = $rjs_core.UString.make("");
                        } else {
                            var if_res1599 = $rjs_core.UString.make(" (after the result-wrapper procedure or mark specifications)");
                        }
                        var if_res1603 = M0.__rjs_quoted__.raise_arguments_error_times_(temp1602, temp1601, M0.format(temp1600, if_res1599), $rjs_core.UString.make("first result"), new_args2991, $rjs_core.UString.make("wrapper procedure"), wrap_proc2953);
                    }
                    if_res1603;
                    M0.for_each(function(kw2992, new_arg2993, arg2994) {
                        if (arguments.length !== 3) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (is_impersonator_p2948 !== false) {
                            var if_res1605 = M0.rvoid();
                        } else {
                            if (M0.__rjs_quoted__.chaperone_of_p(new_arg2993, arg2994) !== false) {
                                var if_res1604 = M0.rvoid();
                            } else {
                                var if_res1604 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword procedure chaperone"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), M0.format($rjs_core.UString.make("~a keyword result is not a chaperone of original argument from chaperoning procedure"), kw2992), $rjs_core.UString.make("result"), new_arg2993, $rjs_core.UString.make("wrapper procedure"), wrap_proc2953);
                            }
                            var if_res1605 = if_res1604;
                        }
                        return if_res1605;
                    }, kws2984, new_args2991, args2985);
                    var tmp2995 = num_extra2990;
                    if (M0.equal_p(tmp2995, 0) !== false) {
                        var if_res1608 = M0.apply(M0.values, kws2984, results2987);
                    } else {
                        if (M0.equal_p(tmp2995, 1) !== false) {
                            var if_res1607 = M0.apply(M0.values, M0.car(results2987), kws2984, M0.cdr(results2987));
                        } else {
                            var loop2996 = function(results2997, c2998) {
                                if (arguments.length !== 2) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                if (M0.zero_p(c2998) !== false) {
                                    var if_res1606 = M0.cons(kws2984, results2997);
                                } else {
                                    var if_res1606 = M0.cons(M0.car(results2997), loop2996(M0.cdr(results2997), M0.sub1(c2998)));
                                }
                                return if_res1606;
                            };
                            var if_res1607 = M0.apply(M0.values, loop2996(results2987, num_extra2990));
                        }
                        var if_res1608 = if_res1607;
                    }
                    return if_res1608;
                }));
            });
            var cl1591 = $rjs_core.attachProcedureArity(function(...other29991609) {
                var other2999 = $rjs_core.Pair.listFromArray(other29991609);
                return M0.error($rjs_core.UString.make("shouldn't get here"));
            });
            var if_res1610 = $rjs_core.attachProcedureArity(function() {
                var fixed_lam1592 = {} [arguments.length];
                if (fixed_lam1592 !== undefined) {
                    return fixed_lam1592.apply(null, arguments);
                } else {
                    if (M0.__gt__eq_(cl1590.length, 1) !== false) {
                        var if_res1594 = cl1590.apply(null, arguments);
                    } else {
                        if (true !== false) {
                            var if_res1593 = cl1591.apply(null, arguments);
                        } else {
                            var if_res1593 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                        }
                        var if_res1594 = if_res1593;
                    }
                    return if_res1594;
                }
            }, [M0.make_arity_at_least(0)]);
        }
        var kw_chaperone2965 = if_res1610;
        var wrap3002 = function(proc3003, n_proc3004) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M0.not(M0.eq_p(n_proc3004, proc3003)) !== false) {
                var if_res1611 = new_procedure_p(proc3003);
            } else {
                var if_res1611 = false;
            }
            if (if_res1611 !== false) {
                var v3005 = new_procedure_ref(proc3003);
                if (M0.exact_integer_p(v3005) !== false) {
                    var acc3006 = procedure_accessor_ref(proc3003);
                    var if_res1639 = M0.values(M0.__rjs_quoted__.chaperone_struct(proc3003, acc3006, function(self3007, sub_proc3008) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var let_result1612 = wrap3002(sub_proc3008, normalize_proc(sub_proc3008));
                        var f3009 = let_result1612.getAt(0);
                        var acc3010 = let_result1612.getAt(1);
                        return f3009;
                    }), acc3006);
                } else {
                    if (is_impersonator_p2948 !== false) {
                        var if_res1638 = M0.__rjs_quoted__.impersonate_struct;
                    } else {
                        var if_res1638 = M0.__rjs_quoted__.chaperone_struct;
                    }
                    if (okp_p(n_proc3004) !== false) {
                        var if_res1637 = chaperone_procedure_by_add_mark2962(proc3003, wrap_proc2953);
                    } else {
                        var if_res1637 = proc3003;
                    }
                    var new_kw_proc3011 = if_res1638(if_res1637, new_procedure_ref, function(self3012, proc3013) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (is_impersonator_p2948 !== false) {
                            var if_res1636 = new_impersonate_procedure;
                        } else {
                            var if_res1636 = new_chaperone_procedure;
                        }
                        if (self_arg_p2949 !== false) {
                            var cl1613 = $rjs_core.attachProcedureArity(function(proc_self3014, kws3015, kw_args3016, self3017, ...args30181618) {
                                if (arguments.length < 4) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                var args3018 = $rjs_core.Pair.listFromArray(args30181618);
                                var len3019 = M0.length(args3018);
                                return M0.call_with_values(function() {
                                    if (arguments.length !== 0) {
                                        throw $rjs_core.racketContractError("arity mismatch");
                                    } else {}
                                    return M0.apply(kw_chaperone2965, proc_self3014, kws3015, kw_args3016, args3018);
                                }, $rjs_core.attachProcedureArity(function(...results30201619) {
                                    var results3020 = $rjs_core.Pair.listFromArray(results30201619);
                                    var r_len3021 = M0.length(results3020);
                                    var list_take3022 = function(l3023, n3024) {
                                        if (arguments.length !== 2) {
                                            throw $rjs_core.racketContractError("arity mismatch");
                                        } else {}
                                        if (M0.zero_p(n3024) !== false) {
                                            var if_res1620 = M0.rnull;
                                        } else {
                                            var if_res1620 = M0.cons(M0.car(l3023), list_take3022(M0.cdr(l3023), M0.sub1(n3024)));
                                        }
                                        return if_res1620;
                                    };
                                    if (M0.null_p($rjs_core.Pair.makeList($rjs_core.PrimitiveSymbol.make("proc-self"))) !== false) {
                                        var if_res1621 = M0.__eq_(r_len3021, 2 + len3019);
                                    } else {
                                        var if_res1621 = false;
                                    }
                                    if (if_res1621 !== false) {
                                        var if_res1622 = M0.apply(M0.values, M0.cadr(results3020), self3017, M0.cddr(results3020));
                                    } else {
                                        var skip3025 = r_len3021 - len3019;
                                        var if_res1622 = M0.apply(M0.values, M0.append(list_take3022(results3020, skip3025 - 2), M0.list(M0.list_ref(results3020, M0.sub1(skip3025)), self3017), M0.__rjs_quoted__.list_tail(results3020, skip3025)));
                                    }
                                    return if_res1622;
                                }));
                            });
                            var cl1614 = $rjs_core.attachProcedureArity(function(...args30261623) {
                                var args3026 = $rjs_core.Pair.listFromArray(args30261623);
                                return M0.rvoid();
                            });
                            var if_res1635 = $rjs_core.attachProcedureArity(function() {
                                var fixed_lam1615 = {} [arguments.length];
                                if (fixed_lam1615 !== undefined) {
                                    return fixed_lam1615.apply(null, arguments);
                                } else {
                                    if (M0.__gt__eq_(cl1613.length, 1) !== false) {
                                        var if_res1617 = cl1613.apply(null, arguments);
                                    } else {
                                        if (true !== false) {
                                            var if_res1616 = cl1614.apply(null, arguments);
                                        } else {
                                            var if_res1616 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                                        }
                                        var if_res1617 = if_res1616;
                                    }
                                    return if_res1617;
                                }
                            }, [M0.make_arity_at_least(0)]);
                        } else {
                            var cl1624 = $rjs_core.attachProcedureArity(function(kws3027, kw_args3028, self3029, ...args30301629) {
                                if (arguments.length < 3) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                var args3030 = $rjs_core.Pair.listFromArray(args30301629);
                                var len3031 = M0.length(args3030);
                                return M0.call_with_values(function() {
                                    if (arguments.length !== 0) {
                                        throw $rjs_core.racketContractError("arity mismatch");
                                    } else {}
                                    return M0.apply(kw_chaperone2965, kws3027, kw_args3028, args3030);
                                }, $rjs_core.attachProcedureArity(function(...results30321630) {
                                    var results3032 = $rjs_core.Pair.listFromArray(results30321630);
                                    var r_len3033 = M0.length(results3032);
                                    var list_take3034 = function(l3035, n3036) {
                                        if (arguments.length !== 2) {
                                            throw $rjs_core.racketContractError("arity mismatch");
                                        } else {}
                                        if (M0.zero_p(n3036) !== false) {
                                            var if_res1631 = M0.rnull;
                                        } else {
                                            var if_res1631 = M0.cons(M0.car(l3035), list_take3034(M0.cdr(l3035), M0.sub1(n3036)));
                                        }
                                        return if_res1631;
                                    };
                                    if (M0.null_p($rjs_core.Pair.EMPTY) !== false) {
                                        var if_res1632 = M0.__eq_(r_len3033, 2 + len3031);
                                    } else {
                                        var if_res1632 = false;
                                    }
                                    if (if_res1632 !== false) {
                                        var if_res1633 = M0.apply(M0.values, M0.cadr(results3032), self3029, M0.cddr(results3032));
                                    } else {
                                        var skip3037 = r_len3033 - len3031;
                                        var if_res1633 = M0.apply(M0.values, M0.append(list_take3034(results3032, skip3037 - 2), M0.list(M0.list_ref(results3032, M0.sub1(skip3037)), self3029), M0.__rjs_quoted__.list_tail(results3032, skip3037)));
                                    }
                                    return if_res1633;
                                }));
                            });
                            var cl1625 = $rjs_core.attachProcedureArity(function(...args30381634) {
                                var args3038 = $rjs_core.Pair.listFromArray(args30381634);
                                return M0.rvoid();
                            });
                            var if_res1635 = $rjs_core.attachProcedureArity(function() {
                                var fixed_lam1626 = {} [arguments.length];
                                if (fixed_lam1626 !== undefined) {
                                    return fixed_lam1626.apply(null, arguments);
                                } else {
                                    if (M0.__gt__eq_(cl1624.length, 1) !== false) {
                                        var if_res1628 = cl1624.apply(null, arguments);
                                    } else {
                                        if (true !== false) {
                                            var if_res1627 = cl1625.apply(null, arguments);
                                        } else {
                                            var if_res1627 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                                        }
                                        var if_res1628 = if_res1627;
                                    }
                                    return if_res1628;
                                }
                            }, [M0.make_arity_at_least(0)]);
                        }
                        return if_res1636(proc3013, make_keyword_procedure(if_res1635));
                    });
                    var if_res1639 = M0.values(new_kw_proc3011, new_procedure_ref);
                }
                var if_res1652 = if_res1639;
            } else {
                if (okp_p(n_proc3004) !== false) {
                    if (is_impersonator_p2948 !== false) {
                        if (okm_p(n_proc3004) !== false) {
                            var if_res1640 = make_optional_keyword_method_impersonator;
                        } else {
                            var if_res1640 = make_optional_keyword_procedure_impersonator;
                        }
                        var if_res1641 = if_res1640(keyword_procedure_checker(n_proc3004), chaperone_procedure_by_add_mark2962(keyword_procedure_proc(n_proc3004), kw_chaperone2965), keyword_procedure_required(n_proc3004), keyword_procedure_allowed(n_proc3004), chaperone_procedure_by_add_mark2962(okp_ref(n_proc3004, 0), okp_ref(n_wrap_proc2956, 0)), n_proc3004);
                    } else {
                        var if_res1641 = M0.__rjs_quoted__.chaperone_struct(proc3003, keyword_procedure_proc, function(self3039, proc3040) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return chaperone_procedure_by_add_mark2962(proc3040, kw_chaperone2965);
                        }, M0.make_struct_field_accessor(okp_ref, 0), function(self3041, proc3042) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return chaperone_procedure_by_add_mark2962(proc3042, okp_ref(n_wrap_proc2956, 0));
                        });
                    }
                    var if_res1651 = M0.values(if_res1641, keyword_procedure_proc);
                } else {
                    if (is_impersonator_p2948 !== false) {
                        var raw_name_plus_fail3043 = keyword_procedure_name_plus_fail(proc3003);
                        if (M0.vector_p(raw_name_plus_fail3043) !== false) {
                            var if_res1642 = raw_name_plus_fail3043;
                        } else {
                            var if_res1642 = raw_name_plus_fail3043(proc3003);
                        }
                        var name_plus_fail3044 = if_res1642;
                        var name3045 = M0.vector_ref(name_plus_fail3044, 0);
                        var req_kw3046 = keyword_procedure_required(proc3003);
                        if (keyword_method_p(n_proc3004) !== false) {
                            var if_res1649 = make_required_keyword_method_impersonator_by_arity_error;
                        } else {
                            var if_res1649 = make_required_keyword_procedure_impersonator_by_arity_error;
                        }
                        var temp1648 = keyword_procedure_checker(n_proc3004);
                        var temp1647 = chaperone_procedure_by_add_mark2962(keyword_procedure_proc(n_proc3004), kw_chaperone2965);
                        var temp1646 = keyword_procedure_required(n_proc3004);
                        var temp1645 = keyword_procedure_allowed(n_proc3004);
                        if (M0.vector_p(raw_name_plus_fail3043) !== false) {
                            var if_res1644 = M0.__rjs_quoted__.procedure_reduce_arity_mask($rjs_core.attachProcedureArity(function(...args30471643) {
                                var args3047 = $rjs_core.Pair.listFromArray(args30471643);
                                return raise_missing_kw(name3045, req_kw3046);
                            }), M0.arithmetic_shift(M0.procedure_arity_mask(M0.vector_ref(name_plus_fail3044, 2)), -1));
                        } else {
                            var if_res1644 = M0.vector_ref(name_plus_fail3044, 2);
                        }
                        var if_res1650 = if_res1649(temp1648, temp1647, temp1646, temp1645, n_proc3004, if_res1644, M0.vector_ref(name_plus_fail3044, 0), M0.vector_ref(name_plus_fail3044, 1));
                    } else {
                        var if_res1650 = M0.__rjs_quoted__.chaperone_struct(n_proc3004, keyword_procedure_proc, function(self3048, proc3049) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return chaperone_procedure_by_add_mark2962(proc3049, kw_chaperone2965);
                        });
                    }
                    var if_res1651 = M0.values(if_res1650, keyword_procedure_proc);
                }
                var if_res1652 = if_res1651;
            }
            return if_res1652;
        };
        var let_result1653 = wrap3002(proc2952, n_proc2955);
        var new_proc3000 = let_result1653.getAt(0);
        var chap_accessor3001 = let_result1653.getAt(1);
        if (M0.null_p(props2954) !== false) {
            var if_res1654 = new_proc3000;
        } else {
            var if_res1654 = M0.apply(M0.__rjs_quoted__.chaperone_struct, new_proc3000, chap_accessor3001, false, props2954);
        }
        var if_res1655 = if_res1654;
    }
    return if_res1655;
};
var do_unsafe_chaperone_procedure = function(unsafe_chaperone_procedure3050, name3051, proc3052, wrap_proc3053, props3054) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n_proc3055 = normalize_proc(proc3052);
    var n_wrap_proc3056 = normalize_proc(wrap_proc3053);
    var or_part3057 = M0.not(keyword_procedure_p(n_proc3055));
    if (or_part3057 !== false) {
        var if_res1657 = or_part3057;
    } else {
        var or_part3058 = M0.not(M0.procedure_p(wrap_proc3053));
        if (or_part3058 !== false) {
            var if_res1656 = or_part3058;
        } else {
            var if_res1656 = bad_props_p(props3054);
        }
        var if_res1657 = if_res1656;
    }
    if (if_res1657 !== false) {
        var if_res1658 = M0.apply(unsafe_chaperone_procedure3050, proc3052, wrap_proc3053, props3054);
    } else {
        chaperone_arity_match_checking(false, name3051, proc3052, wrap_proc3053, props3054);
        var if_res1658 = M0.apply(unsafe_chaperone_procedure3050, proc3052, wrap_proc3053, props3054);
    }
    return if_res1658;
};
var bad_props_p = function(props3059) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop3060 = function(props3061) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.null_p(props3061) !== false) {
            var if_res1661 = false;
        } else {
            if (M0.__rjs_quoted__.impersonator_property_p(M0.car(props3061)) !== false) {
                var props3062 = M0.cdr(props3061);
                var or_part3063 = M0.null_p(props3062);
                if (or_part3063 !== false) {
                    var if_res1659 = or_part3063;
                } else {
                    var if_res1659 = loop3060(M0.cdr(props3062));
                }
                var if_res1660 = if_res1659;
            } else {
                var if_res1660 = true;
            }
            var if_res1661 = if_res1660;
        }
        return if_res1661;
    };
    return loop3060(props3059);
};
var chaperone_arity_match_checking = function(self_arg_p3064, name3065, proc3066, wrap_proc3067, props3068) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var a3069 = M0.procedure_arity(proc3066);
    var b3070 = M0.procedure_arity(wrap_proc3067);
    if (self_arg_p3064 !== false) {
        var if_res1662 = 1;
    } else {
        var if_res1662 = 0;
    }
    var d3071 = if_res1662;
    var let_result1663 = procedure_keywords(proc3066);
    var a_req3072 = let_result1663.getAt(0);
    var a_allow3073 = let_result1663.getAt(1);
    var let_result1664 = procedure_keywords(wrap_proc3067);
    var b_req3074 = let_result1664.getAt(0);
    var b_allow3075 = let_result1664.getAt(1);
    var includes_p3076 = function(a3077, b3078) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.number_p(b3078) !== false) {
            if (M0.number_p(a3077) !== false) {
                var if_res1666 = M0.__eq_(b3078, a3077 + d3071);
            } else {
                if (M0.arity_at_least_p(a3077) !== false) {
                    var if_res1665 = M0.__gt__eq_(b3078, M0.arity_at_least_value(a3077) + d3071);
                } else {
                    var if_res1665 = M0.ormap(function(a3079) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return includes_p3076(a3079, b3078);
                    }, a3077);
                }
                var if_res1666 = if_res1665;
            }
            var if_res1670 = if_res1666;
        } else {
            if (M0.arity_at_least_p(b3078) !== false) {
                if (M0.number_p(a3077) !== false) {
                    var if_res1668 = false;
                } else {
                    if (M0.arity_at_least_p(a3077) !== false) {
                        var if_res1667 = M0.__gt__eq_(M0.arity_at_least_value(b3078), M0.arity_at_least_value(a3077) + d3071);
                    } else {
                        var if_res1667 = M0.ormap(function(a3080) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return includes_p3076(b3078, a3080);
                        }, a3077);
                    }
                    var if_res1668 = if_res1667;
                }
                var if_res1669 = if_res1668;
            } else {
                var if_res1669 = M0.andmap(function(b3081) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return includes_p3076(a3077, b3081);
                }, b3078);
            }
            var if_res1670 = if_res1669;
        }
        return if_res1670;
    };
    if (includes_p3076(b3070, a3069) !== false) {
        var if_res1671 = M0.rvoid();
    } else {
        var if_res1671 = M0.apply(M0.__rjs_quoted__.chaperone_procedure, proc3066, wrap_proc3067, props3068);
    }
    if_res1671;
    if (subset_p(b_req3074, a_req3072) !== false) {
        var if_res1672 = M0.rvoid();
    } else {
        var if_res1672 = M0.__rjs_quoted__.raise_arguments_error_times_(name3065, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("wrapper procedure requires more keywords than original procedure"), $rjs_core.UString.make("wrapper procedure"), wrap_proc3067, $rjs_core.UString.make("original procedure"), proc3066);
    }
    if_res1672;
    var or_part3082 = M0.not(b_allow3075);
    if (or_part3082 !== false) {
        var if_res1674 = or_part3082;
    } else {
        if (a_allow3073 !== false) {
            var if_res1673 = subset_p(a_allow3073, b_allow3075);
        } else {
            var if_res1673 = false;
        }
        var if_res1674 = if_res1673;
    }
    if (if_res1674 !== false) {
        var if_res1675 = M0.rvoid();
    } else {
        var if_res1675 = M0.__rjs_quoted__.raise_arguments_error_times_(name3065, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("wrapper procedure does not accept all keywords of original procedure"), $rjs_core.UString.make("wrapper procedure"), wrap_proc3067, $rjs_core.UString.make("original procedure"), proc3066);
    }
    if_res1675;
    return M0.rvoid();
};
var normalize_proc = function(proc3083) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_procedure_p(proc3083) !== false) {
        var if_res1683 = proc3083;
    } else {
        if (new_procedure_p(proc3083) !== false) {
            var let_result1676 = procedure_keywords(proc3083);
            var req_kws3084 = let_result1676.getAt(0);
            var allowed_kws3085 = let_result1676.getAt(1);
            if (M0.null_p(allowed_kws3085) !== false) {
                var if_res1681 = proc3083;
            } else {
                var if_res1681 = make_optional_keyword_procedure(function(given_kws3086, given_argc3087) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M0.procedure_arity_includes_p(proc3083, given_argc3087 - 2, true) !== false) {
                        var or_part3088 = M0.not(allowed_kws3085);
                        if (or_part3088 !== false) {
                            var if_res1678 = or_part3088;
                        } else {
                            var if_res1678 = subset_p(given_kws3086, allowed_kws3085);
                        }
                        if (if_res1678 !== false) {
                            var if_res1679 = subset_p(req_kws3084, given_kws3086);
                        } else {
                            var if_res1679 = false;
                        }
                        var if_res1680 = if_res1679;
                    } else {
                        var if_res1680 = false;
                    }
                    return if_res1680;
                }, $rjs_core.attachProcedureArity(function(kws3089, kw_args3090, ...vals30911677) {
                    if (arguments.length < 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var vals3091 = $rjs_core.Pair.listFromArray(vals30911677);
                    return keyword_apply(proc3083, kws3089, kw_args3090, vals3091);
                }), req_kws3084, allowed_kws3085, proc3083);
            }
            var if_res1682 = if_res1681;
        } else {
            var if_res1682 = proc3083;
        }
        var if_res1683 = if_res1682;
    }
    return if_res1683;
};
var __rjs_quoted__ = {};
__rjs_quoted__.make_optional_keyword_method = make_optional_keyword_method;
__rjs_quoted__.struct_keyword_procedure_by_arity_error = struct_keyword_procedure_by_arity_error;
__rjs_quoted__.prop_named_keyword_procedure = prop_named_keyword_procedure;
__rjs_quoted__.make_optional_keyword_procedure = make_optional_keyword_procedure;
__rjs_quoted__.struct_keyword_procedure = struct_keyword_procedure;
__rjs_quoted__.struct_keyword_method_by_arity_error = struct_keyword_method_by_arity_error;
__rjs_quoted__.subset_p = subset_p;
__rjs_quoted__.missing_kw = missing_kw;
__rjs_quoted__.subsets_p = subsets_p;
__rjs_quoted__.keyword_procedure_extract = keyword_procedure_extract;
export {
    __rjs_quoted__,
    new_impersonate_procedure_times_,
    new_chaperone_procedure_times_,
    new_unsafe_impersonate_procedure,
    new_impersonate_procedure,
    new_unsafe_chaperone_procedure,
    new_chaperone_procedure,
    new_procedure_realm,
    new_procedure_rename,
    new_procedure__gt_method,
    new_prop_procedure,
    procedure_reduce_keyword_arity_mask,
    procedure_reduce_keyword_arity,
    new_procedure_reduce_arity_mask,
    new_procedure_reduce_arity,
    procedure_keywords,
    keyword_apply,
    make_keyword_procedure
};