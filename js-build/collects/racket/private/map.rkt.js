import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "./kw.rkt.js";
import * as M1 from "../../../runtime/kernel.rkt.js";
var cl954 = function(f2201, l2202) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res961 = true;
    } else {
        if (M1.procedure_p(f2201) !== false) {
            if (M1.procedure_arity_includes_p(f2201, 1) !== false) {
                var if_res959 = M1.list_p(l2202);
            } else {
                var if_res959 = false;
            }
            var if_res960 = if_res959;
        } else {
            var if_res960 = false;
        }
        var if_res961 = if_res960;
    }
    if (if_res961 !== false) {
        var loop2203 = function(l2204) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(l2204) !== false) {
                var if_res962 = M1.rnull;
            } else {
                var r2205 = M1.cdr(l2204);
                var if_res962 = M1.cons(f2201(M1.car(l2204)), loop2203(r2205));
            }
            return if_res962;
        };
        var if_res963 = loop2203(l2202);
    } else {
        var if_res963 = gen_map(f2201, M1.list(l2202));
    }
    return if_res963;
};
var cl955 = function(f2206, l12207, l22208) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res968 = true;
    } else {
        if (M1.procedure_p(f2206) !== false) {
            if (M1.procedure_arity_includes_p(f2206, 2) !== false) {
                if (M1.list_p(l12207) !== false) {
                    if (M1.list_p(l22208) !== false) {
                        var if_res964 = M1.__eq_(M1.length(l12207), M1.length(l22208));
                    } else {
                        var if_res964 = false;
                    }
                    var if_res965 = if_res964;
                } else {
                    var if_res965 = false;
                }
                var if_res966 = if_res965;
            } else {
                var if_res966 = false;
            }
            var if_res967 = if_res966;
        } else {
            var if_res967 = false;
        }
        var if_res968 = if_res967;
    }
    if (if_res968 !== false) {
        var loop2209 = function(l12210, l22211) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(l12210) !== false) {
                var if_res969 = M1.rnull;
            } else {
                var r12212 = M1.cdr(l12210);
                var r22213 = M1.cdr(l22211);
                var if_res969 = M1.cons(f2206(M1.car(l12210), M1.car(l22211)), loop2209(r12212, r22213));
            }
            return if_res969;
        };
        var if_res970 = loop2209(l12207, l22208);
    } else {
        var if_res970 = gen_map(f2206, M1.list(l12207, l22208));
    }
    return if_res970;
};
var cl956 = $rjs_core.attachProcedureArity(function(f2214, l2215, ...args2216971) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2216 = $rjs_core.Pair.listFromArray(args2216971);
    return gen_map(f2214, M1.cons(l2215, args2216));
});
var map2200 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam957 = {
        '2': cl954,
        '3': cl955
    } [arguments.length];
    if (fixed_lam957 !== undefined) {
        return fixed_lam957.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl956.length, 1) !== false) {
            var if_res958 = cl956.apply(null, arguments);
        } else {
            var if_res958 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res958;
    }
}, [M1.make_arity_at_least(2)]);
var map2 = map2200;
var cl972 = function(f2218, l2219) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res979 = true;
    } else {
        if (M1.procedure_p(f2218) !== false) {
            if (M1.procedure_arity_includes_p(f2218, 1) !== false) {
                var if_res977 = M1.list_p(l2219);
            } else {
                var if_res977 = false;
            }
            var if_res978 = if_res977;
        } else {
            var if_res978 = false;
        }
        var if_res979 = if_res978;
    }
    if (if_res979 !== false) {
        var loop2220 = function(l2221) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(l2221) !== false) {
                var if_res980 = M1.rvoid();
            } else {
                var r2222 = M1.cdr(l2221);
                f2218(M1.car(l2221));
                var if_res980 = loop2220(r2222);
            }
            return if_res980;
        };
        var if_res981 = loop2220(l2219);
    } else {
        var if_res981 = gen_for_each(f2218, M1.list(l2219));
    }
    return if_res981;
};
var cl973 = function(f2223, l12224, l22225) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res986 = true;
    } else {
        if (M1.procedure_p(f2223) !== false) {
            if (M1.procedure_arity_includes_p(f2223, 2) !== false) {
                if (M1.list_p(l12224) !== false) {
                    if (M1.list_p(l22225) !== false) {
                        var if_res982 = M1.__eq_(M1.length(l12224), M1.length(l22225));
                    } else {
                        var if_res982 = false;
                    }
                    var if_res983 = if_res982;
                } else {
                    var if_res983 = false;
                }
                var if_res984 = if_res983;
            } else {
                var if_res984 = false;
            }
            var if_res985 = if_res984;
        } else {
            var if_res985 = false;
        }
        var if_res986 = if_res985;
    }
    if (if_res986 !== false) {
        var loop2226 = function(l12227, l22228) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(l12227) !== false) {
                var if_res987 = M1.rvoid();
            } else {
                var r12229 = M1.cdr(l12227);
                var r22230 = M1.cdr(l22228);
                f2223(M1.car(l12227), M1.car(l22228));
                var if_res987 = loop2226(r12229, r22230);
            }
            return if_res987;
        };
        var if_res988 = loop2226(l12224, l22225);
    } else {
        var if_res988 = gen_for_each(f2223, M1.list(l12224, l22225));
    }
    return if_res988;
};
var cl974 = $rjs_core.attachProcedureArity(function(f2231, l2232, ...args2233989) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2233 = $rjs_core.Pair.listFromArray(args2233989);
    return gen_for_each(f2231, M1.cons(l2232, args2233));
});
var for_each2217 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam975 = {
        '2': cl972,
        '3': cl973
    } [arguments.length];
    if (fixed_lam975 !== undefined) {
        return fixed_lam975.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl974.length, 1) !== false) {
            var if_res976 = cl974.apply(null, arguments);
        } else {
            var if_res976 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res976;
    }
}, [M1.make_arity_at_least(2)]);
var for_each2 = for_each2217;
var cl990 = function(f2235, l2236) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res997 = true;
    } else {
        if (M1.procedure_p(f2235) !== false) {
            if (M1.procedure_arity_includes_p(f2235, 1) !== false) {
                var if_res995 = M1.list_p(l2236);
            } else {
                var if_res995 = false;
            }
            var if_res996 = if_res995;
        } else {
            var if_res996 = false;
        }
        var if_res997 = if_res996;
    }
    if (if_res997 !== false) {
        if (M1.null_p(l2236) !== false) {
            var if_res1000 = true;
        } else {
            var loop2237 = function(l2238) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(M1.cdr(l2238)) !== false) {
                    var if_res999 = f2235(M1.car(l2238));
                } else {
                    var r2239 = M1.cdr(l2238);
                    if (f2235(M1.car(l2238)) !== false) {
                        var if_res998 = loop2237(r2239);
                    } else {
                        var if_res998 = false;
                    }
                    var if_res999 = if_res998;
                }
                return if_res999;
            };
            var if_res1000 = loop2237(l2236);
        }
        var if_res1001 = if_res1000;
    } else {
        var if_res1001 = gen_andmap(f2235, M1.list(l2236));
    }
    return if_res1001;
};
var cl991 = function(f2240, l12241, l22242) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1006 = true;
    } else {
        if (M1.procedure_p(f2240) !== false) {
            if (M1.procedure_arity_includes_p(f2240, 2) !== false) {
                if (M1.list_p(l12241) !== false) {
                    if (M1.list_p(l22242) !== false) {
                        var if_res1002 = M1.__eq_(M1.length(l12241), M1.length(l22242));
                    } else {
                        var if_res1002 = false;
                    }
                    var if_res1003 = if_res1002;
                } else {
                    var if_res1003 = false;
                }
                var if_res1004 = if_res1003;
            } else {
                var if_res1004 = false;
            }
            var if_res1005 = if_res1004;
        } else {
            var if_res1005 = false;
        }
        var if_res1006 = if_res1005;
    }
    if (if_res1006 !== false) {
        if (M1.null_p(l12241) !== false) {
            var if_res1009 = true;
        } else {
            var loop2243 = function(l12244, l22245) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(M1.cdr(l12244)) !== false) {
                    var if_res1008 = f2240(M1.car(l12244), M1.car(l22245));
                } else {
                    var r12246 = M1.cdr(l12244);
                    var r22247 = M1.cdr(l22245);
                    if (f2240(M1.car(l12244), M1.car(l22245)) !== false) {
                        var if_res1007 = loop2243(r12246, r22247);
                    } else {
                        var if_res1007 = false;
                    }
                    var if_res1008 = if_res1007;
                }
                return if_res1008;
            };
            var if_res1009 = loop2243(l12241, l22242);
        }
        var if_res1010 = if_res1009;
    } else {
        var if_res1010 = gen_andmap(f2240, M1.list(l12241, l22242));
    }
    return if_res1010;
};
var cl992 = $rjs_core.attachProcedureArity(function(f2248, l2249, ...args22501011) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2250 = $rjs_core.Pair.listFromArray(args22501011);
    return gen_andmap(f2248, M1.cons(l2249, args2250));
});
var andmap2234 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam993 = {
        '2': cl990,
        '3': cl991
    } [arguments.length];
    if (fixed_lam993 !== undefined) {
        return fixed_lam993.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl992.length, 1) !== false) {
            var if_res994 = cl992.apply(null, arguments);
        } else {
            var if_res994 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res994;
    }
}, [M1.make_arity_at_least(2)]);
var andmap2 = andmap2234;
var cl1012 = function(f2252, l2253) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1019 = true;
    } else {
        if (M1.procedure_p(f2252) !== false) {
            if (M1.procedure_arity_includes_p(f2252, 1) !== false) {
                var if_res1017 = M1.list_p(l2253);
            } else {
                var if_res1017 = false;
            }
            var if_res1018 = if_res1017;
        } else {
            var if_res1018 = false;
        }
        var if_res1019 = if_res1018;
    }
    if (if_res1019 !== false) {
        if (M1.null_p(l2253) !== false) {
            var if_res1022 = false;
        } else {
            var loop2254 = function(l2255) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(M1.cdr(l2255)) !== false) {
                    var if_res1021 = f2252(M1.car(l2255));
                } else {
                    var r2256 = M1.cdr(l2255);
                    var or_part2257 = f2252(M1.car(l2255));
                    if (or_part2257 !== false) {
                        var if_res1020 = or_part2257;
                    } else {
                        var if_res1020 = loop2254(r2256);
                    }
                    var if_res1021 = if_res1020;
                }
                return if_res1021;
            };
            var if_res1022 = loop2254(l2253);
        }
        var if_res1023 = if_res1022;
    } else {
        var if_res1023 = gen_ormap(f2252, M1.list(l2253));
    }
    return if_res1023;
};
var cl1013 = function(f2258, l12259, l22260) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1028 = true;
    } else {
        if (M1.procedure_p(f2258) !== false) {
            if (M1.procedure_arity_includes_p(f2258, 2) !== false) {
                if (M1.list_p(l12259) !== false) {
                    if (M1.list_p(l22260) !== false) {
                        var if_res1024 = M1.__eq_(M1.length(l12259), M1.length(l22260));
                    } else {
                        var if_res1024 = false;
                    }
                    var if_res1025 = if_res1024;
                } else {
                    var if_res1025 = false;
                }
                var if_res1026 = if_res1025;
            } else {
                var if_res1026 = false;
            }
            var if_res1027 = if_res1026;
        } else {
            var if_res1027 = false;
        }
        var if_res1028 = if_res1027;
    }
    if (if_res1028 !== false) {
        if (M1.null_p(l12259) !== false) {
            var if_res1031 = false;
        } else {
            var loop2261 = function(l12262, l22263) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(M1.cdr(l12262)) !== false) {
                    var if_res1030 = f2258(M1.car(l12262), M1.car(l22263));
                } else {
                    var r12264 = M1.cdr(l12262);
                    var r22265 = M1.cdr(l22263);
                    var or_part2266 = f2258(M1.car(l12262), M1.car(l22263));
                    if (or_part2266 !== false) {
                        var if_res1029 = or_part2266;
                    } else {
                        var if_res1029 = loop2261(r12264, r22265);
                    }
                    var if_res1030 = if_res1029;
                }
                return if_res1030;
            };
            var if_res1031 = loop2261(l12259, l22260);
        }
        var if_res1032 = if_res1031;
    } else {
        var if_res1032 = gen_ormap(f2258, M1.list(l12259, l22260));
    }
    return if_res1032;
};
var cl1014 = $rjs_core.attachProcedureArity(function(f2267, l2268, ...args22691033) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2269 = $rjs_core.Pair.listFromArray(args22691033);
    return gen_ormap(f2267, M1.cons(l2268, args2269));
});
var ormap2251 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1015 = {
        '2': cl1012,
        '3': cl1013
    } [arguments.length];
    if (fixed_lam1015 !== undefined) {
        return fixed_lam1015.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1014.length, 1) !== false) {
            var if_res1016 = cl1014.apply(null, arguments);
        } else {
            var if_res1016 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1016;
    }
}, [M1.make_arity_at_least(2)]);
var ormap2 = ormap2251;
var check_args = function(who2270, f2271, ls2272) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2271) !== false) {
        var if_res1034 = M1.rvoid();
    } else {
        var if_res1034 = M1.raise_argument_error(who2270, $rjs_core.UString.make("procedure?"), f2271);
    }
    if_res1034;
    var loop2273 = function(prev_len2274, ls2275, i2276) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(ls2275) !== false) {
            var if_res1038 = M1.rvoid();
        } else {
            var l2277 = M1.car(ls2275);
            if (M1.list_p(l2277) !== false) {
                var if_res1035 = M1.rvoid();
            } else {
                var if_res1035 = M1.raise_argument_error(who2270, $rjs_core.UString.make("list?"), l2277);
            }
            if_res1035;
            var len2278 = M1.length(l2277);
            if (prev_len2274 !== false) {
                var if_res1036 = M1.not(M1.__eq_(len2278, prev_len2274));
            } else {
                var if_res1036 = false;
            }
            if (if_res1036 !== false) {
                var if_res1037 = M1.raise_arguments_error(who2270, $rjs_core.UString.make("all lists must have same size"), $rjs_core.UString.make("first list length"), prev_len2274, $rjs_core.UString.make("other list length"), len2278, $rjs_core.UString.make("procedure"), f2271);
            } else {
                var if_res1037 = M1.rvoid();
            }
            if_res1037;
            var if_res1038 = loop2273(len2278, M1.cdr(ls2275), M1.add1(i2276));
        }
        return if_res1038;
    };
    loop2273(false, ls2272, 1);
    if (M1.procedure_arity_includes_p(f2271, M1.length(ls2272)) !== false) {
        var if_res1055 = M1.rvoid();
    } else {
        var let_result1039 = M0.procedure_keywords(f2271);
        var required_keywords2279 = let_result1039.getAt(0);
        var optional_keywords2280 = let_result1039.getAt(1);
        if (M1.pair_p(required_keywords2279) !== false) {
            var if_res1054 = M1.string_append($rjs_core.UString.make("argument mismatch;\n"), $rjs_core.UString.make(" the given procedure expects keyword arguments"));
        } else {
            var if_res1054 = M1.string_append($rjs_core.UString.make("argument mismatch;\n"), $rjs_core.UString.make(" the given procedure's expected number of arguments does not match"), $rjs_core.UString.make(" the given number of lists"));
        }
        var temp1053 = $rjs_core.UString.make("given procedure");
        var n2282 = M1.object_name(f2271);
        if (M1.symbol_p(n2282) !== false) {
            var if_res1050 = M1.symbol__gt_string(n2282);
        } else {
            var if_res1050 = false;
        }
        var or_part2281 = if_res1050;
        if (or_part2281 !== false) {
            var if_res1051 = or_part2281;
        } else {
            var if_res1051 = $rjs_core.UString.make("#<procedure>");
        }
        var temp1052 = M1.unquoted_printing_string(if_res1051);
        var a2283 = M1.procedure_arity(f2271);
        if (M1.pair_p(required_keywords2279) !== false) {
            var if_res1049 = M1.rnull;
        } else {
            if (M1.integer_p(a2283) !== false) {
                var if_res1048 = M1.list($rjs_core.UString.make("expected"), a2283);
            } else {
                if (M1.arity_at_least_p(a2283) !== false) {
                    var if_res1047 = M1.list($rjs_core.UString.make("expected"), M1.unquoted_printing_string(M1.string_append($rjs_core.UString.make("at least "), M1.number__gt_string(M1.arity_at_least_value(a2283)))));
                } else {
                    var if_res1047 = M1.rnull;
                }
                var if_res1048 = if_res1047;
            }
            var if_res1049 = if_res1048;
        }
        if (M1.pair_p(required_keywords2279) !== false) {
            var if_res1046 = M1.rnull;
        } else {
            var if_res1046 = M1.list($rjs_core.UString.make("given"), M1.length(ls2272));
        }
        if (M1.pair_p(required_keywords2279) !== false) {
            var temp1044 = $rjs_core.UString.make("required keywords");
            var loop2284 = function(kws2285) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(kws2285) !== false) {
                    var if_res1043 = M1.rnull;
                } else {
                    var if_res1043 = M1.list_times_($rjs_core.UString.make(" "), M1.string_append($rjs_core.UString.make("#:"), M1.__rjs_quoted__.keyword__gt_string(M1.car(kws2285))), loop2284(M1.cdr(kws2285)));
                }
                return if_res1043;
            };
            var if_res1045 = M1.list(temp1044, M1.unquoted_printing_string(M1.apply(M1.string_append, M1.cdr(loop2284(required_keywords2279)))));
        } else {
            var if_res1045 = M1.rnull;
        }
        var w2286 = M1.quotient(M1.error_print_width(), M1.length(ls2272));
        if (M1.__gt_(w2286, 10) !== false) {
            var temp1041 = $rjs_core.UString.make("argument lists...");
            var loop2287 = function(ls2288) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(ls2288) !== false) {
                    var if_res1040 = M1.rnull;
                } else {
                    var if_res1040 = M1.cons(M1.string_append($rjs_core.UString.make("\n   "), M1.error_value__gt_string_handler()(M1.car(ls2288), w2286)), loop2287(M1.cdr(ls2288)));
                }
                return if_res1040;
            };
            var if_res1042 = M1.list(temp1041, M1.unquoted_printing_string(M1.apply(M1.string_append, loop2287(ls2272))));
        } else {
            var if_res1042 = M1.rnull;
        }
        var if_res1055 = M1.apply(M1.raise_arguments_error, who2270, if_res1054, temp1053, temp1052, M1.append(if_res1049, if_res1046, if_res1045, if_res1042));
    }
    return if_res1055;
};
var gen_map = function(f2289, ls2290) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1056 = true;
    } else {
        var if_res1056 = check_args($rjs_core.PrimitiveSymbol.make("map"), f2289, ls2290);
    }
    if_res1056;
    var loop2291 = function(ls2292) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(M1.car(ls2292)) !== false) {
            var if_res1057 = M1.rnull;
        } else {
            var next_ls2293 = map2(M1.cdr, ls2292);
            var if_res1057 = M1.cons(M1.apply(f2289, map2(M1.car, ls2292)), loop2291(next_ls2293));
        }
        return if_res1057;
    };
    return loop2291(ls2290);
};
var gen_for_each = function(f2294, ls2295) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1058 = true;
    } else {
        var if_res1058 = check_args($rjs_core.PrimitiveSymbol.make("for-each"), f2294, ls2295);
    }
    if_res1058;
    var loop2296 = function(ls2297) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(M1.car(ls2297)) !== false) {
            var if_res1059 = M1.rvoid();
        } else {
            var next_ls2298 = map2(M1.cdr, ls2297);
            M1.apply(f2294, map2(M1.car, ls2297));
            var if_res1059 = loop2296(next_ls2298);
        }
        return if_res1059;
    };
    return loop2296(ls2295);
};
var gen_andmap = function(f2299, ls2300) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1060 = true;
    } else {
        var if_res1060 = check_args($rjs_core.PrimitiveSymbol.make("andmap"), f2299, ls2300);
    }
    if_res1060;
    var loop2301 = function(ls2302) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(M1.car(ls2302)) !== false) {
            var if_res1063 = true;
        } else {
            if (M1.null_p(M1.cdar(ls2302)) !== false) {
                var if_res1062 = M1.apply(f2299, map2(M1.car, ls2302));
            } else {
                var next_ls2303 = map2(M1.cdr, ls2302);
                if (M1.apply(f2299, map2(M1.car, ls2302)) !== false) {
                    var if_res1061 = loop2301(next_ls2303);
                } else {
                    var if_res1061 = false;
                }
                var if_res1062 = if_res1061;
            }
            var if_res1063 = if_res1062;
        }
        return if_res1063;
    };
    return loop2301(ls2300);
};
var gen_ormap = function(f2304, ls2305) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1064 = true;
    } else {
        var if_res1064 = check_args($rjs_core.PrimitiveSymbol.make("ormap"), f2304, ls2305);
    }
    if_res1064;
    var loop2306 = function(ls2307) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(M1.car(ls2307)) !== false) {
            var if_res1067 = false;
        } else {
            if (M1.null_p(M1.cdar(ls2307)) !== false) {
                var if_res1066 = M1.apply(f2304, map2(M1.car, ls2307));
            } else {
                var next_ls2308 = map2(M1.cdr, ls2307);
                var or_part2309 = M1.apply(f2304, map2(M1.car, ls2307));
                if (or_part2309 !== false) {
                    var if_res1065 = or_part2309;
                } else {
                    var if_res1065 = loop2306(next_ls2308);
                }
                var if_res1066 = if_res1065;
            }
            var if_res1067 = if_res1066;
        }
        return if_res1067;
    };
    return loop2306(ls2305);
};
M1.rvoid();
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    ormap2 as ormap,
    andmap2 as andmap,
    for_each2 as for_each,
    map2 as map
};