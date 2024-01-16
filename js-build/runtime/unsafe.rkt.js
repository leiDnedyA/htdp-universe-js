import * as $rjs_core from './core.js';
import * as Core from "./core.js";
var unsafe_fx_plus_ = function(a78, b79) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a78 + b79) | 0;
};
var unsafe_fx_ = function(a80, b81) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a80 - b81) | 0;
};
var unsafe_fx_times_ = function(a82, b83) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a82 * b83) | 0;
};
var unsafe_fxquotient = function(a84, b85) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a84 / b85) | 0;
};
var unsafe_fxremainder = function(a86, b87) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a86 % b87) | 0;
};
var unsafe_fxmodulo = function(a88, b89) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var remainder90 = a88 % b89;
    if ((remainder90 >= 0) !== false) {
        var if_res14 = remainder90;
    } else {
        var if_res14 = remainder90 + b89;
    }
    return Math.floor(if_res14);
};
var unsafe_fxabs = function(a91) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Math.abs(a91);
};
var unsafe_fx_eq_ = function(a92, b93) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a92 === b93;
};
var unsafe_fx_lt_ = function(a94, b95) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a94 < b95;
};
var unsafe_fx_lt__eq_ = function(a96, b97) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a96 <= b97;
};
var unsafe_fx_gt_ = function(a98, b99) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a98 > b99;
};
var unsafe_fx_gt__eq_ = function(a100, b101) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a100 >= b101;
};
var unsafe_fxmin = function(a102, b103) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a102 < b103) !== false) {
        var if_res15 = a102;
    } else {
        var if_res15 = b103;
    }
    return if_res15;
};
var unsafe_fxmax = function(a104, b105) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a104 > b105) !== false) {
        var if_res16 = b105;
    } else {
        var if_res16 = a104;
    }
    return if_res16;
};
var unsafe_fl_eq_ = function(a106, b107) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a106 === b107;
};
var unsafe_fl_lt_ = function(a108, b109) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a108 < b109;
};
var unsafe_fl_lt__eq_ = function(a110, b111) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a110 <= b111;
};
var unsafe_fl_gt_ = function(a112, b113) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a112 > b113;
};
var unsafe_fl_gt__eq_ = function(a114, b115) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a114 >= b115;
};
var unsafe_flmin = function(a116, b117) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a116 < b117) !== false) {
        var if_res17 = a116;
    } else {
        var if_res17 = b117;
    }
    return if_res17;
};
var unsafe_flmax = function(a118, b119) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a118 > b119) !== false) {
        var if_res18 = b119;
    } else {
        var if_res18 = a118;
    }
    return if_res18;
};
var unsafe_fxrshift = function(a120, b121) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a120 >> b121) | 0;
};
var unsafe_fxlshift = function(a122, b123) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a122 << b123) | 0;
};
var unsafe_fxand = function(a124, b125) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a124 && b125) | 0;
};
var unsafe_fxior = function(a126, b127) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a126 || b127) | 0;
};
var unsafe_fxxor = function(a128, b129) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a128 ^ b129) | 0;
};
var unsafe_fxnot = Core.bitwiseNot;
var unsafe_car = function(v130) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v130.hd;
};
var unsafe_cdr = function(v131) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v131.tl;
};
var unsafe_mcar = function(v132) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v132.hd;
};
var unsafe_mcdr = function(v133) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v133.tl;
};
var unsafe_set_mcar_bang_ = function(p134, v135) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return p134.setCar(v135);
};
var unsafe_set_mcdr_bang_ = function(p136, v137) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return p136.setCdr(v137);
};
var unsafe_cons_list = function(v138, rest139) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Core.Pair.make(v138, rest139);
};
var unsafe_struct_ref = function(v140, k141) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v140._fields[k141];
};
var unsafe_vector_ref = function(v142, k143) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v142.ref(k143);
};
var unsafe_vector_set_bang_ = function(v144, k145, val146) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v144.set(k145, val146);
};
var unsafe_vector_length = function(v147) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v147.length();
};
var unsafe_vector_times__ref = function(v148, k149) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v148.ref(k149);
};
var unsafe_vector_times__set_bang_ = function(v150, k151, val152) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v150.set(k151, val152);
};
var unsafe_vector_times__length = function(v153) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v153.length();
};
var unsafe_immutable_hash_iterate_first = function(h154) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h154.iterateFirst();
};
var unsafe_immutable_hash_iterate_next = function(h155, i156) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h155.iterateNext(i156);
};
var unsafe_immutable_hash_iterate_key = function(h157, i158) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h157.iterateKey(i158);
};
var unsafe_immutable_hash_iterate_value = function(h159, i160) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h159.iterateValue(i160);
};
var unsafe_immutable_hash_iterate_key_plus_value = function(h161, i162) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h161.iterateKeyValue(i162);
};
var unsafe_immutable_hash_iterate_pair = function(h163, i164) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h163.iteratePair(i164);
};
var unsafe_mutable_hash_iterate_first = function(h165) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h165.iterateFirst();
};
var unsafe_mutable_hash_iterate_next = function(h166, i167) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h166.iterateNext(i167);
};
var unsafe_mutable_hash_iterate_key = function(h168, i169) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h168.iterateKey(i169);
};
var unsafe_mutable_hash_iterate_value = function(h170, i171) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h170.iterateValue(i171);
};
var unsafe_mutable_hash_iterate_key_plus_value = function(h172, i173) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h172.iterateKeyValue(i173);
};
var unsafe_mutable_hash_iterate_pair = function(h174, i175) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h174.iteratePair(i175);
};
var unsafe_undefined = Core.theUnsafeUndefined;
var unsafe_make_place_local = Core.Box.make;
var unsafe_place_local_set_bang_ = function(b176, v177) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return b176.set(v177);
};
var unsafe_place_local_ref = function(b178) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return b178.get();
};
var variable_reference_from_unsafe_p = function(v179) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var unsafe_root_continuation_prompt_tag = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Core.Marks.defaultContinuationPromptTag();
};
var unsafe_string_length = function(s180) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return s180.length;
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    unsafe_fx_plus_,
    unsafe_fx_,
    unsafe_fx_times_,
    unsafe_fxquotient,
    unsafe_fxremainder,
    unsafe_fxmodulo,
    unsafe_fxabs,
    unsafe_fx_eq_,
    unsafe_fx_lt_,
    unsafe_fx_lt__eq_,
    unsafe_fx_gt_,
    unsafe_fx_gt__eq_,
    unsafe_fxmin,
    unsafe_fxmax,
    unsafe_fl_eq_,
    unsafe_fl_lt_,
    unsafe_fl_lt__eq_,
    unsafe_fl_gt_,
    unsafe_fl_gt__eq_,
    unsafe_flmin,
    unsafe_flmax,
    unsafe_fxrshift,
    unsafe_fxlshift,
    unsafe_fxand,
    unsafe_fxior,
    unsafe_fxxor,
    unsafe_fxnot,
    unsafe_car,
    unsafe_cdr,
    unsafe_mcar,
    unsafe_mcdr,
    unsafe_set_mcar_bang_,
    unsafe_set_mcdr_bang_,
    unsafe_cons_list,
    unsafe_struct_ref,
    unsafe_vector_ref,
    unsafe_vector_set_bang_,
    unsafe_vector_length,
    unsafe_vector_times__ref,
    unsafe_vector_times__set_bang_,
    unsafe_vector_times__length,
    unsafe_immutable_hash_iterate_first,
    unsafe_immutable_hash_iterate_next,
    unsafe_immutable_hash_iterate_key,
    unsafe_immutable_hash_iterate_value,
    unsafe_immutable_hash_iterate_key_plus_value,
    unsafe_immutable_hash_iterate_pair,
    unsafe_mutable_hash_iterate_first,
    unsafe_mutable_hash_iterate_next,
    unsafe_mutable_hash_iterate_key,
    unsafe_mutable_hash_iterate_value,
    unsafe_mutable_hash_iterate_key_plus_value,
    unsafe_mutable_hash_iterate_pair,
    unsafe_undefined,
    unsafe_make_place_local,
    unsafe_place_local_set_bang_,
    unsafe_place_local_ref,
    variable_reference_from_unsafe_p,
    unsafe_root_continuation_prompt_tag,
    unsafe_string_length
};