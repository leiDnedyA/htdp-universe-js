import * as $rjs_core from '../../../../../runtime/core.js';
import * as M0 from "../../../../../runtime/kernel.rkt.js";
import * as M1 from "../../../../racketscript-compiler/racketscript/private/interop.rkt.js";
var let_result1317 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("color"), false, 4, 0, 255, M0.rnull, false, false, $rjs_core.Pair.makeList(0, 1, 2, 3), false, $rjs_core.PrimitiveSymbol.make("color"));
var struct_2637 = let_result1317.getAt(0);
var make_2638 = let_result1317.getAt(1);
var __p2639 = let_result1317.getAt(2);
var __ref2640 = let_result1317.getAt(3);
var __set_bang_2641 = let_result1317.getAt(4);
var let_result1318 = M0.values(struct_2637, make_2638, __p2639, M0.make_struct_field_accessor(__ref2640, 0, $rjs_core.PrimitiveSymbol.make("red")), M0.make_struct_field_accessor(__ref2640, 1, $rjs_core.PrimitiveSymbol.make("green")), M0.make_struct_field_accessor(__ref2640, 2, $rjs_core.PrimitiveSymbol.make("blue")), M0.make_struct_field_accessor(__ref2640, 3, $rjs_core.PrimitiveSymbol.make("alpha")));
var struct_color = let_result1318.getAt(0);
var color1 = let_result1318.getAt(1);
var color_p = let_result1318.getAt(2);
var color_red = let_result1318.getAt(3);
var color_green = let_result1318.getAt(4);
var color_blue = let_result1318.getAt(5);
var color_alpha = let_result1318.getAt(6);
var cl1319 = function(a2642, b2643, c2644) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return color1(a2642, b2643, c2644, 255);
};
var cl1320 = function(a2645, b2646, c2647, d2648) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return color1(a2645, b2646, c2647, d2648);
};
var __color = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1321 = {
        '3': cl1319,
        '4': cl1320
    } [arguments.length];
    if (fixed_lam1321 !== undefined) {
        return fixed_lam1321.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [3, 4]);
var string__gt_color = function(color_string2649) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return __times_color_table_times_[M0.string_downcase(color_string2649)];
};
var color__gt_web_color = function(color2650) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.format($rjs_core.UString.make("rgba(~a,~a,~a,~a)"), color_red(color2650), color_green(color2650), color_blue(color2650), color_alpha(color2650));
};
var string__gt_web_color = function(str2651) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return color__gt_web_color(string__gt_color(str2651));
};
var __times_color_table_times_ = {
    "orange": __color(255, 165, 0),
    "orangered": __color(255, 69, 0),
    "tomato": __color(255, 99, 71),
    "darkred": __color(139, 0, 0),
    "red": __color(255, 0, 0),
    "firebrick": __color(178, 34, 34),
    "crimson": __color(220, 20, 60),
    "deeppink": __color(255, 20, 147),
    "maroon": __color(176, 48, 96),
    "indian red": __color(205, 92, 92),
    "indianred": __color(205, 92, 92),
    "medium violet red": __color(199, 21, 133),
    "mediumvioletred": __color(199, 21, 133),
    "violet red": __color(208, 32, 144),
    "violetred": __color(208, 32, 144),
    "lightcoral": __color(240, 128, 128),
    "hotpink": __color(255, 105, 180),
    "palevioletred": __color(219, 112, 147),
    "lightpink": __color(255, 182, 193),
    "rosybrown": __color(188, 143, 143),
    "pink": __color(255, 192, 203),
    "orchid": __color(218, 112, 214),
    "lavenderblush": __color(255, 240, 245),
    "snow": __color(255, 250, 250),
    "chocolate": __color(210, 105, 30),
    "saddlebrown": __color(139, 69, 19),
    "brown": __color(132, 60, 36),
    "darkorange": __color(255, 140, 0),
    "coral": __color(255, 127, 80),
    "sienna": __color(160, 82, 45),
    "salmon": __color(250, 128, 114),
    "peru": __color(205, 133, 63),
    "darkgoldenrod": __color(184, 134, 11),
    "goldenrod": __color(218, 165, 32),
    "sandybrown": __color(244, 164, 96),
    "lightsalmon": __color(255, 160, 122),
    "darksalmon": __color(233, 150, 122),
    "gold": __color(255, 215, 0),
    "yellow": __color(255, 255, 0),
    "medium yellow": __color(255, 255, 0),
    "olive": __color(128, 128, 0),
    "burlywood": __color(222, 184, 135),
    "tan": __color(210, 180, 140),
    "navajowhite": __color(255, 222, 173),
    "peachpuff": __color(255, 218, 185),
    "khaki": __color(240, 230, 140),
    "darkkhaki": __color(189, 183, 107),
    "moccasin": __color(255, 228, 181),
    "wheat": __color(245, 222, 179),
    "bisque": __color(255, 228, 196),
    "palegoldenrod": __color(238, 232, 170),
    "blanchedalmond": __color(255, 235, 205),
    "medium goldenrod": __color(234, 234, 173),
    "mediumgoldenrod": __color(234, 234, 173),
    "papayawhip": __color(255, 239, 213),
    "mistyrose": __color(255, 228, 225),
    "lemonchiffon": __color(255, 250, 205),
    "antiquewhite": __color(250, 235, 215),
    "cornsilk": __color(255, 248, 220),
    "lightgoldenrodyellow": __color(250, 250, 210),
    "oldlace": __color(253, 245, 230),
    "linen": __color(250, 240, 230),
    "lightyellow": __color(255, 255, 224),
    "seashell": __color(255, 245, 238),
    "beige": __color(245, 245, 220),
    "floralwhite": __color(255, 250, 240),
    "ivory": __color(255, 255, 240),
    "green": __color(0, 255, 0),
    "lawngreen": __color(124, 252, 0),
    "chartreuse": __color(127, 255, 0),
    "green yellow": __color(173, 255, 47),
    "greenyellow": __color(173, 255, 47),
    "yellow green": __color(154, 205, 50),
    "yellowgreen": __color(154, 205, 50),
    "medium forest green": __color(107, 142, 35),
    "olivedrab": __color(107, 142, 35),
    "mediumforestgreen": __color(107, 142, 35),
    "dark olive green": __color(85, 107, 47),
    "darkolivegreen": __color(85, 107, 47),
    "darkseagreen": __color(143, 188, 139),
    "lime": __color(0, 255, 0),
    "dark green": __color(0, 100, 0),
    "darkgreen": __color(0, 100, 0),
    "lime green": __color(50, 205, 50),
    "limegreen": __color(50, 205, 50),
    "forest green": __color(34, 139, 34),
    "forestgreen": __color(34, 139, 34),
    "spring green": __color(0, 255, 127),
    "springgreen": __color(0, 255, 127),
    "medium spring green": __color(0, 250, 154),
    "mediumspringgreen": __color(0, 250, 154),
    "sea green": __color(46, 139, 87),
    "seagreen": __color(46, 139, 87),
    "medium sea green": __color(60, 179, 113),
    "mediumseagreen": __color(60, 179, 113),
    "aquamarine": __color(112, 216, 144),
    "lightgreen": __color(144, 238, 144),
    "pale green": __color(152, 251, 152),
    "palegreen": __color(152, 251, 152),
    "medium aquamarine": __color(102, 205, 170),
    "mediumaquamarine": __color(102, 205, 170),
    "turquoise": __color(64, 224, 208),
    "lightseagreen": __color(32, 178, 170),
    "medium turquoise": __color(72, 209, 204),
    "mediumturquoise": __color(72, 209, 204),
    "honeydew": __color(240, 255, 240),
    "mintcream": __color(245, 255, 250),
    "royalblue": __color(65, 105, 225),
    "dodgerblue": __color(30, 144, 255),
    "deepskyblue": __color(0, 191, 255),
    "cornflowerblue": __color(100, 149, 237),
    "steel blue": __color(70, 130, 180),
    "steelblue": __color(70, 130, 180),
    "lightskyblue": __color(135, 206, 250),
    "dark turquoise": __color(0, 206, 209),
    "darkturquoise": __color(0, 206, 209),
    "cyan": __color(0, 255, 255),
    "aqua": __color(0, 255, 255),
    "darkcyan": __color(0, 139, 139),
    "teal": __color(0, 128, 128),
    "sky blue": __color(135, 206, 235),
    "skyblue": __color(135, 206, 235),
    "cadet blue": __color(96, 160, 160),
    "cadetblue": __color(95, 158, 160),
    "dark slate gray": __color(47, 79, 79),
    "darkslategray": __color(47, 79, 79),
    "lightslategray": __color(119, 136, 153),
    "slategray": __color(112, 128, 144),
    "light steel blue": __color(176, 196, 222),
    "lightsteelblue": __color(176, 196, 222),
    "light blue": __color(173, 216, 230),
    "lightblue": __color(173, 216, 230),
    "powderblue": __color(176, 224, 230),
    "paleturquoise": __color(175, 238, 238),
    "lightcyan": __color(224, 255, 255),
    "aliceblue": __color(240, 248, 255),
    "azure": __color(240, 255, 255),
    "medium blue": __color(0, 0, 205),
    "mediumblue": __color(0, 0, 205),
    "darkblue": __color(0, 0, 139),
    "midnight blue": __color(25, 25, 112),
    "midnightblue": __color(25, 25, 112),
    "navy": __color(36, 36, 140),
    "blue": __color(0, 0, 255),
    "indigo": __color(75, 0, 130),
    "blue violet": __color(138, 43, 226),
    "blueviolet": __color(138, 43, 226),
    "medium slate blue": __color(123, 104, 238),
    "mediumslateblue": __color(123, 104, 238),
    "slate blue": __color(106, 90, 205),
    "slateblue": __color(106, 90, 205),
    "purple": __color(160, 32, 240),
    "dark slate blue": __color(72, 61, 139),
    "darkslateblue": __color(72, 61, 139),
    "darkviolet": __color(148, 0, 211),
    "dark orchid": __color(153, 50, 204),
    "darkorchid": __color(153, 50, 204),
    "mediumpurple": __color(147, 112, 219),
    "cornflower blue": __color(68, 64, 108),
    "medium orchid": __color(186, 85, 211),
    "mediumorchid": __color(186, 85, 211),
    "magenta": __color(255, 0, 255),
    "fuchsia": __color(255, 0, 255),
    "darkmagenta": __color(139, 0, 139),
    "violet": __color(238, 130, 238),
    "plum": __color(221, 160, 221),
    "lavender": __color(230, 230, 250),
    "thistle": __color(216, 191, 216),
    "ghostwhite": __color(248, 248, 255),
    "white": __color(255, 255, 255),
    "whitesmoke": __color(245, 245, 245),
    "gainsboro": __color(220, 220, 220),
    "light gray": __color(211, 211, 211),
    "lightgray": __color(211, 211, 211),
    "silver": __color(192, 192, 192),
    "gray": __color(190, 190, 190),
    "dark gray": __color(169, 169, 169),
    "darkgray": __color(169, 169, 169),
    "dim gray": __color(105, 105, 105),
    "dimgray": __color(105, 105, 105),
    "black": __color(0, 0, 0)
};
var __rjs_quoted__ = {};
__rjs_quoted__.color_alpha = color_alpha;
__rjs_quoted__.color_blue = color_blue;
__rjs_quoted__.color_p = color_p;
__rjs_quoted__.color_red = color_red;
__rjs_quoted__.color1 = color1;
__rjs_quoted__.color_green = color_green;
__rjs_quoted__.struct_color = struct_color;
export {
    __rjs_quoted__,
    color_p,
    __color as color,
    string__gt_web_color,
    color__gt_web_color,
    string__gt_color
};