import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "./kw.rkt.js";
import * as M1 from "../../../runtime/kernel.rkt.js";
import * as M2 from "./pre-base.rkt.js";
import * as M3 from "./map.rkt.js";
import * as M4 from "./sort.rkt.js";
import * as M5 from "../../../runtime/unsafe.rkt.js";
import * as M6 from "./reverse.rkt.js";
var sort = function(cache_keys_p22311, key12312, lst52313, less_p62314) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var lst2315 = lst52313;
    var less_p2316 = less_p62314;
    if (false !== false) {
        var if_res1068 = false;
    } else {
        var if_res1068 = key12312;
    }
    var getkey2317 = if_res1068;
    if (false !== false) {
        var if_res1069 = false;
    } else {
        var if_res1069 = cache_keys_p22311;
    }
    var cache_keys_p2318 = if_res1069;
    if (M1.list_p(lst2315) !== false) {
        var if_res1070 = M1.rvoid();
    } else {
        var if_res1070 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("sort"), $rjs_core.UString.make("list?"), lst2315);
    }
    if_res1070;
    if (M1.procedure_p(less_p2316) !== false) {
        var if_res1071 = M1.procedure_arity_includes_p(less_p2316, 2);
    } else {
        var if_res1071 = false;
    }
    if (if_res1071 !== false) {
        var if_res1072 = M1.rvoid();
    } else {
        var if_res1072 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("sort"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), less_p2316);
    }
    if_res1072;
    if (getkey2317 !== false) {
        if (M1.procedure_p(getkey2317) !== false) {
            var if_res1073 = M1.procedure_arity_includes_p(getkey2317, 1);
        } else {
            var if_res1073 = false;
        }
        var if_res1074 = M1.not(if_res1073);
    } else {
        var if_res1074 = false;
    }
    if (if_res1074 !== false) {
        var if_res1075 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("sort"), $rjs_core.UString.make("(any/c . -> . any/c)"), getkey2317);
    } else {
        var if_res1075 = M1.rvoid();
    }
    if_res1075;
    if (getkey2317 !== false) {
        var if_res1076 = M4.sort(lst2315, less_p2316, getkey2317, cache_keys_p2318);
    } else {
        var if_res1076 = M4.sort(lst2315, less_p2316);
    }
    return if_res1076;
};
var sort2310 = function(given_kws2319, given_args2320, lst52321, less_p62322) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.pair_p(given_kws2319) !== false) {
        var if_res1077 = M1.eq_p($rjs_core.Keyword.make("cache-keys?"), M1.car(given_kws2319));
    } else {
        var if_res1077 = false;
    }
    var cache_keys_p42323 = if_res1077;
    if (cache_keys_p42323 !== false) {
        var if_res1078 = M1.car(given_args2320);
    } else {
        var if_res1078 = false;
    }
    var cache_keys_p22324 = if_res1078;
    if (cache_keys_p42323 !== false) {
        var if_res1079 = M1.cdr(given_kws2319);
    } else {
        var if_res1079 = given_kws2319;
    }
    var kws1407202325 = if_res1079;
    if (cache_keys_p42323 !== false) {
        var if_res1080 = M1.cdr(given_args2320);
    } else {
        var if_res1080 = given_args2320;
    }
    var kw_args1407212326 = if_res1080;
    var key32327 = M1.pair_p(kws1407202325);
    if (key32327 !== false) {
        var if_res1081 = M1.car(kw_args1407212326);
    } else {
        var if_res1081 = false;
    }
    var key12328 = if_res1081;
    return sort(cache_keys_p22324, key12328, lst52321, less_p62322);
};
var cl1085 = function(given_kws2335, given_args2336, lst2337, less_p2338) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return sort2310(given_kws2335, given_args2336, lst2337, less_p2338);
};
var temp1087 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1086 = {
        '4': cl1085
    } [arguments.length];
    if (fixed_lam1086 !== undefined) {
        return fixed_lam1086.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4]);
var temp1084 = $rjs_core.Pair.makeList($rjs_core.Keyword.make("cache-keys?"), $rjs_core.Keyword.make("key"));
var cl1082 = function(lst2339, less_p2340) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return sort2310(M1.rnull, M1.rnull, lst2339, less_p2340);
};
var sort7 = M0.__rjs_quoted__.make_optional_keyword_procedure(function(given_kws2329, given_argc2330) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.__eq_(given_argc2330, 4) !== false) {
        var l11407222331 = given_kws2329;
        if (M1.null_p(l11407222331) !== false) {
            var if_res1089 = l11407222331;
        } else {
            if (M1.eq_p(M1.car(l11407222331), $rjs_core.Keyword.make("cache-keys?")) !== false) {
                var if_res1088 = M1.cdr(l11407222331);
            } else {
                var if_res1088 = l11407222331;
            }
            var if_res1089 = if_res1088;
        }
        var l11407222332 = if_res1089;
        var l11407232333 = l11407222332;
        if (M1.null_p(l11407232333) !== false) {
            var if_res1091 = l11407232333;
        } else {
            if (M1.eq_p(M1.car(l11407232333), $rjs_core.Keyword.make("key")) !== false) {
                var if_res1090 = M1.cdr(l11407232333);
            } else {
                var if_res1090 = l11407232333;
            }
            var if_res1091 = if_res1090;
        }
        var l11407232334 = if_res1091;
        var if_res1092 = M1.null_p(l11407232334);
    } else {
        var if_res1092 = false;
    }
    return if_res1092;
}, temp1087, M1.rnull, temp1084, $rjs_core.attachProcedureArity(function() {
    var fixed_lam1083 = {
        '2': cl1082
    } [arguments.length];
    if (fixed_lam1083 !== undefined) {
        return fixed_lam1083.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2]));
var do_remove = function(who2341, item2342, list2343, equal_p2344) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.list_p(list2343) !== false) {
        var if_res1093 = M1.rvoid();
    } else {
        var if_res1093 = M1.raise_argument_error(who2341, $rjs_core.UString.make("list?"), list2343);
    }
    if_res1093;
    var loop2345 = function(list2346) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(list2346) !== false) {
            var if_res1096 = list2346;
        } else {
            if (equal_p2344(item2342, M1.car(list2346)) !== false) {
                var if_res1095 = M1.cdr(list2346);
            } else {
                var next2347 = loop2345(M1.cdr(list2346));
                if (M1.eq_p(next2347, M1.cdr(list2346)) !== false) {
                    var if_res1094 = list2346;
                } else {
                    var if_res1094 = M1.cons(M1.car(list2346), next2347);
                }
                var if_res1095 = if_res1094;
            }
            var if_res1096 = if_res1095;
        }
        return if_res1096;
    };
    return loop2345(list2343);
};
var cl1097 = function(item2348, list2349) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove($rjs_core.PrimitiveSymbol.make("remove"), item2348, list2349, M1.equal_p);
};
var cl1098 = function(item2350, list2351, equal_p2352) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(equal_p2352) !== false) {
        var if_res1100 = M1.procedure_arity_includes_p(equal_p2352, 2);
    } else {
        var if_res1100 = false;
    }
    if (if_res1100 !== false) {
        var if_res1101 = M1.rvoid();
    } else {
        var if_res1101 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("remove"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), equal_p2352);
    }
    if_res1101;
    return do_remove($rjs_core.PrimitiveSymbol.make("remove"), item2350, list2351, equal_p2352);
};
var remove = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1099 = {
        '2': cl1097,
        '3': cl1098
    } [arguments.length];
    if (fixed_lam1099 !== undefined) {
        return fixed_lam1099.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var remq = function(item2353, list2354) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove($rjs_core.PrimitiveSymbol.make("remq"), item2353, list2354, M1.eq_p);
};
var remv = function(item2355, list2356) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove($rjs_core.PrimitiveSymbol.make("remv"), item2355, list2356, M1.eqv_p);
};
var remw = function(item2357, list2358) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove($rjs_core.PrimitiveSymbol.make("remw"), item2357, list2358, M1.equal_always_p);
};
var do_remove_times_ = function(who2359, l2360, r2361, equal_p2362) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.list_p(l2360) !== false) {
        var if_res1102 = M1.rvoid();
    } else {
        var if_res1102 = M1.raise_argument_error(who2359, $rjs_core.UString.make("list?"), l2360);
    }
    if_res1102;
    if (M1.list_p(r2361) !== false) {
        var if_res1103 = M1.rvoid();
    } else {
        var if_res1103 = M1.raise_argument_error(who2359, $rjs_core.UString.make("list?"), r2361);
    }
    if_res1103;
    var rloop2363 = function(r2364) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(r2364) !== false) {
            var if_res1107 = r2364;
        } else {
            var first_r2365 = M1.car(r2364);
            var loop2366 = function(l_rest2367) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(l_rest2367) !== false) {
                    var next2368 = rloop2363(M1.cdr(r2364));
                    if (M1.eq_p(next2368, M1.cdr(r2364)) !== false) {
                        var if_res1104 = r2364;
                    } else {
                        var if_res1104 = M1.cons(first_r2365, next2368);
                    }
                    var if_res1106 = if_res1104;
                } else {
                    if (equal_p2362(M1.car(l_rest2367), first_r2365) !== false) {
                        var if_res1105 = rloop2363(M1.cdr(r2364));
                    } else {
                        var if_res1105 = loop2366(M1.cdr(l_rest2367));
                    }
                    var if_res1106 = if_res1105;
                }
                return if_res1106;
            };
            var if_res1107 = loop2366(l2360);
        }
        return if_res1107;
    };
    return rloop2363(r2361);
};
var cl1108 = function(l2369, r2370) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remove*"), l2369, r2370, M1.equal_p);
};
var cl1109 = function(l2371, r2372, equal_p2373) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(equal_p2373) !== false) {
        var if_res1111 = M1.procedure_arity_includes_p(equal_p2373, 2);
    } else {
        var if_res1111 = false;
    }
    if (if_res1111 !== false) {
        var if_res1112 = M1.rvoid();
    } else {
        var if_res1112 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("remove*"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), equal_p2373);
    }
    if_res1112;
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remove*"), l2371, r2372, equal_p2373);
};
var remove_times_ = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1110 = {
        '2': cl1108,
        '3': cl1109
    } [arguments.length];
    if (fixed_lam1110 !== undefined) {
        return fixed_lam1110.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var remq_times_ = function(l2374, r2375) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remq*"), l2374, r2375, M1.eq_p);
};
var remv_times_ = function(l2376, r2377) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remv*"), l2376, r2377, M1.eqv_p);
};
var remw_times_ = function(l2378, r2379) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remw*"), l2378, r2379, M1.equal_always_p);
};
var memf = function(f2380, list2381) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2380) !== false) {
        var if_res1113 = M1.procedure_arity_includes_p(f2380, 1);
    } else {
        var if_res1113 = false;
    }
    if (if_res1113 !== false) {
        var if_res1114 = M1.rvoid();
    } else {
        var if_res1114 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("memf"), $rjs_core.UString.make("(any/c . -> any/c)"), f2380);
    }
    if_res1114;
    var loop2382 = function(l2383) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l2383) !== false) {
            var if_res1117 = false;
        } else {
            if (M1.not(M1.pair_p(l2383)) !== false) {
                var if_res1116 = M1.raise_mismatch_error($rjs_core.PrimitiveSymbol.make("memf"), $rjs_core.UString.make("not a proper list: "), list2381);
            } else {
                if (f2380(M1.car(l2383)) !== false) {
                    var if_res1115 = l2383;
                } else {
                    var if_res1115 = loop2382(M1.cdr(l2383));
                }
                var if_res1116 = if_res1115;
            }
            var if_res1117 = if_res1116;
        }
        return if_res1117;
    };
    return loop2382(list2381);
};
var findf = function(f2384, list2385) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2384) !== false) {
        var if_res1118 = M1.procedure_arity_includes_p(f2384, 1);
    } else {
        var if_res1118 = false;
    }
    if (if_res1118 !== false) {
        var if_res1119 = M1.rvoid();
    } else {
        var if_res1119 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("findf"), $rjs_core.UString.make("(any/c . -> . any/c)"), f2384);
    }
    if_res1119;
    var loop2386 = function(l2387) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l2387) !== false) {
            var if_res1122 = false;
        } else {
            if (M1.not(M1.pair_p(l2387)) !== false) {
                var if_res1121 = M1.raise_mismatch_error($rjs_core.PrimitiveSymbol.make("findf"), $rjs_core.UString.make("not a proper list: "), list2385);
            } else {
                var a2388 = M1.car(l2387);
                if (f2384(a2388) !== false) {
                    var if_res1120 = a2388;
                } else {
                    var if_res1120 = loop2386(M1.cdr(l2387));
                }
                var if_res1121 = if_res1120;
            }
            var if_res1122 = if_res1121;
        }
        return if_res1122;
    };
    return loop2386(list2385);
};
var bad_list = function(who2389, orig_l2390) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.raise_mismatch_error(who2389, $rjs_core.UString.make("not a proper list: "), orig_l2390);
};
var bad_item = function(who2391, a2392, orig_l2393) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.raise_arguments_error(who2391, $rjs_core.UString.make("non-pair found in list"), $rjs_core.UString.make("non-pair"), a2392, $rjs_core.UString.make("list"), orig_l2393);
};
var assq2394 = function(x2399, l2400) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2401 = function(l2402, t2403) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l2402) !== false) {
            var a2404 = M5.unsafe_car(l2402);
            if (M1.pair_p(a2404) !== false) {
                if (M1.eq_p(x2399, M5.unsafe_car(a2404)) !== false) {
                    var if_res1128 = a2404;
                } else {
                    var l2405 = M5.unsafe_cdr(l2402);
                    if (M1.pair_p(l2405) !== false) {
                        var a2406 = M5.unsafe_car(l2405);
                        if (M1.pair_p(a2406) !== false) {
                            if (M1.eq_p(x2399, M5.unsafe_car(a2406)) !== false) {
                                var if_res1124 = a2406;
                            } else {
                                var t2407 = M5.unsafe_cdr(t2403);
                                var l2408 = M5.unsafe_cdr(l2405);
                                if (M1.eq_p(l2408, t2407) !== false) {
                                    var if_res1123 = bad_list($rjs_core.PrimitiveSymbol.make("assq"), l2400);
                                } else {
                                    var if_res1123 = loop2401(l2408, t2407);
                                }
                                var if_res1124 = if_res1123;
                            }
                            var if_res1125 = if_res1124;
                        } else {
                            var if_res1125 = bad_item($rjs_core.PrimitiveSymbol.make("assq"), a2406, l2400);
                        }
                        var if_res1127 = if_res1125;
                    } else {
                        if (M1.null_p(l2405) !== false) {
                            var if_res1126 = false;
                        } else {
                            var if_res1126 = bad_list($rjs_core.PrimitiveSymbol.make("assq"), l2400);
                        }
                        var if_res1127 = if_res1126;
                    }
                    var if_res1128 = if_res1127;
                }
                var if_res1129 = if_res1128;
            } else {
                var if_res1129 = bad_item($rjs_core.PrimitiveSymbol.make("assq"), a2404, l2400);
            }
            var if_res1131 = if_res1129;
        } else {
            if (M1.null_p(l2402) !== false) {
                var if_res1130 = false;
            } else {
                var if_res1130 = bad_list($rjs_core.PrimitiveSymbol.make("assq"), l2400);
            }
            var if_res1131 = if_res1130;
        }
        return if_res1131;
    };
    return loop2401(l2400, l2400);
};
var assv2395 = function(x2409, l2410) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2411 = function(l2412, t2413) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l2412) !== false) {
            var a2414 = M5.unsafe_car(l2412);
            if (M1.pair_p(a2414) !== false) {
                if (M1.eqv_p(x2409, M5.unsafe_car(a2414)) !== false) {
                    var if_res1137 = a2414;
                } else {
                    var l2415 = M5.unsafe_cdr(l2412);
                    if (M1.pair_p(l2415) !== false) {
                        var a2416 = M5.unsafe_car(l2415);
                        if (M1.pair_p(a2416) !== false) {
                            if (M1.eqv_p(x2409, M5.unsafe_car(a2416)) !== false) {
                                var if_res1133 = a2416;
                            } else {
                                var t2417 = M5.unsafe_cdr(t2413);
                                var l2418 = M5.unsafe_cdr(l2415);
                                if (M1.eq_p(l2418, t2417) !== false) {
                                    var if_res1132 = bad_list($rjs_core.PrimitiveSymbol.make("assv"), l2410);
                                } else {
                                    var if_res1132 = loop2411(l2418, t2417);
                                }
                                var if_res1133 = if_res1132;
                            }
                            var if_res1134 = if_res1133;
                        } else {
                            var if_res1134 = bad_item($rjs_core.PrimitiveSymbol.make("assv"), a2416, l2410);
                        }
                        var if_res1136 = if_res1134;
                    } else {
                        if (M1.null_p(l2415) !== false) {
                            var if_res1135 = false;
                        } else {
                            var if_res1135 = bad_list($rjs_core.PrimitiveSymbol.make("assv"), l2410);
                        }
                        var if_res1136 = if_res1135;
                    }
                    var if_res1137 = if_res1136;
                }
                var if_res1138 = if_res1137;
            } else {
                var if_res1138 = bad_item($rjs_core.PrimitiveSymbol.make("assv"), a2414, l2410);
            }
            var if_res1140 = if_res1138;
        } else {
            if (M1.null_p(l2412) !== false) {
                var if_res1139 = false;
            } else {
                var if_res1139 = bad_list($rjs_core.PrimitiveSymbol.make("assv"), l2410);
            }
            var if_res1140 = if_res1139;
        }
        return if_res1140;
    };
    return loop2411(l2410, l2410);
};
var assw2396 = function(x2419, l2420) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2421 = function(l2422, t2423) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l2422) !== false) {
            var a2424 = M5.unsafe_car(l2422);
            if (M1.pair_p(a2424) !== false) {
                if (M1.equal_always_p(x2419, M5.unsafe_car(a2424)) !== false) {
                    var if_res1146 = a2424;
                } else {
                    var l2425 = M5.unsafe_cdr(l2422);
                    if (M1.pair_p(l2425) !== false) {
                        var a2426 = M5.unsafe_car(l2425);
                        if (M1.pair_p(a2426) !== false) {
                            if (M1.equal_always_p(x2419, M5.unsafe_car(a2426)) !== false) {
                                var if_res1142 = a2426;
                            } else {
                                var t2427 = M5.unsafe_cdr(t2423);
                                var l2428 = M5.unsafe_cdr(l2425);
                                if (M1.eq_p(l2428, t2427) !== false) {
                                    var if_res1141 = bad_list($rjs_core.PrimitiveSymbol.make("assw"), l2420);
                                } else {
                                    var if_res1141 = loop2421(l2428, t2427);
                                }
                                var if_res1142 = if_res1141;
                            }
                            var if_res1143 = if_res1142;
                        } else {
                            var if_res1143 = bad_item($rjs_core.PrimitiveSymbol.make("assw"), a2426, l2420);
                        }
                        var if_res1145 = if_res1143;
                    } else {
                        if (M1.null_p(l2425) !== false) {
                            var if_res1144 = false;
                        } else {
                            var if_res1144 = bad_list($rjs_core.PrimitiveSymbol.make("assw"), l2420);
                        }
                        var if_res1145 = if_res1144;
                    }
                    var if_res1146 = if_res1145;
                }
                var if_res1147 = if_res1146;
            } else {
                var if_res1147 = bad_item($rjs_core.PrimitiveSymbol.make("assw"), a2424, l2420);
            }
            var if_res1149 = if_res1147;
        } else {
            if (M1.null_p(l2422) !== false) {
                var if_res1148 = false;
            } else {
                var if_res1148 = bad_list($rjs_core.PrimitiveSymbol.make("assw"), l2420);
            }
            var if_res1149 = if_res1148;
        }
        return if_res1149;
    };
    return loop2421(l2420, l2420);
};
var cl1150 = function(x2429, l2430) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2431 = function(l2432, t2433) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l2432) !== false) {
            var a2434 = M5.unsafe_car(l2432);
            if (M1.pair_p(a2434) !== false) {
                if (M1.equal_p(x2429, M5.unsafe_car(a2434)) !== false) {
                    var if_res1158 = a2434;
                } else {
                    var l2435 = M5.unsafe_cdr(l2432);
                    if (M1.pair_p(l2435) !== false) {
                        var a2436 = M5.unsafe_car(l2435);
                        if (M1.pair_p(a2436) !== false) {
                            if (M1.equal_p(x2429, M5.unsafe_car(a2436)) !== false) {
                                var if_res1154 = a2436;
                            } else {
                                var t2437 = M5.unsafe_cdr(t2433);
                                var l2438 = M5.unsafe_cdr(l2435);
                                if (M1.eq_p(l2438, t2437) !== false) {
                                    var if_res1153 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l2430);
                                } else {
                                    var if_res1153 = loop2431(l2438, t2437);
                                }
                                var if_res1154 = if_res1153;
                            }
                            var if_res1155 = if_res1154;
                        } else {
                            var if_res1155 = bad_item($rjs_core.PrimitiveSymbol.make("assoc"), a2436, l2430);
                        }
                        var if_res1157 = if_res1155;
                    } else {
                        if (M1.null_p(l2435) !== false) {
                            var if_res1156 = false;
                        } else {
                            var if_res1156 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l2430);
                        }
                        var if_res1157 = if_res1156;
                    }
                    var if_res1158 = if_res1157;
                }
                var if_res1159 = if_res1158;
            } else {
                var if_res1159 = bad_item($rjs_core.PrimitiveSymbol.make("assoc"), a2434, l2430);
            }
            var if_res1161 = if_res1159;
        } else {
            if (M1.null_p(l2432) !== false) {
                var if_res1160 = false;
            } else {
                var if_res1160 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l2430);
            }
            var if_res1161 = if_res1160;
        }
        return if_res1161;
    };
    return loop2431(l2430, l2430);
};
var cl1151 = function(x2439, l2440, is_equal_p2441) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(is_equal_p2441) !== false) {
        var if_res1162 = M1.procedure_arity_includes_p(is_equal_p2441, 2);
    } else {
        var if_res1162 = false;
    }
    if (if_res1162 !== false) {
        var if_res1163 = M1.rvoid();
    } else {
        var if_res1163 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("assoc"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), is_equal_p2441);
    }
    if_res1163;
    var loop2442 = function(l2443, t2444) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l2443) !== false) {
            var a2445 = M5.unsafe_car(l2443);
            if (M1.pair_p(a2445) !== false) {
                if (is_equal_p2441(x2439, M5.unsafe_car(a2445)) !== false) {
                    var if_res1169 = a2445;
                } else {
                    var l2446 = M5.unsafe_cdr(l2443);
                    if (M1.pair_p(l2446) !== false) {
                        var a2447 = M5.unsafe_car(l2446);
                        if (M1.pair_p(a2447) !== false) {
                            if (is_equal_p2441(x2439, M5.unsafe_car(a2447)) !== false) {
                                var if_res1165 = a2447;
                            } else {
                                var t2448 = M5.unsafe_cdr(t2444);
                                var l2449 = M5.unsafe_cdr(l2446);
                                if (M1.eq_p(l2449, t2448) !== false) {
                                    var if_res1164 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l2440);
                                } else {
                                    var if_res1164 = loop2442(l2449, t2448);
                                }
                                var if_res1165 = if_res1164;
                            }
                            var if_res1166 = if_res1165;
                        } else {
                            var if_res1166 = bad_item($rjs_core.PrimitiveSymbol.make("assoc"), a2447, l2440);
                        }
                        var if_res1168 = if_res1166;
                    } else {
                        if (M1.null_p(l2446) !== false) {
                            var if_res1167 = false;
                        } else {
                            var if_res1167 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l2440);
                        }
                        var if_res1168 = if_res1167;
                    }
                    var if_res1169 = if_res1168;
                }
                var if_res1170 = if_res1169;
            } else {
                var if_res1170 = bad_item($rjs_core.PrimitiveSymbol.make("assoc"), a2445, l2440);
            }
            var if_res1172 = if_res1170;
        } else {
            if (M1.null_p(l2443) !== false) {
                var if_res1171 = false;
            } else {
                var if_res1171 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l2440);
            }
            var if_res1172 = if_res1171;
        }
        return if_res1172;
    };
    return loop2442(l2440, l2440);
};
var assoc2397 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1152 = {
        '2': cl1150,
        '3': cl1151
    } [arguments.length];
    if (fixed_lam1152 !== undefined) {
        return fixed_lam1152.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var assf2398 = function(f2450, l2451) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2450) !== false) {
        var if_res1173 = M1.procedure_arity_includes_p(f2450, 1);
    } else {
        var if_res1173 = false;
    }
    if (if_res1173 !== false) {
        var if_res1174 = M1.rvoid();
    } else {
        var if_res1174 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("assf"), $rjs_core.UString.make("(any/c . -> . any/c)"), f2450);
    }
    if_res1174;
    var loop2452 = function(l2453, t2454) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l2453) !== false) {
            var a2455 = M5.unsafe_car(l2453);
            if (M1.pair_p(a2455) !== false) {
                if ((function(_2456, a2457) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return f2450(a2457);
                    })(false, M5.unsafe_car(a2455)) !== false) {
                    var if_res1180 = a2455;
                } else {
                    var l2458 = M5.unsafe_cdr(l2453);
                    if (M1.pair_p(l2458) !== false) {
                        var a2459 = M5.unsafe_car(l2458);
                        if (M1.pair_p(a2459) !== false) {
                            if ((function(_2460, a2461) {
                                    if (arguments.length !== 2) {
                                        throw $rjs_core.racketContractError("arity mismatch");
                                    } else {}
                                    return f2450(a2461);
                                })(false, M5.unsafe_car(a2459)) !== false) {
                                var if_res1176 = a2459;
                            } else {
                                var t2462 = M5.unsafe_cdr(t2454);
                                var l2463 = M5.unsafe_cdr(l2458);
                                if (M1.eq_p(l2463, t2462) !== false) {
                                    var if_res1175 = bad_list($rjs_core.PrimitiveSymbol.make("assf"), l2451);
                                } else {
                                    var if_res1175 = loop2452(l2463, t2462);
                                }
                                var if_res1176 = if_res1175;
                            }
                            var if_res1177 = if_res1176;
                        } else {
                            var if_res1177 = bad_item($rjs_core.PrimitiveSymbol.make("assf"), a2459, l2451);
                        }
                        var if_res1179 = if_res1177;
                    } else {
                        if (M1.null_p(l2458) !== false) {
                            var if_res1178 = false;
                        } else {
                            var if_res1178 = bad_list($rjs_core.PrimitiveSymbol.make("assf"), l2451);
                        }
                        var if_res1179 = if_res1178;
                    }
                    var if_res1180 = if_res1179;
                }
                var if_res1181 = if_res1180;
            } else {
                var if_res1181 = bad_item($rjs_core.PrimitiveSymbol.make("assf"), a2455, l2451);
            }
            var if_res1183 = if_res1181;
        } else {
            if (M1.null_p(l2453) !== false) {
                var if_res1182 = false;
            } else {
                var if_res1182 = bad_list($rjs_core.PrimitiveSymbol.make("assf"), l2451);
            }
            var if_res1183 = if_res1182;
        }
        return if_res1183;
    };
    return loop2452(l2451, l2451);
};
var let_result1184 = M1.values(assq2394, assv2395, assw2396, assoc2397, assf2398);
var assq = let_result1184.getAt(0);
var assv = let_result1184.getAt(1);
var assw = let_result1184.getAt(2);
var assoc = let_result1184.getAt(3);
var assf = let_result1184.getAt(4);
var mapadd = function(f2464, l2465, last2466) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2467 = function(l2468) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l2468) !== false) {
            var if_res1185 = M1.list(last2466);
        } else {
            var if_res1185 = M1.cons(f2464(M1.car(l2468)), loop2467(M1.cdr(l2468)));
        }
        return if_res1185;
    };
    return loop2467(l2465);
};
var check_fold = function(name2469, proc2470, init2471, l2472, more2473) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(proc2470) !== false) {
        var if_res1186 = M1.rvoid();
    } else {
        var if_res1186 = M1.apply(M1.raise_argument_error, name2469, $rjs_core.UString.make("procedure?"), 0, proc2470, init2471, l2472, more2473);
    }
    if_res1186;
    if (M1.list_p(l2472) !== false) {
        var if_res1187 = M1.rvoid();
    } else {
        var if_res1187 = M1.apply(M1.raise_argument_error, name2469, $rjs_core.UString.make("list?"), 2, proc2470, init2471, l2472, more2473);
    }
    if_res1187;
    if (M1.null_p(more2473) !== false) {
        if (M1.procedure_arity_includes_p(proc2470, 2) !== false) {
            var if_res1188 = M1.rvoid();
        } else {
            var if_res1188 = M1.raise_mismatch_error(name2469, $rjs_core.UString.make("given procedure does not accept 2 arguments: "), proc2470);
        }
        var if_res1193 = if_res1188;
    } else {
        var len2474 = M1.length(l2472);
        var loop2475 = function(remaining2476, n2477) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(remaining2476) !== false) {
                var if_res1191 = M1.rvoid();
            } else {
                if (M1.list_p(M1.car(remaining2476)) !== false) {
                    var if_res1189 = M1.rvoid();
                } else {
                    var if_res1189 = M1.apply(M1.raise_argument_error, name2469, $rjs_core.UString.make("list?"), n2477, proc2470, init2471, l2472, more2473);
                }
                if_res1189;
                if (M1.__eq_(len2474, M1.length(M1.car(remaining2476))) !== false) {
                    var if_res1190 = M1.rvoid();
                } else {
                    var if_res1190 = M1.raise_mismatch_error(name2469, $rjs_core.UString.make("given list does not have the same size as the first list: "), M1.car(remaining2476));
                }
                if_res1190;
                var if_res1191 = loop2475(M1.cdr(remaining2476), M1.add1(n2477));
            }
            return if_res1191;
        };
        loop2475(more2473, 3);
        if (M1.procedure_arity_includes_p(proc2470, 2 + M1.length(more2473)) !== false) {
            var if_res1192 = M1.rvoid();
        } else {
            var if_res1192 = M1.raise_mismatch_error(name2469, M1.format($rjs_core.UString.make("given procedure does not accept ~a arguments: "), 2 + M1.length(more2473)), proc2470);
        }
        var if_res1193 = if_res1192;
    }
    return if_res1193;
};
var cl1194 = function(f2478, init2479, l2480) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    check_fold($rjs_core.PrimitiveSymbol.make("foldl"), f2478, init2479, l2480, M1.rnull);
    var loop2481 = function(init2482, l2483) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l2483) !== false) {
            var if_res1198 = init2482;
        } else {
            var if_res1198 = loop2481(f2478(M1.car(l2483), init2482), M1.cdr(l2483));
        }
        return if_res1198;
    };
    return loop2481(init2479, l2480);
};
var cl1195 = $rjs_core.attachProcedureArity(function(f2484, init2485, l2486, ...ls24871199) {
    if (arguments.length < 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var ls2487 = $rjs_core.Pair.listFromArray(ls24871199);
    check_fold($rjs_core.PrimitiveSymbol.make("foldl"), f2484, init2485, l2486, ls2487);
    var loop2488 = function(init2489, ls2490) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(M1.car(ls2490)) !== false) {
            var if_res1200 = loop2488(M1.apply(f2484, mapadd(M1.car, ls2490, init2489)), M3.map(M1.cdr, ls2490));
        } else {
            var if_res1200 = init2489;
        }
        return if_res1200;
    };
    return loop2488(init2485, M1.cons(l2486, ls2487));
});
var foldl = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1196 = {
        '3': cl1194
    } [arguments.length];
    if (fixed_lam1196 !== undefined) {
        return fixed_lam1196.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1195.length, 1) !== false) {
            var if_res1197 = cl1195.apply(null, arguments);
        } else {
            var if_res1197 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1197;
    }
}, [M1.make_arity_at_least(3)]);
var cl1201 = function(f2491, init2492, l2493) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    check_fold($rjs_core.PrimitiveSymbol.make("foldr"), f2491, init2492, l2493, M1.rnull);
    var loop2494 = function(init2495, l2496) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l2496) !== false) {
            var if_res1205 = init2495;
        } else {
            var if_res1205 = f2491(M1.car(l2496), loop2494(init2495, M1.cdr(l2496)));
        }
        return if_res1205;
    };
    return loop2494(init2492, l2493);
};
var cl1202 = $rjs_core.attachProcedureArity(function(f2497, init2498, l2499, ...ls25001206) {
    if (arguments.length < 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var ls2500 = $rjs_core.Pair.listFromArray(ls25001206);
    check_fold($rjs_core.PrimitiveSymbol.make("foldr"), f2497, init2498, l2499, ls2500);
    var loop2501 = function(ls2502) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(M1.car(ls2502)) !== false) {
            var if_res1207 = M1.apply(f2497, mapadd(M1.car, ls2502, loop2501(M3.map(M1.cdr, ls2502))));
        } else {
            var if_res1207 = init2498;
        }
        return if_res1207;
    };
    return loop2501(M1.cons(l2499, ls2500));
});
var foldr = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1203 = {
        '3': cl1201
    } [arguments.length];
    if (fixed_lam1203 !== undefined) {
        return fixed_lam1203.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1202.length, 1) !== false) {
            var if_res1204 = cl1202.apply(null, arguments);
        } else {
            var if_res1204 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1204;
    }
}, [M1.make_arity_at_least(3)]);
var filter = function(f2503, list2504) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2503) !== false) {
        var if_res1208 = M1.procedure_arity_includes_p(f2503, 1);
    } else {
        var if_res1208 = false;
    }
    if (if_res1208 !== false) {
        var if_res1209 = M1.rvoid();
    } else {
        var if_res1209 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("filter"), $rjs_core.UString.make("(any/c . -> . any/c)"), f2503);
    }
    if_res1209;
    if (M1.list_p(list2504) !== false) {
        var if_res1210 = M1.rvoid();
    } else {
        var if_res1210 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("filter"), $rjs_core.UString.make("list?"), list2504);
    }
    if_res1210;
    var loop2505 = function(l2506, result2507) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l2506) !== false) {
            var if_res1213 = M6.alt_reverse(result2507);
        } else {
            var temp1212 = M1.cdr(l2506);
            if (f2503(M1.car(l2506)) !== false) {
                var if_res1211 = M1.cons(M1.car(l2506), result2507);
            } else {
                var if_res1211 = result2507;
            }
            var if_res1213 = loop2505(temp1212, if_res1211);
        }
        return if_res1213;
    };
    return loop2505(list2504, M1.rnull);
};
var build_vector = function(n2508, fcn2509) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.exact_nonnegative_integer_p(n2508) !== false) {
        var if_res1214 = M1.rvoid();
    } else {
        var if_res1214 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-vector"), $rjs_core.UString.make("exact-nonnegative-integer?"), n2508);
    }
    if_res1214;
    if (M1.procedure_p(fcn2509) !== false) {
        var if_res1215 = M1.procedure_arity_includes_p(fcn2509, 1);
    } else {
        var if_res1215 = false;
    }
    if (if_res1215 !== false) {
        var if_res1216 = M1.rvoid();
    } else {
        var if_res1216 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-vector"), $rjs_core.UString.make("(exact-nonnegative-integer? . -> . any/c)"), fcn2509);
    }
    if_res1216;
    var vec2510 = M1.make_vector(n2508);
    var loop2511 = function(i2512) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.__eq_(i2512, n2508) !== false) {
            var if_res1217 = vec2510;
        } else {
            M1.vector_set_bang_(vec2510, i2512, fcn2509(i2512));
            var if_res1217 = loop2511(M1.add1(i2512));
        }
        return if_res1217;
    };
    return loop2511(0);
};
var build_string = function(n2513, fcn2514) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.exact_nonnegative_integer_p(n2513) !== false) {
        var if_res1218 = M1.rvoid();
    } else {
        var if_res1218 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-string"), $rjs_core.UString.make("exact-nonnegative-integer?"), n2513);
    }
    if_res1218;
    if (M1.procedure_p(fcn2514) !== false) {
        var if_res1219 = M1.procedure_arity_includes_p(fcn2514, 1);
    } else {
        var if_res1219 = false;
    }
    if (if_res1219 !== false) {
        var if_res1220 = M1.rvoid();
    } else {
        var if_res1220 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-string"), $rjs_core.UString.make("(exact-nonnegative-integer? . -> . char?)"), fcn2514);
    }
    if_res1220;
    var str2515 = M1.make_string(n2513);
    var loop2516 = function(i2517) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.__eq_(i2517, n2513) !== false) {
            var if_res1221 = str2515;
        } else {
            M1.string_set_bang_(str2515, i2517, fcn2514(i2517));
            var if_res1221 = loop2516(M1.add1(i2517));
        }
        return if_res1221;
    };
    return loop2516(0);
};
var build_list = function(n2518, fcn2519) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.exact_nonnegative_integer_p(n2518) !== false) {
        var if_res1222 = M1.rvoid();
    } else {
        var if_res1222 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-list"), $rjs_core.UString.make("exact-nonnegative-integer?"), n2518);
    }
    if_res1222;
    if (M1.procedure_p(fcn2519) !== false) {
        var if_res1223 = M1.procedure_arity_includes_p(fcn2519, 1);
    } else {
        var if_res1223 = false;
    }
    if (if_res1223 !== false) {
        var if_res1224 = M1.rvoid();
    } else {
        var if_res1224 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-list"), $rjs_core.UString.make("(exact-nonnegative-integer? . -> . any/c)"), fcn2519);
    }
    if_res1224;
    var recr2520 = function(j2521, i2522) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.zero_p(i2522) !== false) {
            var if_res1225 = M1.rnull;
        } else {
            var if_res1225 = M1.cons(fcn2519(j2521), recr2520(M1.add1(j2521), M1.sub1(i2522)));
        }
        return if_res1225;
    };
    return recr2520(0, n2518);
};
var id_p2523 = function(f2524) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.eq_p(M1.values, f2524);
};
var pipeline12525 = function(f2526, rfuns2527) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var composed2528 = function(x2529) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var loop2530 = function(x2531, f2532, rfuns2533) {
            if (arguments.length !== 3) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(rfuns2533) !== false) {
                var if_res1226 = f2532(x2531);
            } else {
                var if_res1226 = loop2530(f2532(x2531), M1.car(rfuns2533), M1.cdr(rfuns2533));
            }
            return if_res1226;
        };
        return loop2530(x2529, f2526, rfuns2527);
    };
    return composed2528;
};
var pipeline_times_2534 = function(f2535, rfuns2536) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.eqv_p(2, M1.procedure_arity_mask(f2535)) !== false) {
        var loop2537 = function(f2538, rfuns2539) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(rfuns2539) !== false) {
                var if_res1228 = f2538;
            } else {
                var fst2540 = M1.car(rfuns2539);
                if (M1.eqv_p(2, M1.procedure_arity_mask(fst2540)) !== false) {
                    var if_res1227 = function(x2541) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return fst2540(f2538(x2541));
                    };
                } else {
                    var if_res1227 = function(x2542) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return M1.call_with_values(function() {
                            if (arguments.length !== 0) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f2538(x2542);
                        }, fst2540);
                    };
                }
                var if_res1228 = loop2537(if_res1227, M1.cdr(rfuns2539));
            }
            return if_res1228;
        };
        var if_res1235 = loop2537(f2535, rfuns2536);
    } else {
        var funs2543 = M6.alt_reverse(M1.cons(f2535, rfuns2536));
        var loop2544 = function(f2545, funs2546) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(funs2546) !== false) {
                var if_res1234 = f2545;
            } else {
                var fst2547 = M1.car(funs2546);
                if (M1.eqv_p(2, M1.procedure_arity_mask(f2545)) !== false) {
                    if (M1.eqv_p(2, M1.procedure_arity_mask(fst2547)) !== false) {
                        var if_res1230 = function(x2548) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f2545(fst2547(x2548));
                        };
                    } else {
                        var if_res1230 = $rjs_core.attachProcedureArity(function(...xs25491229) {
                            var xs2549 = $rjs_core.Pair.listFromArray(xs25491229);
                            return f2545(M1.apply(fst2547, xs2549));
                        });
                    }
                    var if_res1233 = if_res1230;
                } else {
                    if (M1.eqv_p(2, M1.procedure_arity_mask(fst2547)) !== false) {
                        var if_res1232 = function(x2550) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return fst2547(x2550);
                            }, f2545);
                        };
                    } else {
                        var if_res1232 = $rjs_core.attachProcedureArity(function(...xs25511231) {
                            var xs2551 = $rjs_core.Pair.listFromArray(xs25511231);
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return M1.apply(fst2547, xs2551);
                            }, f2545);
                        });
                    }
                    var if_res1233 = if_res1232;
                }
                var if_res1234 = loop2544(if_res1233, M1.cdr(funs2546));
            }
            return if_res1234;
        };
        var if_res1235 = loop2544(M1.car(funs2543), M1.cdr(funs2543));
    }
    return if_res1235;
};
var simple_compose2553 = function(f2554, g2555) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var arity_mask2556 = M1.procedure_arity_mask(g2555);
    var let_result1236 = M0.procedure_keywords(g2555);
    var required_kwds2557 = let_result1236.getAt(0);
    var allowed_kwds2558 = let_result1236.getAt(1);
    var tmp2560 = arity_mask2556;
    if (M1.equal_p(tmp2560, 1) !== false) {
        var if_res1246 = function() {
            if (arguments.length !== 0) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return f2554(g2555());
        };
    } else {
        if (M1.equal_p(tmp2560, 2) !== false) {
            var if_res1245 = function(x2561) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return f2554(g2555(x2561));
            };
        } else {
            if (M1.equal_p(tmp2560, 4) !== false) {
                var if_res1244 = function(x2562, y2563) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return f2554(g2555(x2562, y2563));
                };
            } else {
                var cl1237 = function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return f2554(g2555());
                };
                var cl1238 = function(x2564) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return f2554(g2555(x2564));
                };
                var cl1239 = function(x2565, y2566) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return f2554(g2555(x2565, y2566));
                };
                var cl1240 = $rjs_core.attachProcedureArity(function(...args25671243) {
                    var args2567 = $rjs_core.Pair.listFromArray(args25671243);
                    return f2554(M1.apply(g2555, args2567));
                });
                var if_res1244 = $rjs_core.attachProcedureArity(function() {
                    var fixed_lam1241 = {
                        '0': cl1237,
                        '1': cl1238,
                        '2': cl1239
                    } [arguments.length];
                    if (fixed_lam1241 !== undefined) {
                        return fixed_lam1241.apply(null, arguments);
                    } else {
                        if (true !== false) {
                            var if_res1242 = cl1240.apply(null, arguments);
                        } else {
                            var if_res1242 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
                        }
                        return if_res1242;
                    }
                }, [M1.make_arity_at_least(0)]);
            }
            var if_res1245 = if_res1244;
        }
        var if_res1246 = if_res1245;
    }
    var composed2559 = if_res1246;
    if (M1.null_p(allowed_kwds2558) !== false) {
        if (M1.eqv_p(arity_mask2556, M1.procedure_arity_mask(composed2559)) !== false) {
            var if_res1247 = composed2559;
        } else {
            var if_res1247 = M0.new_procedure_reduce_arity_mask(composed2559, arity_mask2556);
        }
        var if_res1249 = if_res1247;
    } else {
        var if_res1249 = M0.procedure_reduce_keyword_arity_mask(M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws2568, kw_args2569, ...xs25701248) {
            if (arguments.length < 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            var xs2570 = $rjs_core.Pair.listFromArray(xs25701248);
            return f2554(M2.keyword_apply(g2555, kws2568, kw_args2569, xs2570));
        }), composed2559), arity_mask2556, required_kwds2557, allowed_kwds2558, $rjs_core.PrimitiveSymbol.make("composed"), $rjs_core.PrimitiveSymbol.make("racket"));
    }
    return if_res1249;
};
var cl1250 = function(f2571) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2571) !== false) {
        var if_res1256 = f2571;
    } else {
        var if_res1256 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure?"), 0, f2571);
    }
    return if_res1256;
};
var cl1251 = function(f2572, g2573) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2572) !== false) {
        var if_res1257 = M1.rvoid();
    } else {
        var if_res1257 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure?"), 0, f2572, g2573);
    }
    if_res1257;
    if (M1.procedure_p(g2573) !== false) {
        var if_res1258 = M1.rvoid();
    } else {
        var if_res1258 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure?"), 1, f2572, g2573);
    }
    if_res1258;
    if (M1.procedure_arity_includes_p(f2572, 1) !== false) {
        var if_res1259 = M1.rvoid();
    } else {
        var if_res1259 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("(any/c . -> . any/c)"), 0, f2572, $rjs_core.Pair.EMPTY);
    }
    if_res1259;
    var let_result1260 = M0.procedure_keywords(f2572);
    var req2574 = let_result1260.getAt(0);
    var _2575 = let_result1260.getAt(1);
    if (M1.null_p(req2574) !== false) {
        var if_res1261 = M1.rvoid();
    } else {
        var if_res1261 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure-with-no-required-keywords?"), 0, f2572, $rjs_core.Pair.EMPTY);
    }
    if_res1261;
    return simple_compose2553(f2572, g2573);
};
var cl1252 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.values;
};
var cl1253 = $rjs_core.attachProcedureArity(function(f02576, ...fs025771262) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var fs02577 = $rjs_core.Pair.listFromArray(fs025771262);
    var loop2578 = function(g2579, fs2580, i2581, rfuns2582) {
        if (arguments.length !== 4) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.procedure_p(g2579) !== false) {
            var if_res1263 = M1.rvoid();
        } else {
            var if_res1263 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure?"), i2581, f02576, fs02577);
        }
        if_res1263;
        if (M1.pair_p(fs2580) !== false) {
            if (M1.procedure_arity_includes_p(g2579, 1) !== false) {
                var if_res1264 = M1.rvoid();
            } else {
                var if_res1264 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("(any/c . -> . any/c)"), i2581, f02576, fs02577);
            }
            if_res1264;
            var let_result1265 = M0.procedure_keywords(g2579);
            var req2583 = let_result1265.getAt(0);
            var _2584 = let_result1265.getAt(1);
            if (M1.null_p(req2583) !== false) {
                var if_res1266 = M1.rvoid();
            } else {
                var if_res1266 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure-with-no-required-keywords?"), i2581, f02576, fs02577);
            }
            if_res1266;
            var if_res1268 = loop2578(M1.car(fs2580), M1.cdr(fs2580), M1.add1(i2581), M1.cons(g2579, rfuns2582));
        } else {
            var rfuns2585 = remq_times_(M1.list(M1.values), rfuns2582);
            if (M1.null_p(rfuns2585) !== false) {
                var if_res1267 = M1.values;
            } else {
                var if_res1267 = pipeline12525(M1.car(rfuns2585), M1.cdr(rfuns2585));
            }
            var f2586 = if_res1267;
            var if_res1268 = simple_compose2553(f2586, g2579);
        }
        return if_res1268;
    };
    return loop2578(f02576, fs02577, 0, $rjs_core.Pair.EMPTY);
});
var compose12552 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1254 = {
        '1': cl1250,
        '2': cl1251,
        '0': cl1252
    } [arguments.length];
    if (fixed_lam1254 !== undefined) {
        return fixed_lam1254.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1253.length, 1) !== false) {
            var if_res1255 = cl1253.apply(null, arguments);
        } else {
            var if_res1255 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1255;
    }
}, [0, M1.make_arity_at_least(1)]);
var simple_compose2588 = function(f2589, g2590) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (id_p2523(f2589) !== false) {
        var if_res1298 = g2590;
    } else {
        if (M1.eqv_p(2, M1.procedure_arity_mask(f2589)) !== false) {
            var arity_mask2591 = M1.procedure_arity_mask(g2590);
            var let_result1269 = M0.procedure_keywords(g2590);
            var required_kwds2592 = let_result1269.getAt(0);
            var allowed_kwds2593 = let_result1269.getAt(1);
            var tmp2595 = arity_mask2591;
            if (M1.equal_p(tmp2595, 1) !== false) {
                var if_res1279 = function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return f2589(g2590());
                };
            } else {
                if (M1.equal_p(tmp2595, 2) !== false) {
                    var if_res1278 = function(x2596) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return f2589(g2590(x2596));
                    };
                } else {
                    if (M1.equal_p(tmp2595, 4) !== false) {
                        var if_res1277 = function(x2597, y2598) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f2589(g2590(x2597, y2598));
                        };
                    } else {
                        var cl1270 = function() {
                            if (arguments.length !== 0) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f2589(g2590());
                        };
                        var cl1271 = function(x2599) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f2589(g2590(x2599));
                        };
                        var cl1272 = function(x2600, y2601) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f2589(g2590(x2600, y2601));
                        };
                        var cl1273 = $rjs_core.attachProcedureArity(function(...args26021276) {
                            var args2602 = $rjs_core.Pair.listFromArray(args26021276);
                            return f2589(M1.apply(g2590, args2602));
                        });
                        var if_res1277 = $rjs_core.attachProcedureArity(function() {
                            var fixed_lam1274 = {
                                '0': cl1270,
                                '1': cl1271,
                                '2': cl1272
                            } [arguments.length];
                            if (fixed_lam1274 !== undefined) {
                                return fixed_lam1274.apply(null, arguments);
                            } else {
                                if (true !== false) {
                                    var if_res1275 = cl1273.apply(null, arguments);
                                } else {
                                    var if_res1275 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
                                }
                                return if_res1275;
                            }
                        }, [M1.make_arity_at_least(0)]);
                    }
                    var if_res1278 = if_res1277;
                }
                var if_res1279 = if_res1278;
            }
            var composed2594 = if_res1279;
            if (M1.null_p(allowed_kwds2593) !== false) {
                if (M1.eqv_p(arity_mask2591, M1.procedure_arity_mask(composed2594)) !== false) {
                    var if_res1280 = composed2594;
                } else {
                    var if_res1280 = M0.new_procedure_reduce_arity_mask(composed2594, arity_mask2591);
                }
                var if_res1282 = if_res1280;
            } else {
                var if_res1282 = M0.procedure_reduce_keyword_arity_mask(M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws2603, kw_args2604, ...xs26051281) {
                    if (arguments.length < 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var xs2605 = $rjs_core.Pair.listFromArray(xs26051281);
                    return f2589(M2.keyword_apply(g2590, kws2603, kw_args2604, xs2605));
                }), composed2594), arity_mask2591, required_kwds2592, allowed_kwds2593, $rjs_core.PrimitiveSymbol.make("composed"), $rjs_core.PrimitiveSymbol.make("racket"));
            }
            var if_res1297 = if_res1282;
        } else {
            var arity_mask2606 = M1.procedure_arity_mask(g2590);
            var let_result1283 = M0.procedure_keywords(g2590);
            var required_kwds2607 = let_result1283.getAt(0);
            var allowed_kwds2608 = let_result1283.getAt(1);
            var tmp2610 = arity_mask2606;
            if (M1.equal_p(tmp2610, 1) !== false) {
                var if_res1293 = function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return M1.call_with_values(function() {
                        if (arguments.length !== 0) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return g2590();
                    }, f2589);
                };
            } else {
                if (M1.equal_p(tmp2610, 2) !== false) {
                    var if_res1292 = function(x2611) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return M1.call_with_values(function() {
                            if (arguments.length !== 0) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return g2590(x2611);
                        }, f2589);
                    };
                } else {
                    if (M1.equal_p(tmp2610, 4) !== false) {
                        var if_res1291 = function(x2612, y2613) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return g2590(x2612, y2613);
                            }, f2589);
                        };
                    } else {
                        var cl1284 = function() {
                            if (arguments.length !== 0) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return g2590();
                            }, f2589);
                        };
                        var cl1285 = function(x2614) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return g2590(x2614);
                            }, f2589);
                        };
                        var cl1286 = function(x2615, y2616) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return g2590(x2615, y2616);
                            }, f2589);
                        };
                        var cl1287 = $rjs_core.attachProcedureArity(function(...args26171290) {
                            var args2617 = $rjs_core.Pair.listFromArray(args26171290);
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return M1.apply(g2590, args2617);
                            }, f2589);
                        });
                        var if_res1291 = $rjs_core.attachProcedureArity(function() {
                            var fixed_lam1288 = {
                                '0': cl1284,
                                '1': cl1285,
                                '2': cl1286
                            } [arguments.length];
                            if (fixed_lam1288 !== undefined) {
                                return fixed_lam1288.apply(null, arguments);
                            } else {
                                if (true !== false) {
                                    var if_res1289 = cl1287.apply(null, arguments);
                                } else {
                                    var if_res1289 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
                                }
                                return if_res1289;
                            }
                        }, [M1.make_arity_at_least(0)]);
                    }
                    var if_res1292 = if_res1291;
                }
                var if_res1293 = if_res1292;
            }
            var composed2609 = if_res1293;
            if (M1.null_p(allowed_kwds2608) !== false) {
                if (M1.eqv_p(arity_mask2606, M1.procedure_arity_mask(composed2609)) !== false) {
                    var if_res1294 = composed2609;
                } else {
                    var if_res1294 = M0.new_procedure_reduce_arity_mask(composed2609, arity_mask2606);
                }
                var if_res1296 = if_res1294;
            } else {
                var if_res1296 = M0.procedure_reduce_keyword_arity_mask(M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws2618, kw_args2619, ...xs26201295) {
                    if (arguments.length < 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var xs2620 = $rjs_core.Pair.listFromArray(xs26201295);
                    return M1.call_with_values(function() {
                        if (arguments.length !== 0) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return M2.keyword_apply(g2590, kws2618, kw_args2619, xs2620);
                    }, f2589);
                }), composed2609), arity_mask2606, required_kwds2607, allowed_kwds2608, $rjs_core.PrimitiveSymbol.make("composed"), $rjs_core.PrimitiveSymbol.make("racket"));
            }
            var if_res1297 = if_res1296;
        }
        var if_res1298 = if_res1297;
    }
    return if_res1298;
};
var cl1299 = function(f2621) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2621) !== false) {
        var if_res1305 = f2621;
    } else {
        var if_res1305 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure?"), 0, f2621);
    }
    return if_res1305;
};
var cl1300 = function(f2622, g2623) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2622) !== false) {
        var if_res1306 = M1.rvoid();
    } else {
        var if_res1306 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure?"), 0, f2622, g2623);
    }
    if_res1306;
    if (M1.procedure_p(g2623) !== false) {
        var if_res1307 = M1.rvoid();
    } else {
        var if_res1307 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure?"), 1, f2622, g2623);
    }
    if_res1307;
    var let_result1308 = M0.procedure_keywords(f2622);
    var req2624 = let_result1308.getAt(0);
    var _2625 = let_result1308.getAt(1);
    if (M1.null_p(req2624) !== false) {
        var if_res1309 = M1.rvoid();
    } else {
        var if_res1309 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure-with-no-required-keywords?"), 0, f2622, $rjs_core.Pair.EMPTY);
    }
    if_res1309;
    return simple_compose2588(f2622, g2623);
};
var cl1301 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.values;
};
var cl1302 = $rjs_core.attachProcedureArity(function(f02626, ...fs026271310) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var fs02627 = $rjs_core.Pair.listFromArray(fs026271310);
    var loop2628 = function(g2629, fs2630, i2631, rfuns2632) {
        if (arguments.length !== 4) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.procedure_p(g2629) !== false) {
            var if_res1311 = M1.rvoid();
        } else {
            var if_res1311 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure?"), i2631, f02626, fs02627);
        }
        if_res1311;
        if (M1.pair_p(fs2630) !== false) {
            var let_result1312 = M0.procedure_keywords(g2629);
            var req2633 = let_result1312.getAt(0);
            var _2634 = let_result1312.getAt(1);
            if (M1.null_p(req2633) !== false) {
                var if_res1313 = M1.rvoid();
            } else {
                var if_res1313 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure-with-no-required-keywords?"), i2631, f02626, fs02627);
            }
            if_res1313;
            var if_res1315 = loop2628(M1.car(fs2630), M1.cdr(fs2630), M1.add1(i2631), M1.cons(g2629, rfuns2632));
        } else {
            var rfuns2635 = remq_times_(M1.list(M1.values), rfuns2632);
            if (M1.null_p(rfuns2635) !== false) {
                var if_res1314 = M1.values;
            } else {
                var if_res1314 = pipeline_times_2534(M1.car(rfuns2635), M1.cdr(rfuns2635));
            }
            var f2636 = if_res1314;
            var if_res1315 = simple_compose2588(f2636, g2629);
        }
        return if_res1315;
    };
    return loop2628(f02626, fs02627, 0, $rjs_core.Pair.EMPTY);
});
var compose2587 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1303 = {
        '1': cl1299,
        '2': cl1300,
        '0': cl1301
    } [arguments.length];
    if (fixed_lam1303 !== undefined) {
        return fixed_lam1303.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1302.length, 1) !== false) {
            var if_res1304 = cl1302.apply(null, arguments);
        } else {
            var if_res1304 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1304;
    }
}, [0, M1.make_arity_at_least(1)]);
var let_result1316 = M1.values(compose12552, compose2587);
var compose1 = let_result1316.getAt(0);
var compose = let_result1316.getAt(1);
var __rjs_quoted__ = {};
__rjs_quoted__.sort = sort;
__rjs_quoted__.sort7 = sort7;
export {
    __rjs_quoted__,
    compose1,
    compose,
    build_list,
    build_string,
    build_vector,
    sort,
    filter,
    assoc,
    assw,
    assv,
    assq,
    findf,
    assf,
    memf,
    remove_times_,
    remq_times_,
    remw_times_,
    remv_times_,
    remove,
    remw,
    remq,
    remv,
    foldr,
    foldl
};