import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
import * as M1 from "../../../runtime/unsafe.rkt.js";
var generic_sort3092 = function(A3093, less_than_p3094, n3095) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n_by_2_3096 = M1.unsafe_fxrshift(n3095, 1);
    var n_by_2_plus_3097 = M1.unsafe_fx_(n3095, n_by_2_3096);
    var copying_mergesort3098 = function(Alo3099, Blo3100, n3101) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.unsafe_fx_eq_(n3101, 1) !== false) {
            var if_res1699 = M1.unsafe_vector_set_bang_(A3093, Blo3100, M1.unsafe_vector_ref(A3093, Alo3099));
        } else {
            if (M1.unsafe_fx_eq_(n3101, 2) !== false) {
                var x3102 = M1.unsafe_vector_ref(A3093, Alo3099);
                var y3103 = M1.unsafe_vector_ref(A3093, M1.unsafe_fx_plus_(Alo3099, 1));
                if (false !== false) {
                    var if_res1684 = less_than_p3094(false(y3103), false(x3102));
                } else {
                    var if_res1684 = less_than_p3094(y3103, x3102);
                }
                if (if_res1684 !== false) {
                    M1.unsafe_vector_set_bang_(A3093, Blo3100, y3103);
                    var if_res1685 = M1.unsafe_vector_set_bang_(A3093, M1.unsafe_fx_plus_(Blo3100, 1), x3102);
                } else {
                    M1.unsafe_vector_set_bang_(A3093, Blo3100, x3102);
                    var if_res1685 = M1.unsafe_vector_set_bang_(A3093, M1.unsafe_fx_plus_(Blo3100, 1), y3103);
                }
                var if_res1698 = if_res1685;
            } else {
                if (M1.unsafe_fx_lt_(n3101, 16) !== false) {
                    M1.unsafe_vector_set_bang_(A3093, Blo3100, M1.unsafe_vector_ref(A3093, Alo3099));
                    var iloop3104 = function(i3105) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (M1.unsafe_fx_lt_(i3105, n3101) !== false) {
                            var ref_i3106 = M1.unsafe_vector_ref(A3093, M1.unsafe_fx_plus_(Alo3099, i3105));
                            var jloop3107 = function(j3108) {
                                if (arguments.length !== 1) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                var ref_j_13109 = M1.unsafe_vector_ref(A3093, M1.unsafe_fx_(j3108, 1));
                                if (M1.unsafe_fx_lt_(Blo3100, j3108) !== false) {
                                    if (false !== false) {
                                        var if_res1686 = less_than_p3094(false(ref_i3106), false(ref_j_13109));
                                    } else {
                                        var if_res1686 = less_than_p3094(ref_i3106, ref_j_13109);
                                    }
                                    var if_res1687 = if_res1686;
                                } else {
                                    var if_res1687 = false;
                                }
                                if (if_res1687 !== false) {
                                    M1.unsafe_vector_set_bang_(A3093, j3108, ref_j_13109);
                                    var if_res1688 = jloop3107(M1.unsafe_fx_(j3108, 1));
                                } else {
                                    M1.unsafe_vector_set_bang_(A3093, j3108, ref_i3106);
                                    var if_res1688 = iloop3104(M1.unsafe_fx_plus_(i3105, 1));
                                }
                                return if_res1688;
                            };
                            var if_res1689 = jloop3107(M1.unsafe_fx_plus_(Blo3100, i3105));
                        } else {
                            var if_res1689 = M0.rvoid();
                        }
                        return if_res1689;
                    };
                    var if_res1697 = iloop3104(1);
                } else {
                    var n_by_2_3110 = M1.unsafe_fxrshift(n3101, 1);
                    var n_by_2_plus_3111 = M1.unsafe_fx_(n3101, n_by_2_3110);
                    var Amid13112 = M1.unsafe_fx_plus_(Alo3099, n_by_2_3110);
                    var Amid23113 = M1.unsafe_fx_plus_(Alo3099, n_by_2_plus_3111);
                    var Bmid13114 = M1.unsafe_fx_plus_(Blo3100, n_by_2_3110);
                    copying_mergesort3098(Amid13112, Bmid13114, n_by_2_plus_3111);
                    copying_mergesort3098(Alo3099, Amid23113, n_by_2_3110);
                    var b23115 = M1.unsafe_fx_plus_(Blo3100, n3101);
                    var loop3116 = function(a13117, b13118, c13119) {
                        if (arguments.length !== 3) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var x3120 = M1.unsafe_vector_ref(A3093, a13117);
                        var y3121 = M1.unsafe_vector_ref(A3093, b13118);
                        if (true !== false) {
                            if (false !== false) {
                                var if_res1690 = less_than_p3094(false(y3121), false(x3120));
                            } else {
                                var if_res1690 = less_than_p3094(y3121, x3120);
                            }
                            var if_res1692 = M0.not(if_res1690);
                        } else {
                            if (false !== false) {
                                var if_res1691 = less_than_p3094(false(x3120), false(y3121));
                            } else {
                                var if_res1691 = less_than_p3094(x3120, y3121);
                            }
                            var if_res1692 = if_res1691;
                        }
                        if (if_res1692 !== false) {
                            M1.unsafe_vector_set_bang_(A3093, c13119, x3120);
                            var a13122 = M1.unsafe_fx_plus_(a13117, 1);
                            var c13123 = M1.unsafe_fx_plus_(c13119, 1);
                            if (M1.unsafe_fx_lt_(c13123, b13118) !== false) {
                                var if_res1693 = loop3116(a13122, b13118, c13123);
                            } else {
                                var if_res1693 = M0.rvoid();
                            }
                            var if_res1696 = if_res1693;
                        } else {
                            M1.unsafe_vector_set_bang_(A3093, c13119, y3121);
                            var b13124 = M1.unsafe_fx_plus_(b13118, 1);
                            var c13125 = M1.unsafe_fx_plus_(c13119, 1);
                            if (M1.unsafe_fx_lt__eq_(b23115, b13124) !== false) {
                                var loop3126 = function(a13127, c13128) {
                                    if (arguments.length !== 2) {
                                        throw $rjs_core.racketContractError("arity mismatch");
                                    } else {}
                                    if (M1.unsafe_fx_lt_(c13128, b13124) !== false) {
                                        M1.unsafe_vector_set_bang_(A3093, c13128, M1.unsafe_vector_ref(A3093, a13127));
                                        var if_res1694 = loop3126(M1.unsafe_fx_plus_(a13127, 1), M1.unsafe_fx_plus_(c13128, 1));
                                    } else {
                                        var if_res1694 = M0.rvoid();
                                    }
                                    return if_res1694;
                                };
                                var if_res1695 = loop3126(a13117, c13125);
                            } else {
                                var if_res1695 = loop3116(a13117, b13124, c13125);
                            }
                            var if_res1696 = if_res1695;
                        }
                        return if_res1696;
                    };
                    var if_res1697 = loop3116(Amid23113, Bmid13114, Blo3100);
                }
                var if_res1698 = if_res1697;
            }
            var if_res1699 = if_res1698;
        }
        return if_res1699;
    };
    var Alo3129 = 0;
    var Amid13130 = n_by_2_3096;
    var Amid23131 = n_by_2_plus_3097;
    var Ahi3132 = n3095;
    var B1lo3133 = n3095;
    copying_mergesort3098(Amid13130, B1lo3133, n_by_2_plus_3097);
    if (M0.zero_p(n_by_2_3096) !== false) {
        var if_res1700 = M0.rvoid();
    } else {
        var if_res1700 = copying_mergesort3098(Alo3129, Amid23131, n_by_2_3096);
    }
    if_res1700;
    var b23134 = Ahi3132;
    var loop3135 = function(a13136, b13137, c13138) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var x3139 = M1.unsafe_vector_ref(A3093, a13136);
        var y3140 = M1.unsafe_vector_ref(A3093, b13137);
        if (false !== false) {
            if (false !== false) {
                var if_res1701 = less_than_p3094(false(y3140), false(x3139));
            } else {
                var if_res1701 = less_than_p3094(y3140, x3139);
            }
            var if_res1703 = M0.not(if_res1701);
        } else {
            if (false !== false) {
                var if_res1702 = less_than_p3094(false(x3139), false(y3140));
            } else {
                var if_res1702 = less_than_p3094(x3139, y3140);
            }
            var if_res1703 = if_res1702;
        }
        if (if_res1703 !== false) {
            M1.unsafe_vector_set_bang_(A3093, c13138, x3139);
            var a13141 = M1.unsafe_fx_plus_(a13136, 1);
            var c13142 = M1.unsafe_fx_plus_(c13138, 1);
            if (M1.unsafe_fx_lt_(c13142, b13137) !== false) {
                var if_res1704 = loop3135(a13141, b13137, c13142);
            } else {
                var if_res1704 = M0.rvoid();
            }
            var if_res1707 = if_res1704;
        } else {
            M1.unsafe_vector_set_bang_(A3093, c13138, y3140);
            var b13143 = M1.unsafe_fx_plus_(b13137, 1);
            var c13144 = M1.unsafe_fx_plus_(c13138, 1);
            if (M1.unsafe_fx_lt__eq_(b23134, b13143) !== false) {
                var loop3145 = function(a13146, c13147) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(c13147, b13143) !== false) {
                        M1.unsafe_vector_set_bang_(A3093, c13147, M1.unsafe_vector_ref(A3093, a13146));
                        var if_res1705 = loop3145(M1.unsafe_fx_plus_(a13146, 1), M1.unsafe_fx_plus_(c13147, 1));
                    } else {
                        var if_res1705 = M0.rvoid();
                    }
                    return if_res1705;
                };
                var if_res1706 = loop3145(a13136, c13144);
            } else {
                var if_res1706 = loop3135(a13136, b13143, c13144);
            }
            var if_res1707 = if_res1706;
        }
        return if_res1707;
    };
    return loop3135(B1lo3133, Amid23131, Alo3129);
};
var generic_sort_by_key3148 = function(A3149, less_than_p3150, n3151, key3152) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n_by_2_3153 = M1.unsafe_fxrshift(n3151, 1);
    var n_by_2_plus_3154 = M1.unsafe_fx_(n3151, n_by_2_3153);
    var copying_mergesort3155 = function(Alo3156, Blo3157, n3158) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.unsafe_fx_eq_(n3158, 1) !== false) {
            var if_res1723 = M1.unsafe_vector_set_bang_(A3149, Blo3157, M1.unsafe_vector_ref(A3149, Alo3156));
        } else {
            if (M1.unsafe_fx_eq_(n3158, 2) !== false) {
                var x3159 = M1.unsafe_vector_ref(A3149, Alo3156);
                var y3160 = M1.unsafe_vector_ref(A3149, M1.unsafe_fx_plus_(Alo3156, 1));
                if (key3152 !== false) {
                    var if_res1708 = less_than_p3150(key3152(y3160), key3152(x3159));
                } else {
                    var if_res1708 = less_than_p3150(y3160, x3159);
                }
                if (if_res1708 !== false) {
                    M1.unsafe_vector_set_bang_(A3149, Blo3157, y3160);
                    var if_res1709 = M1.unsafe_vector_set_bang_(A3149, M1.unsafe_fx_plus_(Blo3157, 1), x3159);
                } else {
                    M1.unsafe_vector_set_bang_(A3149, Blo3157, x3159);
                    var if_res1709 = M1.unsafe_vector_set_bang_(A3149, M1.unsafe_fx_plus_(Blo3157, 1), y3160);
                }
                var if_res1722 = if_res1709;
            } else {
                if (M1.unsafe_fx_lt_(n3158, 16) !== false) {
                    M1.unsafe_vector_set_bang_(A3149, Blo3157, M1.unsafe_vector_ref(A3149, Alo3156));
                    var iloop3161 = function(i3162) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (M1.unsafe_fx_lt_(i3162, n3158) !== false) {
                            var ref_i3163 = M1.unsafe_vector_ref(A3149, M1.unsafe_fx_plus_(Alo3156, i3162));
                            var jloop3164 = function(j3165) {
                                if (arguments.length !== 1) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                var ref_j_13166 = M1.unsafe_vector_ref(A3149, M1.unsafe_fx_(j3165, 1));
                                if (M1.unsafe_fx_lt_(Blo3157, j3165) !== false) {
                                    if (key3152 !== false) {
                                        var if_res1710 = less_than_p3150(key3152(ref_i3163), key3152(ref_j_13166));
                                    } else {
                                        var if_res1710 = less_than_p3150(ref_i3163, ref_j_13166);
                                    }
                                    var if_res1711 = if_res1710;
                                } else {
                                    var if_res1711 = false;
                                }
                                if (if_res1711 !== false) {
                                    M1.unsafe_vector_set_bang_(A3149, j3165, ref_j_13166);
                                    var if_res1712 = jloop3164(M1.unsafe_fx_(j3165, 1));
                                } else {
                                    M1.unsafe_vector_set_bang_(A3149, j3165, ref_i3163);
                                    var if_res1712 = iloop3161(M1.unsafe_fx_plus_(i3162, 1));
                                }
                                return if_res1712;
                            };
                            var if_res1713 = jloop3164(M1.unsafe_fx_plus_(Blo3157, i3162));
                        } else {
                            var if_res1713 = M0.rvoid();
                        }
                        return if_res1713;
                    };
                    var if_res1721 = iloop3161(1);
                } else {
                    var n_by_2_3167 = M1.unsafe_fxrshift(n3158, 1);
                    var n_by_2_plus_3168 = M1.unsafe_fx_(n3158, n_by_2_3167);
                    var Amid13169 = M1.unsafe_fx_plus_(Alo3156, n_by_2_3167);
                    var Amid23170 = M1.unsafe_fx_plus_(Alo3156, n_by_2_plus_3168);
                    var Bmid13171 = M1.unsafe_fx_plus_(Blo3157, n_by_2_3167);
                    copying_mergesort3155(Amid13169, Bmid13171, n_by_2_plus_3168);
                    copying_mergesort3155(Alo3156, Amid23170, n_by_2_3167);
                    var b23172 = M1.unsafe_fx_plus_(Blo3157, n3158);
                    var loop3173 = function(a13174, b13175, c13176) {
                        if (arguments.length !== 3) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var x3177 = M1.unsafe_vector_ref(A3149, a13174);
                        var y3178 = M1.unsafe_vector_ref(A3149, b13175);
                        if (true !== false) {
                            if (key3152 !== false) {
                                var if_res1714 = less_than_p3150(key3152(y3178), key3152(x3177));
                            } else {
                                var if_res1714 = less_than_p3150(y3178, x3177);
                            }
                            var if_res1716 = M0.not(if_res1714);
                        } else {
                            if (key3152 !== false) {
                                var if_res1715 = less_than_p3150(key3152(x3177), key3152(y3178));
                            } else {
                                var if_res1715 = less_than_p3150(x3177, y3178);
                            }
                            var if_res1716 = if_res1715;
                        }
                        if (if_res1716 !== false) {
                            M1.unsafe_vector_set_bang_(A3149, c13176, x3177);
                            var a13179 = M1.unsafe_fx_plus_(a13174, 1);
                            var c13180 = M1.unsafe_fx_plus_(c13176, 1);
                            if (M1.unsafe_fx_lt_(c13180, b13175) !== false) {
                                var if_res1717 = loop3173(a13179, b13175, c13180);
                            } else {
                                var if_res1717 = M0.rvoid();
                            }
                            var if_res1720 = if_res1717;
                        } else {
                            M1.unsafe_vector_set_bang_(A3149, c13176, y3178);
                            var b13181 = M1.unsafe_fx_plus_(b13175, 1);
                            var c13182 = M1.unsafe_fx_plus_(c13176, 1);
                            if (M1.unsafe_fx_lt__eq_(b23172, b13181) !== false) {
                                var loop3183 = function(a13184, c13185) {
                                    if (arguments.length !== 2) {
                                        throw $rjs_core.racketContractError("arity mismatch");
                                    } else {}
                                    if (M1.unsafe_fx_lt_(c13185, b13181) !== false) {
                                        M1.unsafe_vector_set_bang_(A3149, c13185, M1.unsafe_vector_ref(A3149, a13184));
                                        var if_res1718 = loop3183(M1.unsafe_fx_plus_(a13184, 1), M1.unsafe_fx_plus_(c13185, 1));
                                    } else {
                                        var if_res1718 = M0.rvoid();
                                    }
                                    return if_res1718;
                                };
                                var if_res1719 = loop3183(a13174, c13182);
                            } else {
                                var if_res1719 = loop3173(a13174, b13181, c13182);
                            }
                            var if_res1720 = if_res1719;
                        }
                        return if_res1720;
                    };
                    var if_res1721 = loop3173(Amid23170, Bmid13171, Blo3157);
                }
                var if_res1722 = if_res1721;
            }
            var if_res1723 = if_res1722;
        }
        return if_res1723;
    };
    var Alo3186 = 0;
    var Amid13187 = n_by_2_3153;
    var Amid23188 = n_by_2_plus_3154;
    var Ahi3189 = n3151;
    var B1lo3190 = n3151;
    copying_mergesort3155(Amid13187, B1lo3190, n_by_2_plus_3154);
    if (M0.zero_p(n_by_2_3153) !== false) {
        var if_res1724 = M0.rvoid();
    } else {
        var if_res1724 = copying_mergesort3155(Alo3186, Amid23188, n_by_2_3153);
    }
    if_res1724;
    var b23191 = Ahi3189;
    var loop3192 = function(a13193, b13194, c13195) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var x3196 = M1.unsafe_vector_ref(A3149, a13193);
        var y3197 = M1.unsafe_vector_ref(A3149, b13194);
        if (false !== false) {
            if (key3152 !== false) {
                var if_res1725 = less_than_p3150(key3152(y3197), key3152(x3196));
            } else {
                var if_res1725 = less_than_p3150(y3197, x3196);
            }
            var if_res1727 = M0.not(if_res1725);
        } else {
            if (key3152 !== false) {
                var if_res1726 = less_than_p3150(key3152(x3196), key3152(y3197));
            } else {
                var if_res1726 = less_than_p3150(x3196, y3197);
            }
            var if_res1727 = if_res1726;
        }
        if (if_res1727 !== false) {
            M1.unsafe_vector_set_bang_(A3149, c13195, x3196);
            var a13198 = M1.unsafe_fx_plus_(a13193, 1);
            var c13199 = M1.unsafe_fx_plus_(c13195, 1);
            if (M1.unsafe_fx_lt_(c13199, b13194) !== false) {
                var if_res1728 = loop3192(a13198, b13194, c13199);
            } else {
                var if_res1728 = M0.rvoid();
            }
            var if_res1731 = if_res1728;
        } else {
            M1.unsafe_vector_set_bang_(A3149, c13195, y3197);
            var b13200 = M1.unsafe_fx_plus_(b13194, 1);
            var c13201 = M1.unsafe_fx_plus_(c13195, 1);
            if (M1.unsafe_fx_lt__eq_(b23191, b13200) !== false) {
                var loop3202 = function(a13203, c13204) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(c13204, b13200) !== false) {
                        M1.unsafe_vector_set_bang_(A3149, c13204, M1.unsafe_vector_ref(A3149, a13203));
                        var if_res1729 = loop3202(M1.unsafe_fx_plus_(a13203, 1), M1.unsafe_fx_plus_(c13204, 1));
                    } else {
                        var if_res1729 = M0.rvoid();
                    }
                    return if_res1729;
                };
                var if_res1730 = loop3202(a13193, c13201);
            } else {
                var if_res1730 = loop3192(a13193, b13200, c13201);
            }
            var if_res1731 = if_res1730;
        }
        return if_res1731;
    };
    return loop3192(B1lo3190, Amid23188, Alo3186);
};
var cl1839 = function(lst3205, less_than_p3206) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n3207 = M0.length(lst3205);
    if (M1.unsafe_fx_eq_(n3207, 0) !== false) {
        var if_res1863 = lst3205;
    } else {
        if (false !== false) {
            var vec3208 = M0.make_vector(n3207 + M0.ceiling(n3207 / 2));
            var loop3209 = function(i3210, lst3211) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M0.pair_p(lst3211) !== false) {
                    var x3212 = M0.car(lst3211);
                    M1.unsafe_vector_set_bang_(vec3208, i3210, M0.cons(false(x3212), x3212));
                    var if_res1843 = loop3209(M1.unsafe_fx_plus_(i3210, 1), M0.cdr(lst3211));
                } else {
                    var if_res1843 = M0.rvoid();
                }
                return if_res1843;
            };
            loop3209(0, lst3205);
            generic_sort_by_key3148(vec3208, less_than_p3206, n3207, M1.unsafe_car);
            var loop3213 = function(i3214, r3215) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var i3216 = M1.unsafe_fx_(i3214, 1);
                if (M1.unsafe_fx_lt_(i3216, 0) !== false) {
                    var if_res1844 = r3215;
                } else {
                    var if_res1844 = loop3213(i3216, M0.cons(M1.unsafe_cdr(M1.unsafe_vector_ref(vec3208, i3216)), r3215));
                }
                return if_res1844;
            };
            var if_res1862 = loop3213(n3207, $rjs_core.Pair.EMPTY);
        } else {
            var loop3217 = function(last3218, next3219) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var or_part3220 = M0.null_p(next3219);
                if (or_part3220 !== false) {
                    var if_res1847 = or_part3220;
                } else {
                    if (false !== false) {
                        var if_res1845 = less_than_p3206(false(M1.unsafe_car(next3219)), false(last3218));
                    } else {
                        var if_res1845 = less_than_p3206(M1.unsafe_car(next3219), last3218);
                    }
                    if (M0.not(if_res1845) !== false) {
                        var if_res1846 = loop3217(M1.unsafe_car(next3219), M1.unsafe_cdr(next3219));
                    } else {
                        var if_res1846 = false;
                    }
                    var if_res1847 = if_res1846;
                }
                return if_res1847;
            };
            if (loop3217(M0.car(lst3205), M0.cdr(lst3205)) !== false) {
                var if_res1861 = lst3205;
            } else {
                if (M1.unsafe_fx_lt__eq_(n3207, 3) !== false) {
                    if (M1.unsafe_fx_eq_(n3207, 1) !== false) {
                        var if_res1857 = lst3205;
                    } else {
                        if (M1.unsafe_fx_eq_(n3207, 2) !== false) {
                            var if_res1856 = M0.list(M0.cadr(lst3205), M0.car(lst3205));
                        } else {
                            var a3221 = M0.car(lst3205);
                            var b3222 = M0.cadr(lst3205);
                            var c3223 = M0.caddr(lst3205);
                            if (false !== false) {
                                var if_res1848 = less_than_p3206(false(b3222), false(a3221));
                            } else {
                                var if_res1848 = less_than_p3206(b3222, a3221);
                            }
                            if (if_res1848 !== false) {
                                if (false !== false) {
                                    var if_res1849 = less_than_p3206(false(c3223), false(b3222));
                                } else {
                                    var if_res1849 = less_than_p3206(c3223, b3222);
                                }
                                if (if_res1849 !== false) {
                                    var if_res1852 = M0.list(c3223, b3222, a3221);
                                } else {
                                    if (false !== false) {
                                        var if_res1850 = less_than_p3206(false(c3223), false(a3221));
                                    } else {
                                        var if_res1850 = less_than_p3206(c3223, a3221);
                                    }
                                    if (if_res1850 !== false) {
                                        var if_res1851 = M0.list(b3222, c3223, a3221);
                                    } else {
                                        var if_res1851 = M0.list(b3222, a3221, c3223);
                                    }
                                    var if_res1852 = if_res1851;
                                }
                                var if_res1855 = if_res1852;
                            } else {
                                if (false !== false) {
                                    var if_res1853 = less_than_p3206(false(c3223), false(a3221));
                                } else {
                                    var if_res1853 = less_than_p3206(c3223, a3221);
                                }
                                if (if_res1853 !== false) {
                                    var if_res1854 = M0.list(c3223, a3221, b3222);
                                } else {
                                    var if_res1854 = M0.list(a3221, c3223, b3222);
                                }
                                var if_res1855 = if_res1854;
                            }
                            var if_res1856 = if_res1855;
                        }
                        var if_res1857 = if_res1856;
                    }
                    var if_res1860 = if_res1857;
                } else {
                    var vec3224 = M0.make_vector(n3207 + M0.ceiling(n3207 / 2));
                    var loop3225 = function(i3226, lst3227) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (M0.pair_p(lst3227) !== false) {
                            M0.vector_set_bang_(vec3224, i3226, M0.car(lst3227));
                            var if_res1858 = loop3225(M0.add1(i3226), M0.cdr(lst3227));
                        } else {
                            var if_res1858 = M0.rvoid();
                        }
                        return if_res1858;
                    };
                    loop3225(0, lst3205);
                    generic_sort3092(vec3224, less_than_p3206, n3207);
                    var loop3228 = function(i3229, r3230) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var i3231 = M0.sub1(i3229);
                        if (M0.__lt_(i3231, 0) !== false) {
                            var if_res1859 = r3230;
                        } else {
                            var if_res1859 = loop3228(i3231, M0.cons(M0.vector_ref(vec3224, i3231), r3230));
                        }
                        return if_res1859;
                    };
                    var if_res1860 = loop3228(n3207, $rjs_core.Pair.EMPTY);
                }
                var if_res1861 = if_res1860;
            }
            var if_res1862 = if_res1861;
        }
        var if_res1863 = if_res1862;
    }
    return if_res1863;
};
var cl1840 = function(lst3232, less_than_p3233, getkey3234) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (getkey3234 !== false) {
        var if_res1864 = M0.not(M0.eq_p(M0.values, getkey3234));
    } else {
        var if_res1864 = false;
    }
    if (if_res1864 !== false) {
        var if_res1865 = sort(lst3232, less_than_p3233, getkey3234, false);
    } else {
        var if_res1865 = sort(lst3232, less_than_p3233);
    }
    return if_res1865;
};
var cl1841 = function(lst3235, less_than_p3236, getkey3237, cache_keys_p3238) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (getkey3237 !== false) {
        var if_res1866 = M0.not(M0.eq_p(M0.values, getkey3237));
    } else {
        var if_res1866 = false;
    }
    if (if_res1866 !== false) {
        var n3239 = M0.length(lst3235);
        if (M1.unsafe_fx_eq_(n3239, 0) !== false) {
            var if_res1887 = lst3235;
        } else {
            if (cache_keys_p3238 !== false) {
                var vec3240 = M0.make_vector(n3239 + M0.ceiling(n3239 / 2));
                var loop3241 = function(i3242, lst3243) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M0.pair_p(lst3243) !== false) {
                        var x3244 = M0.car(lst3243);
                        M1.unsafe_vector_set_bang_(vec3240, i3242, M0.cons(getkey3237(x3244), x3244));
                        var if_res1867 = loop3241(M1.unsafe_fx_plus_(i3242, 1), M0.cdr(lst3243));
                    } else {
                        var if_res1867 = M0.rvoid();
                    }
                    return if_res1867;
                };
                loop3241(0, lst3235);
                generic_sort_by_key3148(vec3240, less_than_p3236, n3239, M1.unsafe_car);
                var loop3245 = function(i3246, r3247) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var i3248 = M1.unsafe_fx_(i3246, 1);
                    if (M1.unsafe_fx_lt_(i3248, 0) !== false) {
                        var if_res1868 = r3247;
                    } else {
                        var if_res1868 = loop3245(i3248, M0.cons(M1.unsafe_cdr(M1.unsafe_vector_ref(vec3240, i3248)), r3247));
                    }
                    return if_res1868;
                };
                var if_res1886 = loop3245(n3239, $rjs_core.Pair.EMPTY);
            } else {
                var loop3249 = function(last3250, next3251) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var or_part3252 = M0.null_p(next3251);
                    if (or_part3252 !== false) {
                        var if_res1871 = or_part3252;
                    } else {
                        if (getkey3237 !== false) {
                            var if_res1869 = less_than_p3236(getkey3237(M1.unsafe_car(next3251)), getkey3237(last3250));
                        } else {
                            var if_res1869 = less_than_p3236(M1.unsafe_car(next3251), last3250);
                        }
                        if (M0.not(if_res1869) !== false) {
                            var if_res1870 = loop3249(M1.unsafe_car(next3251), M1.unsafe_cdr(next3251));
                        } else {
                            var if_res1870 = false;
                        }
                        var if_res1871 = if_res1870;
                    }
                    return if_res1871;
                };
                if (loop3249(M0.car(lst3235), M0.cdr(lst3235)) !== false) {
                    var if_res1885 = lst3235;
                } else {
                    if (M1.unsafe_fx_lt__eq_(n3239, 3) !== false) {
                        if (M1.unsafe_fx_eq_(n3239, 1) !== false) {
                            var if_res1881 = lst3235;
                        } else {
                            if (M1.unsafe_fx_eq_(n3239, 2) !== false) {
                                var if_res1880 = M0.list(M0.cadr(lst3235), M0.car(lst3235));
                            } else {
                                var a3253 = M0.car(lst3235);
                                var b3254 = M0.cadr(lst3235);
                                var c3255 = M0.caddr(lst3235);
                                if (getkey3237 !== false) {
                                    var if_res1872 = less_than_p3236(getkey3237(b3254), getkey3237(a3253));
                                } else {
                                    var if_res1872 = less_than_p3236(b3254, a3253);
                                }
                                if (if_res1872 !== false) {
                                    if (getkey3237 !== false) {
                                        var if_res1873 = less_than_p3236(getkey3237(c3255), getkey3237(b3254));
                                    } else {
                                        var if_res1873 = less_than_p3236(c3255, b3254);
                                    }
                                    if (if_res1873 !== false) {
                                        var if_res1876 = M0.list(c3255, b3254, a3253);
                                    } else {
                                        if (getkey3237 !== false) {
                                            var if_res1874 = less_than_p3236(getkey3237(c3255), getkey3237(a3253));
                                        } else {
                                            var if_res1874 = less_than_p3236(c3255, a3253);
                                        }
                                        if (if_res1874 !== false) {
                                            var if_res1875 = M0.list(b3254, c3255, a3253);
                                        } else {
                                            var if_res1875 = M0.list(b3254, a3253, c3255);
                                        }
                                        var if_res1876 = if_res1875;
                                    }
                                    var if_res1879 = if_res1876;
                                } else {
                                    if (getkey3237 !== false) {
                                        var if_res1877 = less_than_p3236(getkey3237(c3255), getkey3237(a3253));
                                    } else {
                                        var if_res1877 = less_than_p3236(c3255, a3253);
                                    }
                                    if (if_res1877 !== false) {
                                        var if_res1878 = M0.list(c3255, a3253, b3254);
                                    } else {
                                        var if_res1878 = M0.list(a3253, c3255, b3254);
                                    }
                                    var if_res1879 = if_res1878;
                                }
                                var if_res1880 = if_res1879;
                            }
                            var if_res1881 = if_res1880;
                        }
                        var if_res1884 = if_res1881;
                    } else {
                        var vec3256 = M0.make_vector(n3239 + M0.ceiling(n3239 / 2));
                        var loop3257 = function(i3258, lst3259) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            if (M0.pair_p(lst3259) !== false) {
                                M0.vector_set_bang_(vec3256, i3258, M0.car(lst3259));
                                var if_res1882 = loop3257(M0.add1(i3258), M0.cdr(lst3259));
                            } else {
                                var if_res1882 = M0.rvoid();
                            }
                            return if_res1882;
                        };
                        loop3257(0, lst3235);
                        generic_sort_by_key3148(vec3256, less_than_p3236, n3239, getkey3237);
                        var loop3260 = function(i3261, r3262) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            var i3263 = M0.sub1(i3261);
                            if (M0.__lt_(i3263, 0) !== false) {
                                var if_res1883 = r3262;
                            } else {
                                var if_res1883 = loop3260(i3263, M0.cons(M0.vector_ref(vec3256, i3263), r3262));
                            }
                            return if_res1883;
                        };
                        var if_res1884 = loop3260(n3239, $rjs_core.Pair.EMPTY);
                    }
                    var if_res1885 = if_res1884;
                }
                var if_res1886 = if_res1885;
            }
            var if_res1887 = if_res1886;
        }
        var if_res1888 = if_res1887;
    } else {
        var if_res1888 = sort(lst3235, less_than_p3236);
    }
    return if_res1888;
};
var temp1889 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1842 = {
        '2': cl1839,
        '3': cl1840,
        '4': cl1841
    } [arguments.length];
    if (fixed_lam1842 !== undefined) {
        return fixed_lam1842.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var cl1785 = function(vec3264, less_than_p3265, start3266, end3267) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n3268 = end3267 - start3266;
    if (true !== false) {
        var if_res1788 = M0.make_vector(n3268);
    } else {
        var if_res1788 = vec3264;
    }
    var dst_vec3269 = if_res1788;
    if (true !== false) {
        var if_res1789 = 0;
    } else {
        var if_res1789 = start3266;
    }
    var dst_start3270 = if_res1789;
    if (M1.unsafe_fx_eq_(n3268, 0) !== false) {
        var if_res1810 = M0.rvoid();
    } else {
        if (false !== false) {
            var work_vec3271 = M0.make_vector(n3268 + M0.ceiling(n3268 / 2), true);
            var loop3272 = function(i3273) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.unsafe_fx_lt_(i3273, n3268) !== false) {
                    var x3274 = M1.unsafe_vector_ref(vec3264, M1.unsafe_fx_plus_(i3273, start3266));
                    M1.unsafe_vector_set_bang_(work_vec3271, i3273, M0.cons(false(x3274), x3274));
                    var if_res1790 = loop3272(M1.unsafe_fx_plus_(i3273, 1));
                } else {
                    var if_res1790 = M0.rvoid();
                }
                return if_res1790;
            };
            loop3272(0);
            generic_sort_by_key3148(work_vec3271, less_than_p3265, n3268, M1.unsafe_car);
            var loop3275 = function(i3276) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.unsafe_fx_lt_(i3276, n3268) !== false) {
                    M1.unsafe_vector_set_bang_(dst_vec3269, M1.unsafe_fx_plus_(i3276, dst_start3270), M1.unsafe_cdr(M1.unsafe_vector_ref(work_vec3271, i3276)));
                    var if_res1791 = loop3275(M1.unsafe_fx_plus_(i3276, 1));
                } else {
                    var if_res1791 = M0.rvoid();
                }
                return if_res1791;
            };
            var if_res1809 = loop3275(0);
        } else {
            var loop3277 = function(prev_val3278, next_index3279) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var or_part3280 = M1.unsafe_fx_eq_(next_index3279, end3267);
                if (or_part3280 !== false) {
                    var if_res1794 = or_part3280;
                } else {
                    var next_val3281 = M1.unsafe_vector_ref(vec3264, next_index3279);
                    if (false !== false) {
                        var if_res1792 = less_than_p3265(false(next_val3281), false(prev_val3278));
                    } else {
                        var if_res1792 = less_than_p3265(next_val3281, prev_val3278);
                    }
                    if (M0.not(if_res1792) !== false) {
                        var if_res1793 = loop3277(next_val3281, M1.unsafe_fx_plus_(next_index3279, 1));
                    } else {
                        var if_res1793 = false;
                    }
                    var if_res1794 = if_res1793;
                }
                return if_res1794;
            };
            if (loop3277(M1.unsafe_vector_ref(vec3264, start3266), M1.unsafe_fx_plus_(start3266, 1)) !== false) {
                if (true !== false) {
                    var if_res1795 = M0.vector_copy_bang_(dst_vec3269, dst_start3270, vec3264, start3266, end3267);
                } else {
                    var if_res1795 = M0.rvoid();
                }
                var if_res1808 = if_res1795;
            } else {
                if (M1.unsafe_fx_lt__eq_(n3268, 3) !== false) {
                    if (true !== false) {
                        var if_res1796 = M0.vector_copy_bang_(dst_vec3269, dst_start3270, vec3264, start3266, end3267);
                    } else {
                        var if_res1796 = M0.rvoid();
                    }
                    if_res1796;
                    if (M1.unsafe_fx_eq_(n3268, 1) !== false) {
                        var if_res1806 = M0.rvoid();
                    } else {
                        if (M1.unsafe_fx_eq_(n3268, 2) !== false) {
                            var tmp3282 = M1.unsafe_vector_ref(dst_vec3269, M1.unsafe_fx_plus_(dst_start3270, 0));
                            M1.unsafe_vector_set_bang_(dst_vec3269, M1.unsafe_fx_plus_(dst_start3270, 0), M1.unsafe_vector_ref(dst_vec3269, M1.unsafe_fx_plus_(dst_start3270, 1)));
                            var if_res1805 = M1.unsafe_vector_set_bang_(dst_vec3269, M1.unsafe_fx_plus_(dst_start3270, 1), tmp3282);
                        } else {
                            var a3283 = M1.unsafe_vector_ref(dst_vec3269, M1.unsafe_fx_plus_(dst_start3270, 0));
                            var b3284 = M1.unsafe_vector_ref(dst_vec3269, M1.unsafe_fx_plus_(dst_start3270, 1));
                            var c3285 = M1.unsafe_vector_ref(dst_vec3269, M1.unsafe_fx_plus_(dst_start3270, 2));
                            if (false !== false) {
                                var if_res1797 = less_than_p3265(false(b3284), false(a3283));
                            } else {
                                var if_res1797 = less_than_p3265(b3284, a3283);
                            }
                            if (if_res1797 !== false) {
                                if (false !== false) {
                                    var if_res1798 = less_than_p3265(false(c3285), false(b3284));
                                } else {
                                    var if_res1798 = less_than_p3265(c3285, b3284);
                                }
                                if (if_res1798 !== false) {
                                    M1.unsafe_vector_set_bang_(dst_vec3269, M1.unsafe_fx_plus_(dst_start3270, 0), c3285);
                                    var if_res1801 = M1.unsafe_vector_set_bang_(dst_vec3269, M1.unsafe_fx_plus_(dst_start3270, 2), a3283);
                                } else {
                                    if (false !== false) {
                                        var if_res1799 = less_than_p3265(false(c3285), false(a3283));
                                    } else {
                                        var if_res1799 = less_than_p3265(c3285, a3283);
                                    }
                                    if (if_res1799 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3269, M1.unsafe_fx_plus_(dst_start3270, 0), b3284);
                                        M1.unsafe_vector_set_bang_(dst_vec3269, M1.unsafe_fx_plus_(dst_start3270, 1), c3285);
                                        var if_res1800 = M1.unsafe_vector_set_bang_(dst_vec3269, M1.unsafe_fx_plus_(dst_start3270, 2), a3283);
                                    } else {
                                        M1.unsafe_vector_set_bang_(dst_vec3269, M1.unsafe_fx_plus_(dst_start3270, 0), b3284);
                                        var if_res1800 = M1.unsafe_vector_set_bang_(dst_vec3269, M1.unsafe_fx_plus_(dst_start3270, 1), a3283);
                                    }
                                    var if_res1801 = if_res1800;
                                }
                                var if_res1804 = if_res1801;
                            } else {
                                if (false !== false) {
                                    var if_res1802 = less_than_p3265(false(c3285), false(a3283));
                                } else {
                                    var if_res1802 = less_than_p3265(c3285, a3283);
                                }
                                if (if_res1802 !== false) {
                                    M1.unsafe_vector_set_bang_(dst_vec3269, M1.unsafe_fx_plus_(dst_start3270, 0), c3285);
                                    M1.unsafe_vector_set_bang_(dst_vec3269, M1.unsafe_fx_plus_(dst_start3270, 1), a3283);
                                    var if_res1803 = M1.unsafe_vector_set_bang_(dst_vec3269, M1.unsafe_fx_plus_(dst_start3270, 2), b3284);
                                } else {
                                    M1.unsafe_vector_set_bang_(dst_vec3269, M1.unsafe_fx_plus_(dst_start3270, 1), c3285);
                                    var if_res1803 = M1.unsafe_vector_set_bang_(dst_vec3269, M1.unsafe_fx_plus_(dst_start3270, 2), b3284);
                                }
                                var if_res1804 = if_res1803;
                            }
                            var if_res1805 = if_res1804;
                        }
                        var if_res1806 = if_res1805;
                    }
                    var if_res1807 = if_res1806;
                } else {
                    var work_vec3286 = M0.make_vector(n3268 + M0.ceiling(n3268 / 2), false);
                    M0.vector_copy_bang_(work_vec3286, 0, vec3264, start3266, end3267);
                    generic_sort3092(work_vec3286, less_than_p3265, n3268);
                    var if_res1807 = M0.vector_copy_bang_(dst_vec3269, dst_start3270, work_vec3286, 0, n3268);
                }
                var if_res1808 = if_res1807;
            }
            var if_res1809 = if_res1808;
        }
        var if_res1810 = if_res1809;
    }
    if_res1810;
    if (true !== false) {
        var if_res1811 = dst_vec3269;
    } else {
        var if_res1811 = M0.rvoid();
    }
    return if_res1811;
};
var cl1786 = function(vec3287, less_than_p3288, start3289, end3290, getkey3291, cache_keys_p3292) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (getkey3291 !== false) {
        var if_res1812 = M0.not(M0.eq_p(M0.values, getkey3291));
    } else {
        var if_res1812 = false;
    }
    if (if_res1812 !== false) {
        var n3293 = end3290 - start3289;
        if (true !== false) {
            var if_res1813 = M0.make_vector(n3293);
        } else {
            var if_res1813 = vec3287;
        }
        var dst_vec3294 = if_res1813;
        if (true !== false) {
            var if_res1814 = 0;
        } else {
            var if_res1814 = start3289;
        }
        var dst_start3295 = if_res1814;
        if (M1.unsafe_fx_eq_(n3293, 0) !== false) {
            var if_res1835 = M0.rvoid();
        } else {
            if (cache_keys_p3292 !== false) {
                var work_vec3296 = M0.make_vector(n3293 + M0.ceiling(n3293 / 2), true);
                var loop3297 = function(i3298) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(i3298, n3293) !== false) {
                        var x3299 = M1.unsafe_vector_ref(vec3287, M1.unsafe_fx_plus_(i3298, start3289));
                        M1.unsafe_vector_set_bang_(work_vec3296, i3298, M0.cons(getkey3291(x3299), x3299));
                        var if_res1815 = loop3297(M1.unsafe_fx_plus_(i3298, 1));
                    } else {
                        var if_res1815 = M0.rvoid();
                    }
                    return if_res1815;
                };
                loop3297(0);
                generic_sort_by_key3148(work_vec3296, less_than_p3288, n3293, M1.unsafe_car);
                var loop3300 = function(i3301) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(i3301, n3293) !== false) {
                        M1.unsafe_vector_set_bang_(dst_vec3294, M1.unsafe_fx_plus_(i3301, dst_start3295), M1.unsafe_cdr(M1.unsafe_vector_ref(work_vec3296, i3301)));
                        var if_res1816 = loop3300(M1.unsafe_fx_plus_(i3301, 1));
                    } else {
                        var if_res1816 = M0.rvoid();
                    }
                    return if_res1816;
                };
                var if_res1834 = loop3300(0);
            } else {
                var loop3302 = function(prev_val3303, next_index3304) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var or_part3305 = M1.unsafe_fx_eq_(next_index3304, end3290);
                    if (or_part3305 !== false) {
                        var if_res1819 = or_part3305;
                    } else {
                        var next_val3306 = M1.unsafe_vector_ref(vec3287, next_index3304);
                        if (getkey3291 !== false) {
                            var if_res1817 = less_than_p3288(getkey3291(next_val3306), getkey3291(prev_val3303));
                        } else {
                            var if_res1817 = less_than_p3288(next_val3306, prev_val3303);
                        }
                        if (M0.not(if_res1817) !== false) {
                            var if_res1818 = loop3302(next_val3306, M1.unsafe_fx_plus_(next_index3304, 1));
                        } else {
                            var if_res1818 = false;
                        }
                        var if_res1819 = if_res1818;
                    }
                    return if_res1819;
                };
                if (loop3302(M1.unsafe_vector_ref(vec3287, start3289), M1.unsafe_fx_plus_(start3289, 1)) !== false) {
                    if (true !== false) {
                        var if_res1820 = M0.vector_copy_bang_(dst_vec3294, dst_start3295, vec3287, start3289, end3290);
                    } else {
                        var if_res1820 = M0.rvoid();
                    }
                    var if_res1833 = if_res1820;
                } else {
                    if (M1.unsafe_fx_lt__eq_(n3293, 3) !== false) {
                        if (true !== false) {
                            var if_res1821 = M0.vector_copy_bang_(dst_vec3294, dst_start3295, vec3287, start3289, end3290);
                        } else {
                            var if_res1821 = M0.rvoid();
                        }
                        if_res1821;
                        if (M1.unsafe_fx_eq_(n3293, 1) !== false) {
                            var if_res1831 = M0.rvoid();
                        } else {
                            if (M1.unsafe_fx_eq_(n3293, 2) !== false) {
                                var tmp3307 = M1.unsafe_vector_ref(dst_vec3294, M1.unsafe_fx_plus_(dst_start3295, 0));
                                M1.unsafe_vector_set_bang_(dst_vec3294, M1.unsafe_fx_plus_(dst_start3295, 0), M1.unsafe_vector_ref(dst_vec3294, M1.unsafe_fx_plus_(dst_start3295, 1)));
                                var if_res1830 = M1.unsafe_vector_set_bang_(dst_vec3294, M1.unsafe_fx_plus_(dst_start3295, 1), tmp3307);
                            } else {
                                var a3308 = M1.unsafe_vector_ref(dst_vec3294, M1.unsafe_fx_plus_(dst_start3295, 0));
                                var b3309 = M1.unsafe_vector_ref(dst_vec3294, M1.unsafe_fx_plus_(dst_start3295, 1));
                                var c3310 = M1.unsafe_vector_ref(dst_vec3294, M1.unsafe_fx_plus_(dst_start3295, 2));
                                if (getkey3291 !== false) {
                                    var if_res1822 = less_than_p3288(getkey3291(b3309), getkey3291(a3308));
                                } else {
                                    var if_res1822 = less_than_p3288(b3309, a3308);
                                }
                                if (if_res1822 !== false) {
                                    if (getkey3291 !== false) {
                                        var if_res1823 = less_than_p3288(getkey3291(c3310), getkey3291(b3309));
                                    } else {
                                        var if_res1823 = less_than_p3288(c3310, b3309);
                                    }
                                    if (if_res1823 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3294, M1.unsafe_fx_plus_(dst_start3295, 0), c3310);
                                        var if_res1826 = M1.unsafe_vector_set_bang_(dst_vec3294, M1.unsafe_fx_plus_(dst_start3295, 2), a3308);
                                    } else {
                                        if (getkey3291 !== false) {
                                            var if_res1824 = less_than_p3288(getkey3291(c3310), getkey3291(a3308));
                                        } else {
                                            var if_res1824 = less_than_p3288(c3310, a3308);
                                        }
                                        if (if_res1824 !== false) {
                                            M1.unsafe_vector_set_bang_(dst_vec3294, M1.unsafe_fx_plus_(dst_start3295, 0), b3309);
                                            M1.unsafe_vector_set_bang_(dst_vec3294, M1.unsafe_fx_plus_(dst_start3295, 1), c3310);
                                            var if_res1825 = M1.unsafe_vector_set_bang_(dst_vec3294, M1.unsafe_fx_plus_(dst_start3295, 2), a3308);
                                        } else {
                                            M1.unsafe_vector_set_bang_(dst_vec3294, M1.unsafe_fx_plus_(dst_start3295, 0), b3309);
                                            var if_res1825 = M1.unsafe_vector_set_bang_(dst_vec3294, M1.unsafe_fx_plus_(dst_start3295, 1), a3308);
                                        }
                                        var if_res1826 = if_res1825;
                                    }
                                    var if_res1829 = if_res1826;
                                } else {
                                    if (getkey3291 !== false) {
                                        var if_res1827 = less_than_p3288(getkey3291(c3310), getkey3291(a3308));
                                    } else {
                                        var if_res1827 = less_than_p3288(c3310, a3308);
                                    }
                                    if (if_res1827 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3294, M1.unsafe_fx_plus_(dst_start3295, 0), c3310);
                                        M1.unsafe_vector_set_bang_(dst_vec3294, M1.unsafe_fx_plus_(dst_start3295, 1), a3308);
                                        var if_res1828 = M1.unsafe_vector_set_bang_(dst_vec3294, M1.unsafe_fx_plus_(dst_start3295, 2), b3309);
                                    } else {
                                        M1.unsafe_vector_set_bang_(dst_vec3294, M1.unsafe_fx_plus_(dst_start3295, 1), c3310);
                                        var if_res1828 = M1.unsafe_vector_set_bang_(dst_vec3294, M1.unsafe_fx_plus_(dst_start3295, 2), b3309);
                                    }
                                    var if_res1829 = if_res1828;
                                }
                                var if_res1830 = if_res1829;
                            }
                            var if_res1831 = if_res1830;
                        }
                        var if_res1832 = if_res1831;
                    } else {
                        var work_vec3311 = M0.make_vector(n3293 + M0.ceiling(n3293 / 2), false);
                        M0.vector_copy_bang_(work_vec3311, 0, vec3287, start3289, end3290);
                        generic_sort_by_key3148(work_vec3311, less_than_p3288, n3293, getkey3291);
                        var if_res1832 = M0.vector_copy_bang_(dst_vec3294, dst_start3295, work_vec3311, 0, n3293);
                    }
                    var if_res1833 = if_res1832;
                }
                var if_res1834 = if_res1833;
            }
            var if_res1835 = if_res1834;
        }
        if_res1835;
        if (true !== false) {
            var if_res1836 = dst_vec3294;
        } else {
            var if_res1836 = M0.rvoid();
        }
        var if_res1837 = if_res1836;
    } else {
        var if_res1837 = vector_sort(vec3287, less_than_p3288, start3289, end3290);
    }
    return if_res1837;
};
var temp1838 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1787 = {
        '4': cl1785,
        '6': cl1786
    } [arguments.length];
    if (fixed_lam1787 !== undefined) {
        return fixed_lam1787.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4, 6]);
var cl1732 = function(vec3312, less_than_p3313, start3314, end3315) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n3316 = end3315 - start3314;
    if (false !== false) {
        var if_res1735 = M0.make_vector(n3316);
    } else {
        var if_res1735 = vec3312;
    }
    var dst_vec3317 = if_res1735;
    if (false !== false) {
        var if_res1736 = 0;
    } else {
        var if_res1736 = start3314;
    }
    var dst_start3318 = if_res1736;
    if (M1.unsafe_fx_eq_(n3316, 0) !== false) {
        var if_res1757 = M0.rvoid();
    } else {
        if (false !== false) {
            var work_vec3319 = M0.make_vector(n3316 + M0.ceiling(n3316 / 2), true);
            var loop3320 = function(i3321) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.unsafe_fx_lt_(i3321, n3316) !== false) {
                    var x3322 = M1.unsafe_vector_ref(vec3312, M1.unsafe_fx_plus_(i3321, start3314));
                    M1.unsafe_vector_set_bang_(work_vec3319, i3321, M0.cons(false(x3322), x3322));
                    var if_res1737 = loop3320(M1.unsafe_fx_plus_(i3321, 1));
                } else {
                    var if_res1737 = M0.rvoid();
                }
                return if_res1737;
            };
            loop3320(0);
            generic_sort_by_key3148(work_vec3319, less_than_p3313, n3316, M1.unsafe_car);
            var loop3323 = function(i3324) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.unsafe_fx_lt_(i3324, n3316) !== false) {
                    M1.unsafe_vector_set_bang_(dst_vec3317, M1.unsafe_fx_plus_(i3324, dst_start3318), M1.unsafe_cdr(M1.unsafe_vector_ref(work_vec3319, i3324)));
                    var if_res1738 = loop3323(M1.unsafe_fx_plus_(i3324, 1));
                } else {
                    var if_res1738 = M0.rvoid();
                }
                return if_res1738;
            };
            var if_res1756 = loop3323(0);
        } else {
            var loop3325 = function(prev_val3326, next_index3327) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var or_part3328 = M1.unsafe_fx_eq_(next_index3327, end3315);
                if (or_part3328 !== false) {
                    var if_res1741 = or_part3328;
                } else {
                    var next_val3329 = M1.unsafe_vector_ref(vec3312, next_index3327);
                    if (false !== false) {
                        var if_res1739 = less_than_p3313(false(next_val3329), false(prev_val3326));
                    } else {
                        var if_res1739 = less_than_p3313(next_val3329, prev_val3326);
                    }
                    if (M0.not(if_res1739) !== false) {
                        var if_res1740 = loop3325(next_val3329, M1.unsafe_fx_plus_(next_index3327, 1));
                    } else {
                        var if_res1740 = false;
                    }
                    var if_res1741 = if_res1740;
                }
                return if_res1741;
            };
            if (loop3325(M1.unsafe_vector_ref(vec3312, start3314), M1.unsafe_fx_plus_(start3314, 1)) !== false) {
                if (false !== false) {
                    var if_res1742 = M0.vector_copy_bang_(dst_vec3317, dst_start3318, vec3312, start3314, end3315);
                } else {
                    var if_res1742 = M0.rvoid();
                }
                var if_res1755 = if_res1742;
            } else {
                if (M1.unsafe_fx_lt__eq_(n3316, 3) !== false) {
                    if (false !== false) {
                        var if_res1743 = M0.vector_copy_bang_(dst_vec3317, dst_start3318, vec3312, start3314, end3315);
                    } else {
                        var if_res1743 = M0.rvoid();
                    }
                    if_res1743;
                    if (M1.unsafe_fx_eq_(n3316, 1) !== false) {
                        var if_res1753 = M0.rvoid();
                    } else {
                        if (M1.unsafe_fx_eq_(n3316, 2) !== false) {
                            var tmp3330 = M1.unsafe_vector_ref(dst_vec3317, M1.unsafe_fx_plus_(dst_start3318, 0));
                            M1.unsafe_vector_set_bang_(dst_vec3317, M1.unsafe_fx_plus_(dst_start3318, 0), M1.unsafe_vector_ref(dst_vec3317, M1.unsafe_fx_plus_(dst_start3318, 1)));
                            var if_res1752 = M1.unsafe_vector_set_bang_(dst_vec3317, M1.unsafe_fx_plus_(dst_start3318, 1), tmp3330);
                        } else {
                            var a3331 = M1.unsafe_vector_ref(dst_vec3317, M1.unsafe_fx_plus_(dst_start3318, 0));
                            var b3332 = M1.unsafe_vector_ref(dst_vec3317, M1.unsafe_fx_plus_(dst_start3318, 1));
                            var c3333 = M1.unsafe_vector_ref(dst_vec3317, M1.unsafe_fx_plus_(dst_start3318, 2));
                            if (false !== false) {
                                var if_res1744 = less_than_p3313(false(b3332), false(a3331));
                            } else {
                                var if_res1744 = less_than_p3313(b3332, a3331);
                            }
                            if (if_res1744 !== false) {
                                if (false !== false) {
                                    var if_res1745 = less_than_p3313(false(c3333), false(b3332));
                                } else {
                                    var if_res1745 = less_than_p3313(c3333, b3332);
                                }
                                if (if_res1745 !== false) {
                                    M1.unsafe_vector_set_bang_(dst_vec3317, M1.unsafe_fx_plus_(dst_start3318, 0), c3333);
                                    var if_res1748 = M1.unsafe_vector_set_bang_(dst_vec3317, M1.unsafe_fx_plus_(dst_start3318, 2), a3331);
                                } else {
                                    if (false !== false) {
                                        var if_res1746 = less_than_p3313(false(c3333), false(a3331));
                                    } else {
                                        var if_res1746 = less_than_p3313(c3333, a3331);
                                    }
                                    if (if_res1746 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3317, M1.unsafe_fx_plus_(dst_start3318, 0), b3332);
                                        M1.unsafe_vector_set_bang_(dst_vec3317, M1.unsafe_fx_plus_(dst_start3318, 1), c3333);
                                        var if_res1747 = M1.unsafe_vector_set_bang_(dst_vec3317, M1.unsafe_fx_plus_(dst_start3318, 2), a3331);
                                    } else {
                                        M1.unsafe_vector_set_bang_(dst_vec3317, M1.unsafe_fx_plus_(dst_start3318, 0), b3332);
                                        var if_res1747 = M1.unsafe_vector_set_bang_(dst_vec3317, M1.unsafe_fx_plus_(dst_start3318, 1), a3331);
                                    }
                                    var if_res1748 = if_res1747;
                                }
                                var if_res1751 = if_res1748;
                            } else {
                                if (false !== false) {
                                    var if_res1749 = less_than_p3313(false(c3333), false(a3331));
                                } else {
                                    var if_res1749 = less_than_p3313(c3333, a3331);
                                }
                                if (if_res1749 !== false) {
                                    M1.unsafe_vector_set_bang_(dst_vec3317, M1.unsafe_fx_plus_(dst_start3318, 0), c3333);
                                    M1.unsafe_vector_set_bang_(dst_vec3317, M1.unsafe_fx_plus_(dst_start3318, 1), a3331);
                                    var if_res1750 = M1.unsafe_vector_set_bang_(dst_vec3317, M1.unsafe_fx_plus_(dst_start3318, 2), b3332);
                                } else {
                                    M1.unsafe_vector_set_bang_(dst_vec3317, M1.unsafe_fx_plus_(dst_start3318, 1), c3333);
                                    var if_res1750 = M1.unsafe_vector_set_bang_(dst_vec3317, M1.unsafe_fx_plus_(dst_start3318, 2), b3332);
                                }
                                var if_res1751 = if_res1750;
                            }
                            var if_res1752 = if_res1751;
                        }
                        var if_res1753 = if_res1752;
                    }
                    var if_res1754 = if_res1753;
                } else {
                    var work_vec3334 = M0.make_vector(n3316 + M0.ceiling(n3316 / 2), false);
                    M0.vector_copy_bang_(work_vec3334, 0, vec3312, start3314, end3315);
                    generic_sort3092(work_vec3334, less_than_p3313, n3316);
                    var if_res1754 = M0.vector_copy_bang_(dst_vec3317, dst_start3318, work_vec3334, 0, n3316);
                }
                var if_res1755 = if_res1754;
            }
            var if_res1756 = if_res1755;
        }
        var if_res1757 = if_res1756;
    }
    if_res1757;
    if (false !== false) {
        var if_res1758 = dst_vec3317;
    } else {
        var if_res1758 = M0.rvoid();
    }
    return if_res1758;
};
var cl1733 = function(vec3335, less_than_p3336, start3337, end3338, getkey3339, cache_keys_p3340) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (getkey3339 !== false) {
        var if_res1759 = M0.not(M0.eq_p(M0.values, getkey3339));
    } else {
        var if_res1759 = false;
    }
    if (if_res1759 !== false) {
        var n3341 = end3338 - start3337;
        if (false !== false) {
            var if_res1760 = M0.make_vector(n3341);
        } else {
            var if_res1760 = vec3335;
        }
        var dst_vec3342 = if_res1760;
        if (false !== false) {
            var if_res1761 = 0;
        } else {
            var if_res1761 = start3337;
        }
        var dst_start3343 = if_res1761;
        if (M1.unsafe_fx_eq_(n3341, 0) !== false) {
            var if_res1782 = M0.rvoid();
        } else {
            if (cache_keys_p3340 !== false) {
                var work_vec3344 = M0.make_vector(n3341 + M0.ceiling(n3341 / 2), true);
                var loop3345 = function(i3346) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(i3346, n3341) !== false) {
                        var x3347 = M1.unsafe_vector_ref(vec3335, M1.unsafe_fx_plus_(i3346, start3337));
                        M1.unsafe_vector_set_bang_(work_vec3344, i3346, M0.cons(getkey3339(x3347), x3347));
                        var if_res1762 = loop3345(M1.unsafe_fx_plus_(i3346, 1));
                    } else {
                        var if_res1762 = M0.rvoid();
                    }
                    return if_res1762;
                };
                loop3345(0);
                generic_sort_by_key3148(work_vec3344, less_than_p3336, n3341, M1.unsafe_car);
                var loop3348 = function(i3349) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(i3349, n3341) !== false) {
                        M1.unsafe_vector_set_bang_(dst_vec3342, M1.unsafe_fx_plus_(i3349, dst_start3343), M1.unsafe_cdr(M1.unsafe_vector_ref(work_vec3344, i3349)));
                        var if_res1763 = loop3348(M1.unsafe_fx_plus_(i3349, 1));
                    } else {
                        var if_res1763 = M0.rvoid();
                    }
                    return if_res1763;
                };
                var if_res1781 = loop3348(0);
            } else {
                var loop3350 = function(prev_val3351, next_index3352) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var or_part3353 = M1.unsafe_fx_eq_(next_index3352, end3338);
                    if (or_part3353 !== false) {
                        var if_res1766 = or_part3353;
                    } else {
                        var next_val3354 = M1.unsafe_vector_ref(vec3335, next_index3352);
                        if (getkey3339 !== false) {
                            var if_res1764 = less_than_p3336(getkey3339(next_val3354), getkey3339(prev_val3351));
                        } else {
                            var if_res1764 = less_than_p3336(next_val3354, prev_val3351);
                        }
                        if (M0.not(if_res1764) !== false) {
                            var if_res1765 = loop3350(next_val3354, M1.unsafe_fx_plus_(next_index3352, 1));
                        } else {
                            var if_res1765 = false;
                        }
                        var if_res1766 = if_res1765;
                    }
                    return if_res1766;
                };
                if (loop3350(M1.unsafe_vector_ref(vec3335, start3337), M1.unsafe_fx_plus_(start3337, 1)) !== false) {
                    if (false !== false) {
                        var if_res1767 = M0.vector_copy_bang_(dst_vec3342, dst_start3343, vec3335, start3337, end3338);
                    } else {
                        var if_res1767 = M0.rvoid();
                    }
                    var if_res1780 = if_res1767;
                } else {
                    if (M1.unsafe_fx_lt__eq_(n3341, 3) !== false) {
                        if (false !== false) {
                            var if_res1768 = M0.vector_copy_bang_(dst_vec3342, dst_start3343, vec3335, start3337, end3338);
                        } else {
                            var if_res1768 = M0.rvoid();
                        }
                        if_res1768;
                        if (M1.unsafe_fx_eq_(n3341, 1) !== false) {
                            var if_res1778 = M0.rvoid();
                        } else {
                            if (M1.unsafe_fx_eq_(n3341, 2) !== false) {
                                var tmp3355 = M1.unsafe_vector_ref(dst_vec3342, M1.unsafe_fx_plus_(dst_start3343, 0));
                                M1.unsafe_vector_set_bang_(dst_vec3342, M1.unsafe_fx_plus_(dst_start3343, 0), M1.unsafe_vector_ref(dst_vec3342, M1.unsafe_fx_plus_(dst_start3343, 1)));
                                var if_res1777 = M1.unsafe_vector_set_bang_(dst_vec3342, M1.unsafe_fx_plus_(dst_start3343, 1), tmp3355);
                            } else {
                                var a3356 = M1.unsafe_vector_ref(dst_vec3342, M1.unsafe_fx_plus_(dst_start3343, 0));
                                var b3357 = M1.unsafe_vector_ref(dst_vec3342, M1.unsafe_fx_plus_(dst_start3343, 1));
                                var c3358 = M1.unsafe_vector_ref(dst_vec3342, M1.unsafe_fx_plus_(dst_start3343, 2));
                                if (getkey3339 !== false) {
                                    var if_res1769 = less_than_p3336(getkey3339(b3357), getkey3339(a3356));
                                } else {
                                    var if_res1769 = less_than_p3336(b3357, a3356);
                                }
                                if (if_res1769 !== false) {
                                    if (getkey3339 !== false) {
                                        var if_res1770 = less_than_p3336(getkey3339(c3358), getkey3339(b3357));
                                    } else {
                                        var if_res1770 = less_than_p3336(c3358, b3357);
                                    }
                                    if (if_res1770 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3342, M1.unsafe_fx_plus_(dst_start3343, 0), c3358);
                                        var if_res1773 = M1.unsafe_vector_set_bang_(dst_vec3342, M1.unsafe_fx_plus_(dst_start3343, 2), a3356);
                                    } else {
                                        if (getkey3339 !== false) {
                                            var if_res1771 = less_than_p3336(getkey3339(c3358), getkey3339(a3356));
                                        } else {
                                            var if_res1771 = less_than_p3336(c3358, a3356);
                                        }
                                        if (if_res1771 !== false) {
                                            M1.unsafe_vector_set_bang_(dst_vec3342, M1.unsafe_fx_plus_(dst_start3343, 0), b3357);
                                            M1.unsafe_vector_set_bang_(dst_vec3342, M1.unsafe_fx_plus_(dst_start3343, 1), c3358);
                                            var if_res1772 = M1.unsafe_vector_set_bang_(dst_vec3342, M1.unsafe_fx_plus_(dst_start3343, 2), a3356);
                                        } else {
                                            M1.unsafe_vector_set_bang_(dst_vec3342, M1.unsafe_fx_plus_(dst_start3343, 0), b3357);
                                            var if_res1772 = M1.unsafe_vector_set_bang_(dst_vec3342, M1.unsafe_fx_plus_(dst_start3343, 1), a3356);
                                        }
                                        var if_res1773 = if_res1772;
                                    }
                                    var if_res1776 = if_res1773;
                                } else {
                                    if (getkey3339 !== false) {
                                        var if_res1774 = less_than_p3336(getkey3339(c3358), getkey3339(a3356));
                                    } else {
                                        var if_res1774 = less_than_p3336(c3358, a3356);
                                    }
                                    if (if_res1774 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3342, M1.unsafe_fx_plus_(dst_start3343, 0), c3358);
                                        M1.unsafe_vector_set_bang_(dst_vec3342, M1.unsafe_fx_plus_(dst_start3343, 1), a3356);
                                        var if_res1775 = M1.unsafe_vector_set_bang_(dst_vec3342, M1.unsafe_fx_plus_(dst_start3343, 2), b3357);
                                    } else {
                                        M1.unsafe_vector_set_bang_(dst_vec3342, M1.unsafe_fx_plus_(dst_start3343, 1), c3358);
                                        var if_res1775 = M1.unsafe_vector_set_bang_(dst_vec3342, M1.unsafe_fx_plus_(dst_start3343, 2), b3357);
                                    }
                                    var if_res1776 = if_res1775;
                                }
                                var if_res1777 = if_res1776;
                            }
                            var if_res1778 = if_res1777;
                        }
                        var if_res1779 = if_res1778;
                    } else {
                        var work_vec3359 = M0.make_vector(n3341 + M0.ceiling(n3341 / 2), false);
                        M0.vector_copy_bang_(work_vec3359, 0, vec3335, start3337, end3338);
                        generic_sort_by_key3148(work_vec3359, less_than_p3336, n3341, getkey3339);
                        var if_res1779 = M0.vector_copy_bang_(dst_vec3342, dst_start3343, work_vec3359, 0, n3341);
                    }
                    var if_res1780 = if_res1779;
                }
                var if_res1781 = if_res1780;
            }
            var if_res1782 = if_res1781;
        }
        if_res1782;
        if (false !== false) {
            var if_res1783 = dst_vec3342;
        } else {
            var if_res1783 = M0.rvoid();
        }
        var if_res1784 = if_res1783;
    } else {
        var if_res1784 = vector_sort_bang_(vec3335, less_than_p3336, start3337, end3338);
    }
    return if_res1784;
};
var let_result1890 = M0.values(temp1889, temp1838, $rjs_core.attachProcedureArity(function() {
    var fixed_lam1734 = {
        '4': cl1732,
        '6': cl1733
    } [arguments.length];
    if (fixed_lam1734 !== undefined) {
        return fixed_lam1734.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4, 6]));
var sort = let_result1890.getAt(0);
var vector_sort = let_result1890.getAt(1);
var vector_sort_bang_ = let_result1890.getAt(2);
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    vector_sort_bang_,
    vector_sort,
    sort
};