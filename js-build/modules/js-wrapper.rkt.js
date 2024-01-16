import * as $rjs_core from '../runtime/core.js';
import * as M0 from "../runtime/kernel.rkt.js";
import * as M1 from "../links/racketscript-compiler/racketscript/interop.rkt.js";
import * as M2 from "./wrapper-utils/type-conversions.rkt.js";
import * as M3 from "../links/racketscript-compiler/racketscript/private/interop.rkt.js";
import * as M4 from "../links/racketscript-extras/racketscript/htdp/image.rkt.js";
import * as M5 from "../links/racketscript-extras/racketscript/htdp/universe.rkt.js";
import * as M6 from "../runtime/unsafe.rkt.js";
var bigBang = $rjs_core.attachProcedureArity(function(init_world1, ...handlers21) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var handlers2 = $rjs_core.Pair.listFromArray(handlers21);
    var old_requestAnimationFrame3 = window.requestAnimationFrame;
    window.requestAnimationFrame = function(cb4) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        old_requestAnimationFrame3(function(_5) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return cb4();
        });
        return undefined;
    };
    return M0.apply(M5.big_bang, M2.js_arguments__gt_list(arguments));
});
var toDraw = M5.to_draw;
var onTick6 = function(cb27, rate18) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var cb9 = cb27;
    if (false !== false) {
        var if_res2 = 28;
    } else {
        var if_res2 = rate18;
    }
    var rate10 = if_res2;
    return M5.on_tick(cb9, rate10);
};
var cl3 = function(cb11) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return onTick6(cb11, 28);
};
var cl4 = function(cb12, rate113) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return onTick6(cb12, rate113);
};
var onTick = $rjs_core.attachProcedureArity(function() {
    var fixed_lam5 = {
        '1': cl3,
        '2': cl4
    } [arguments.length];
    if (fixed_lam5 !== undefined) {
        return fixed_lam5.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var onMouse = function(cb14) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M5.on_mouse(function(ws15, x_pos16, y_pos17, mouse_event18) {
        if (arguments.length !== 4) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return cb14(ws15, x_pos16, y_pos17, M1.js_string(mouse_event18));
    });
};
var onKey = function(cb19) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M5.on_key(function(ws20, key21) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return cb19(ws20, M1.js_string(key21));
    });
};
var stopWhen = M5.stop_when;
var emptyScene22 = function(width423, height524, color325) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var width26 = width423;
    var height27 = height524;
    if (M0.eq_p(color325, M6.unsafe_undefined) !== false) {
        var if_res6 = M1.js_string($rjs_core.UString.make("white"));
    } else {
        var if_res6 = color325;
    }
    var color28 = if_res6;
    return M4.empty_scene(width26, height27, M1.js_string__gt_string(color28));
};
var cl7 = function(width29, height30) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return emptyScene22(width29, height30, M6.unsafe_undefined);
};
var cl8 = function(width31, height32, color333) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return emptyScene22(width31, height32, color333);
};
var emptyScene = $rjs_core.attachProcedureArity(function() {
    var fixed_lam9 = {
        '2': cl7,
        '3': cl8
    } [arguments.length];
    if (fixed_lam9 !== undefined) {
        return fixed_lam9.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var text0 = function(txt34, size35, color36) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M4.text(M1.js_string__gt_string(txt34), size35, M1.js_string__gt_string(color36));
};
var line0 = function(x37, y38, pen_or_color39) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M4.line(x37, y38, M1.js_string__gt_string(pen_or_color39));
};
var rectangle0 = function(w40, h41, m42, c43) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M4.rectangle(w40, h41, M2.js_string__gt_symbol(m42), M1.js_string__gt_string(c43));
};
var square0 = function(s44, m45, c46) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M4.square(s44, M2.js_string__gt_symbol(m45), M1.js_string__gt_string(c46));
};
var circle0 = function(r47, m48, c49) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M4.circle(r47, M2.js_string__gt_symbol(m48), M1.js_string__gt_string(c49));
};
var triangle0 = function(side50, mode51, color52) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M4.triangle(side50, M2.js_string__gt_symbol(mode51), M1.js_string__gt_string(color52));
};
var frame0 = M4.frame;
var colorFrame = function(color53, img54) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M4.color_frame(M1.js_string__gt_string(color53), img54);
};
var placeImage = M4.place_image;
var placeImages = function(images55, posns56, scene57) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M4.place_images(M2.js_list__gt_list(images55), M2.js_list__gt_list(posns56), scene57);
};
var placeImageAlign = function(image58, x59, y60, x_place61, y_place62, scene63) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M4.place_image_by_align(image58, x59, y60, M1.js_string__gt_string(x_place61), M1.js_string__gt_string(y_place62), scene63);
};
var placeImagesAlign = function(images64, posns65, x_place66, y_place67, scene68) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M4.place_images_by_align(M2.js_list__gt_list(images64), M2.js_list__gt_list(posns65), M1.js_string__gt_string(x_place66), M1.js_string__gt_string(y_place67), scene68);
};
var overlayAlign = $rjs_core.attachProcedureArity(function(xPlace69, yPlace70, ...images7110) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var images71 = $rjs_core.Pair.listFromArray(images7110);
    var args_list72 = M0.append(M0.list(M1.js_string__gt_string(xPlace69), M1.js_string__gt_string(yPlace70)), images71);
    return M0.apply(M4.overlay_by_align, args_list72);
});
var overlayXY = M4.overlay_by_xy;
var overlay0 = M4.overlay;
var underlay0 = M4.underlay;
var underlayXY = M4.underlay_by_xy;
var aboveAlign = $rjs_core.attachProcedureArity(function(x_place73, ...imgs7411) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var imgs74 = $rjs_core.Pair.listFromArray(imgs7411);
    return M0.apply(M4.above_by_align, M0.append(M0.list(M1.js_string__gt_string(x_place73)), imgs74));
});
var above0 = M4.above;
var besideAlign = $rjs_core.attachProcedureArity(function(y_place75, ...imgs7612) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var imgs76 = $rjs_core.Pair.listFromArray(imgs7612);
    return M0.apply(M4.beside_by_align, M0.append(M0.list(M1.js_string__gt_string(y_place75)), imgs76));
});
var beside0 = M4.beside;
var posn0 = M4.make_posn;
var posnX = M4.posn_x;
var posnY = M4.posn_y;
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    posnY,
    posnX,
    posn0 as posn,
    beside0 as beside,
    besideAlign,
    above0 as above,
    aboveAlign,
    underlayXY,
    underlay0 as underlay,
    overlay0 as overlay,
    overlayXY,
    overlayAlign,
    placeImagesAlign,
    placeImageAlign,
    placeImages,
    placeImage,
    colorFrame,
    frame0 as frame,
    triangle0 as triangle,
    text0 as text,
    circle0 as circle,
    square0 as square,
    rectangle0 as rectangle,
    line0 as line,
    emptyScene,
    stopWhen,
    onKey,
    onMouse,
    onTick,
    toDraw,
    bigBang
};