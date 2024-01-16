import * as $rjs_core from '../../../../runtime/core.js';
import * as M0 from "./private/color.rkt.js";
import * as M1 from "../../../racketscript-compiler/racketscript/interop.rkt.js";
import * as M2 from "../../../../collects/racket/private/list.rkt.js";
import * as M3 from "../private/jscommon.rkt.js";
import * as M4 from "../../../../runtime/kernel.rkt.js";
import * as M5 from "../../../../collects/racket/private/map.rkt.js";
import * as M6 from "../../../racketscript-compiler/racketscript/private/interop.rkt.js";
var let_result451 = M4.make_struct_type($rjs_core.PrimitiveSymbol.make("posn"), false, 2, 0, false, M4.rnull, false, false, $rjs_core.Pair.makeList(0, 1), false, $rjs_core.PrimitiveSymbol.make("posn"));
var struct_1068 = let_result451.getAt(0);
var make_1069 = let_result451.getAt(1);
var __p1070 = let_result451.getAt(2);
var __ref1071 = let_result451.getAt(3);
var __set_bang_1072 = let_result451.getAt(4);
var let_result452 = M4.values(struct_1068, make_1069, __p1070, M4.make_struct_field_accessor(__ref1071, 0, $rjs_core.PrimitiveSymbol.make("x")), M4.make_struct_field_accessor(__ref1071, 1, $rjs_core.PrimitiveSymbol.make("y")));
var struct_posn = let_result452.getAt(0);
var make_posn = let_result452.getAt(1);
var posn_p = let_result452.getAt(2);
var posn_x = let_result452.getAt(3);
var posn_y = let_result452.getAt(4);
var ___gt_web_color = function(p1073) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M4.string_p(p1073) !== false) {
        var if_res455 = M0.string__gt_web_color(p1073);
    } else {
        if (M0.color_p(p1073) !== false) {
            var if_res454 = M0.color__gt_web_color(p1073);
        } else {
            if (M4.symbol_p(p1073) !== false) {
                var if_res453 = M0.string__gt_web_color(M4.symbol__gt_string(p1073));
            } else {
                var if_res453 = M4.error($rjs_core.PrimitiveSymbol.make("color"), $rjs_core.UString.make("invalid color"));
            }
            var if_res454 = if_res453;
        }
        var if_res455 = if_res454;
    }
    return if_res455;
};
var print_image = function(d1074) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var canvas1075 = M3.document.createElement("canvas");
    var ctx1076 = canvas1075.getContext("2d");
    M3.document.body.appendChild(canvas1075);
    M3.document.body.appendChild(M3.document.createElement("br"));
    canvas1075.width = d1074.width;
    canvas1075.height = d1074.height;
    ctx1076.save();
    ctx1076.translate(d1074.width / 2, d1074.height / 2);
    d1074.render(ctx1076, 0, 0);
    return ctx1076.restore();
};
var canvas1077 = M3.document.createElement("canvas");
var __times_invisible_canvas_context_times_ = canvas1077.getContext("2d");
var empty_image = {
    'type': $rjs_core.UString.make("empty-image"),
    'width': 0,
    'height': 0,
    'render': function(ctx1078, x1079, y1080) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return M4.rvoid();
    }
};
var image_height = function(i1081) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return i1081.height;
};
var image_width = function(i1082) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return i1082.width;
};
var Text = function(text1083, size1084, color1085, face1086, family1087, style1088, weight1089, underline_p1090) {
    if (arguments.length !== 8) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1091 = this;
    this1091.type = $rjs_core.UString.make("text");
    this1091.text = text1083;
    this1091.size = size1084;
    this1091.color = ___gt_web_color(color1085);
    this1091.face = face1086;
    this1091.family = family1087;
    this1091.style = style1088;
    this1091.weight = weight1089;
    this1091.underline = underline_p1090;
    return this1091._updateMetrics();
};
Text.prototype._updateMetrics = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1092 = this;
    var font1093 = M4.string_append(this1092.weight, $rjs_core.UString.make(" "), this1092.style, $rjs_core.UString.make(" "), M4.number__gt_string(this1092.size), $rjs_core.UString.make("px "), this1092.face, $rjs_core.UString.make(" "), this1092.family);
    __times_invisible_canvas_context_times_.font = M1.js_string(font1093);
    var let_result456 = M4.values();
    var metrics1094 = __times_invisible_canvas_context_times_.measureText(M1.js_string(this1092.text));
    this1092.font = font1093;
    this1092.width = metrics1094.width;
    this1092.height = this1092.size;
    return null;
};
Text.prototype.render = function(ctx1095, x1096, y1097) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1098 = this;
    ctx1095.save();
    ctx1095.translate(x1096, y1097);
    ctx1095.font = M1.js_string(this1098.font);
    ctx1095.textAlign = "center";
    ctx1095.textBaseline = "middle";
    ctx1095.fillStyle = M1.js_string(this1098.color);
    ctx1095.fillText(M1.js_string(this1098.text), 0, 0);
    return ctx1095.restore();
};
var Line = function(x1099, y1100, pen_or_color1101) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1102 = this;
    this1102.type = $rjs_core.UString.make("line");
    this1102.width = M3.abs_plus_ceil(x1099);
    this1102.height = M3.abs_plus_ceil(y1100);
    this1102.mode = false;
    this1102.pen = pen_or_color1101;
    return null;
};
Line.prototype.render = function(ctx1103, x1104, y1105) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1106 = this;
    ctx1103.save();
    var let_result457 = M4.values();
    ctx1103.translate(x1104, y1105);
    var let_result458 = M4.values();
    ctx1103.beginPath();
    var let_result459 = M4.values();
    var sx1107 = M4.__(M4.abs(this1106.x / 2));
    var sy1108 = M4.__(M4.abs(this1106.y / 2));
    if (M4.__gt__eq_(x1104, 0) !== false) {
        var if_res460 = M4.__gt__eq_(y1105, 0);
    } else {
        var if_res460 = false;
    }
    if (if_res460 !== false) {
        ctx1103.moveTo(sx1107, sy1108);
        var if_res467 = ctx1103.lineTo(sx1107 + x1104, sy1108 + y1105);
    } else {
        if (M4.__gt__eq_(x1104, 0) !== false) {
            var if_res461 = M4.__lt_(y1105, 0);
        } else {
            var if_res461 = false;
        }
        if (if_res461 !== false) {
            ctx1103.moveTo(sx1107 + x1104, sy1108);
            var if_res466 = ctx1103.lineTo(sx1107, sy1108 - y1105);
        } else {
            if (M4.__lt_(x1104, 0) !== false) {
                var if_res462 = M4.__gt__eq_(y1105, 0);
            } else {
                var if_res462 = false;
            }
            if (if_res462 !== false) {
                ctx1103.moveTo(sx1107, sy1108 + y1105);
                var if_res465 = ctx1103.lineTo(sx1107 - x1104, sy1108);
            } else {
                if (M4.__lt_(x1104, 0) !== false) {
                    var if_res463 = M4.__lt_(y1105, 0);
                } else {
                    var if_res463 = false;
                }
                if (if_res463 !== false) {
                    ctx1103.moveTo(sx1107 - x1104, sy1108 - y1105);
                    var if_res464 = ctx1103.lineTo(sx1107, sy1108);
                } else {
                    var if_res464 = M4.rvoid();
                }
                var if_res465 = if_res464;
            }
            var if_res466 = if_res465;
        }
        var if_res467 = if_res466;
    }
    if_res467;
    var or_part1109 = M4.equal_p($rjs_core.UString.make("outline"), $rjs_core.PrimitiveSymbol.make("outline"));
    if (or_part1109 !== false) {
        var if_res468 = or_part1109;
    } else {
        var if_res468 = M4.equal_p($rjs_core.UString.make("outline"), $rjs_core.UString.make("outline"));
    }
    if (if_res468 !== false) {
        ctx1103.strokeStyle = M1.js_string(___gt_web_color(this1106.pen));
        var if_res471 = ctx1103.stroke();
    } else {
        var or_part1110 = M4.equal_p($rjs_core.UString.make("outline"), $rjs_core.PrimitiveSymbol.make("solid"));
        if (or_part1110 !== false) {
            var if_res469 = or_part1110;
        } else {
            var if_res469 = M4.equal_p($rjs_core.UString.make("outline"), $rjs_core.UString.make("solid"));
        }
        if (if_res469 !== false) {
            ctx1103.fillStyle = M1.js_string(___gt_web_color(this1106.pen));
            var if_res470 = ctx1103.fill();
        } else {
            var if_res470 = M4.rvoid();
        }
        var if_res471 = if_res470;
    }
    if_res471;
    ctx1103.closePath();
    return ctx1103.restore();
};
var Rectangle = function(width1111, height1112, mode1113, pen_or_color1114) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1115 = this;
    this1115.type = $rjs_core.UString.make("rectangle");
    this1115.width = width1111;
    this1115.height = height1112;
    this1115.mode = mode1113;
    this1115.pen = pen_or_color1114;
    return null;
};
Rectangle.prototype.render = function(ctx1116, x1117, y1118) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1119 = this;
    ctx1116.save();
    ctx1116.translate(x1117, y1118);
    ctx1116.beginPath();
    var width1120 = this1119.width;
    var height1121 = this1119.height;
    var start_x1122 = M4.__(width1120 / 2);
    var start_y1123 = M4.__(height1121 / 2);
    ctx1116.rect(start_x1122, start_y1123, width1120, height1121);
    var or_part1124 = M4.equal_p(this1119.mode, $rjs_core.PrimitiveSymbol.make("outline"));
    if (or_part1124 !== false) {
        var if_res472 = or_part1124;
    } else {
        var if_res472 = M4.equal_p(this1119.mode, $rjs_core.UString.make("outline"));
    }
    if (if_res472 !== false) {
        ctx1116.strokeStyle = M1.js_string(___gt_web_color(this1119.pen));
        var if_res475 = ctx1116.stroke();
    } else {
        var or_part1125 = M4.equal_p(this1119.mode, $rjs_core.PrimitiveSymbol.make("solid"));
        if (or_part1125 !== false) {
            var if_res473 = or_part1125;
        } else {
            var if_res473 = M4.equal_p(this1119.mode, $rjs_core.UString.make("solid"));
        }
        if (if_res473 !== false) {
            ctx1116.fillStyle = M1.js_string(___gt_web_color(this1119.pen));
            var if_res474 = ctx1116.fill();
        } else {
            var if_res474 = M4.rvoid();
        }
        var if_res475 = if_res474;
    }
    if_res475;
    ctx1116.closePath();
    return ctx1116.restore();
};
var Circle = function(radius1126, mode1127, pen_or_color1128) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1129 = this;
    var diameter1130 = radius1126 * 2;
    this1129.type = $rjs_core.UString.make("circle");
    this1129.radius = radius1126;
    this1129.width = diameter1130;
    this1129.height = diameter1130;
    this1129.mode = mode1127;
    this1129.pen = pen_or_color1128;
    return null;
};
Circle.prototype.render = function(ctx1131, x1132, y1133) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1134 = this;
    var radius1135 = this1134.radius;
    ctx1131.save();
    ctx1131.translate(x1132, y1133);
    ctx1131.beginPath();
    ctx1131.ellipse(0, 0, radius1135, radius1135, 0, 0, M3.Math.PI * 2);
    var or_part1136 = M4.equal_p(this1134.mode, $rjs_core.PrimitiveSymbol.make("outline"));
    if (or_part1136 !== false) {
        var if_res476 = or_part1136;
    } else {
        var if_res476 = M4.equal_p(this1134.mode, $rjs_core.UString.make("outline"));
    }
    if (if_res476 !== false) {
        ctx1131.strokeStyle = M1.js_string(___gt_web_color(this1134.pen));
        var if_res479 = ctx1131.stroke();
    } else {
        var or_part1137 = M4.equal_p(this1134.mode, $rjs_core.PrimitiveSymbol.make("solid"));
        if (or_part1137 !== false) {
            var if_res477 = or_part1137;
        } else {
            var if_res477 = M4.equal_p(this1134.mode, $rjs_core.UString.make("solid"));
        }
        if (if_res477 !== false) {
            ctx1131.fillStyle = M1.js_string(___gt_web_color(this1134.pen));
            var if_res478 = ctx1131.fill();
        } else {
            var if_res478 = M4.rvoid();
        }
        var if_res479 = if_res478;
    }
    if_res479;
    ctx1131.closePath();
    return ctx1131.restore();
};
var Polygon = function(vertices1138, mode1139, pen_or_color1140) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1141 = this;
    var xs1142 = M5.map(posn_x, vertices1138);
    var ys1143 = M5.map(posn_y, vertices1138);
    var width1144 = M4.apply(M4.max, xs1142) - M4.apply(M4.min, xs1142);
    var height1145 = M4.apply(M4.max, ys1143) - M4.apply(M4.min, xs1142);
    this1141.type = $rjs_core.UString.make("polygon");
    this1141.vertices = vertices1138;
    this1141.width = width1144;
    this1141.height = height1145;
    this1141.mode = mode1139;
    this1141.pen = pen_or_color1140;
    return null;
};
Polygon.prototype.render = function(ctx1146, x1147, y1148) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1149 = this;
    var first_point1150 = M4.car(this1149.vertices);
    var rest_points1151 = M4.cdr(this1149.vertices);
    var radius1152 = this1149.radius;
    ctx1146.save();
    ctx1146.translate(x1147, y1148);
    ctx1146.beginPath();
    ctx1146.moveTo(posn_x(first_point1150), posn_y(first_point1150));
    var loop1153 = function(points1154) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M4.null_p(points1154) !== false) {
            var if_res480 = M4.rvoid();
        } else {
            var pt1155 = M4.car(points1154);
            ctx1146.lineTo(posn_x(pt1155), posn_y(pt1155));
            var if_res480 = loop1153(M4.cdr(points1154));
        }
        return if_res480;
    };
    loop1153(rest_points1151);
    var or_part1156 = M4.equal_p(this1149.mode, $rjs_core.PrimitiveSymbol.make("outline"));
    if (or_part1156 !== false) {
        var if_res481 = or_part1156;
    } else {
        var if_res481 = M4.equal_p(this1149.mode, $rjs_core.UString.make("outline"));
    }
    if (if_res481 !== false) {
        ctx1146.strokeStyle = M1.js_string(___gt_web_color(this1149.pen));
        var if_res484 = ctx1146.stroke();
    } else {
        var or_part1157 = M4.equal_p(this1149.mode, $rjs_core.PrimitiveSymbol.make("solid"));
        if (or_part1157 !== false) {
            var if_res482 = or_part1157;
        } else {
            var if_res482 = M4.equal_p(this1149.mode, $rjs_core.UString.make("solid"));
        }
        if (if_res482 !== false) {
            ctx1146.fillStyle = M1.js_string(___gt_web_color(this1149.pen));
            var if_res483 = ctx1146.fill();
        } else {
            var if_res483 = M4.rvoid();
        }
        var if_res484 = if_res483;
    }
    if_res484;
    ctx1146.closePath();
    return ctx1146.restore();
};
var empty_scene1158 = function(width21159, height31160, color11161) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var width1162 = width21159;
    var height1163 = height31160;
    if (false !== false) {
        var if_res485 = $rjs_core.UString.make("white");
    } else {
        var if_res485 = color11161;
    }
    var color1164 = if_res485;
    return overlay(rectangle(width1162, height1163, $rjs_core.UString.make("solid"), color1164), rectangle(width1162, height1163, $rjs_core.UString.make("outline"), $rjs_core.UString.make("black")));
};
var cl486 = function(width1165, height1166) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return empty_scene1158(width1165, height1166, $rjs_core.UString.make("white"));
};
var cl487 = function(width1167, height1168, color11169) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return empty_scene1158(width1167, height1168, color11169);
};
var empty_scene = $rjs_core.attachProcedureArity(function() {
    var fixed_lam488 = {
        '2': cl486,
        '3': cl487
    } [arguments.length];
    if (fixed_lam488 !== undefined) {
        return fixed_lam488.apply(null, arguments);
    } else {
        return M4.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var text = function(txt1170, size1171, color1172) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Text(txt1170, size1171, color1172, $rjs_core.UString.make(""), $rjs_core.UString.make("serif"), $rjs_core.UString.make("normal"), $rjs_core.UString.make("normal"), false);
};
var text_by_font = function(txt1173, size1174, color1175, face1176, family1177, style1178, weight1179, underline_p1180) {
    if (arguments.length !== 8) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var or_part1181 = face1176;
    if (or_part1181 !== false) {
        var if_res492 = or_part1181;
    } else {
        var if_res492 = $rjs_core.UString.make("");
    }
    if (M4.symbol_p(family1177) !== false) {
        var if_res491 = M4.symbol__gt_string(family1177);
    } else {
        var if_res491 = family1177;
    }
    if (M4.symbol_p(style1178) !== false) {
        var if_res490 = M4.symbol__gt_string(style1178);
    } else {
        var if_res490 = style1178;
    }
    if (M4.symbol_p(weight1179) !== false) {
        var if_res489 = M4.symbol__gt_string(weight1179);
    } else {
        var if_res489 = weight1179;
    }
    return new Text(txt1173, size1174, color1175, if_res492, if_res491, if_res490, if_res489, underline_p1180);
};
var line = function(x1182, y1183, pen_or_color1184) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Line(x1182, y1183, pen_or_color1184);
};
var rectangle = function(w1185, h1186, m1187, p1188) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Rectangle(w1185, h1186, m1187, p1188);
};
var square = function(s1189, m1190, p1191) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Rectangle(s1189, s1189, m1190, p1191);
};
var circle = function(r1192, m1193, p1194) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Circle(r1192, m1193, p1194);
};
var triangle = function(side1195, mode1196, color1197) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var height1198 = side1195 * (M4.sqrt(3) / 2);
    return new Polygon(M4.list(make_posn(M4.__(side1195 / 2), height1198 / 2), make_posn(0, M4.__(height1198 / 2)), make_posn(side1195 / 2, height1198 / 2)), mode1196, color1197);
};
var Overlay = function(x_place1199, y_place1200, ima1201, imb1202) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1203 = this;
    var ima_cx1204 = ima1201.width / 2;
    var ima_cy1205 = ima1201.height / 2;
    var imb_cx1206 = imb1202.width / 2;
    var imb_cy1207 = imb1202.height / 2;
    var tmp1209 = x_place1199;
    if (M4.equal_p(tmp1209, $rjs_core.UString.make("beside")) !== false) {
        var if_res495 = ima1201.width + imb1202.width;
    } else {
        if (M4.number_p(x_place1199) !== false) {
            if (M4.positive_p(x_place1199) !== false) {
                var if_res493 = M4.max(ima1201.width, imb1202.width + x_place1199);
            } else {
                var if_res493 = M4.max(imb1202.width, ima1201.width - x_place1199);
            }
            var if_res494 = if_res493;
        } else {
            var if_res494 = M4.max(ima1201.width, imb1202.width);
        }
        var if_res495 = if_res494;
    }
    var width1208 = if_res495;
    var tmp1211 = y_place1200;
    if (M4.equal_p(tmp1211, $rjs_core.UString.make("above")) !== false) {
        var if_res498 = ima1201.height + imb1202.height;
    } else {
        if (M4.number_p(y_place1200) !== false) {
            if (M4.positive_p(y_place1200) !== false) {
                var if_res496 = M4.max(ima1201.height, imb1202.height + y_place1200);
            } else {
                var if_res496 = M4.max(imb1202.height, ima1201.height - y_place1200);
            }
            var if_res497 = if_res496;
        } else {
            var if_res497 = M4.max(ima1201.height, imb1202.height);
        }
        var if_res498 = if_res497;
    }
    var height1210 = if_res498;
    var δ_edge_x1212 = width1208 / 2;
    var δ_edge_y1213 = height1210 / 2;
    var tmp1216 = x_place1199;
    if (M4.equal_p(tmp1216, $rjs_core.UString.make("left")) !== false) {
        var if_res505 = M4.values(ima_cx1204 - δ_edge_x1212, imb_cx1206 - δ_edge_x1212);
    } else {
        if (M4.equal_p(tmp1216, $rjs_core.UString.make("right")) !== false) {
            var if_res504 = M4.values(δ_edge_x1212 - ima_cx1204, δ_edge_x1212 - imb_cx1206);
        } else {
            if (M4.equal_p(tmp1216, $rjs_core.UString.make("beside")) !== false) {
                var if_res503 = M4.values(ima_cx1204 - δ_edge_x1212, δ_edge_x1212 - imb_cx1206);
            } else {
                if (M4.equal_p(tmp1216, $rjs_core.UString.make("middle")) !== false) {
                    var if_res499 = true;
                } else {
                    var if_res499 = M4.equal_p(tmp1216, $rjs_core.UString.make("center"));
                }
                if (if_res499 !== false) {
                    var if_res502 = M4.values(0, 0);
                } else {
                    if (M4.number_p(x_place1199) !== false) {
                        var local_width1217 = M4.max(ima1201.width, imb1202.width);
                        var local_acx1218 = ima_cx1204 - (local_width1217 / 2);
                        var local_bcx1219 = imb_cx1206 - (local_width1217 / 2);
                        var acx_bcx1220 = δ_edge_x1212 - (local_width1217 / 2);
                        if (M4.positive_p(x_place1199) !== false) {
                            var if_res500 = M4.values(local_acx1218 - acx_bcx1220, x_place1199 + (local_bcx1219 - acx_bcx1220));
                        } else {
                            var if_res500 = M4.values(local_acx1218 - x_place1199 - acx_bcx1220, local_bcx1219 - acx_bcx1220);
                        }
                        var if_res501 = if_res500;
                    } else {
                        var if_res501 = M4.error($rjs_core.UString.make("invalid x-place align"));
                    }
                    var if_res502 = if_res501;
                }
                var if_res503 = if_res502;
            }
            var if_res504 = if_res503;
        }
        var if_res505 = if_res504;
    }
    var let_result506 = if_res505;
    var δ_a_x1214 = let_result506.getAt(0);
    var δ_b_x1215 = let_result506.getAt(1);
    var tmp1223 = y_place1200;
    if (M4.equal_p(tmp1223, $rjs_core.UString.make("top")) !== false) {
        var if_res513 = M4.values(ima_cy1205 - δ_edge_y1213, imb_cy1207 - δ_edge_y1213);
    } else {
        if (M4.equal_p(tmp1223, $rjs_core.UString.make("bottom")) !== false) {
            var if_res512 = M4.values(δ_edge_y1213 - ima_cy1205, δ_edge_y1213 - imb_cy1207);
        } else {
            if (M4.equal_p(tmp1223, $rjs_core.UString.make("above")) !== false) {
                var if_res511 = M4.values(ima_cy1205 - δ_edge_y1213, δ_edge_y1213 - imb_cy1207);
            } else {
                if (M4.equal_p(tmp1223, $rjs_core.UString.make("middle")) !== false) {
                    var if_res507 = true;
                } else {
                    var if_res507 = M4.equal_p(tmp1223, $rjs_core.UString.make("center"));
                }
                if (if_res507 !== false) {
                    var if_res510 = M4.values(0, 0);
                } else {
                    if (M4.number_p(y_place1200) !== false) {
                        var local_height1224 = M4.max(ima1201.height, imb1202.height);
                        var local_acy1225 = ima_cy1205 - (local_height1224 / 2);
                        var local_bcy1226 = imb_cy1207 - (local_height1224 / 2);
                        var acy_bcy1227 = δ_edge_y1213 - (local_height1224 / 2);
                        if (M4.positive_p(y_place1200) !== false) {
                            var if_res508 = M4.values(local_acy1225 - acy_bcy1227, y_place1200 + (local_bcy1226 - acy_bcy1227));
                        } else {
                            var if_res508 = M4.values(local_acy1225 - y_place1200 - acy_bcy1227, local_bcy1226 - acy_bcy1227);
                        }
                        var if_res509 = if_res508;
                    } else {
                        var if_res509 = M4.error($rjs_core.UString.make("invalid y-place align"));
                    }
                    var if_res510 = if_res509;
                }
                var if_res511 = if_res510;
            }
            var if_res512 = if_res511;
        }
        var if_res513 = if_res512;
    }
    var let_result514 = if_res513;
    var δ_a_y1221 = let_result514.getAt(0);
    var δ_b_y1222 = let_result514.getAt(1);
    this1203.type = $rjs_core.UString.make("overlay");
    this1203.ima = ima1201;
    this1203.imb = imb1202;
    this1203.width = width1208;
    this1203.height = height1210;
    this1203.aDx = δ_a_x1214;
    this1203.aDy = δ_a_y1221;
    this1203.bDx = δ_b_x1215;
    this1203.bDy = δ_b_y1222;
    return null;
};
Overlay.prototype.render = function(ctx1228, x1229, y1230) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1231 = this;
    var ima1232 = this1231.ima;
    var imb1233 = this1231.imb;
    ctx1228.save();
    ctx1228.translate(x1229, y1230);
    imb1233.render(ctx1228, this1231.bDx, this1231.bDy);
    ima1232.render(ctx1228, this1231.aDx, this1231.aDy);
    return ctx1228.restore();
};
var Container = function(childs1234, posns1235, width1236, height1237) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1238 = this;
    this1238.type = $rjs_core.UString.make("container");
    this1238.childs = childs1234;
    this1238.posns = posns1235;
    this1238.width = width1236;
    this1238.height = height1237;
    return null;
};
Container.prototype.render = function(ctx1239, x1240, y1241) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1242 = this;
    var width1243 = this1242.width;
    var height1244 = this1242.height;
    ctx1239.save();
    ctx1239.translate(x1240 - (width1243 / 2), y1241 - (height1244 / 2));
    ctx1239.beginPath();
    ctx1239.rect(0, 0, M4.sub1(width1243), M4.sub1(height1244));
    ctx1239.clip();
    var loop1245 = function(childs1246, posns1247) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M4.null_p(childs1246) !== false) {
            var if_res515 = M4.rvoid();
        } else {
            var child1248 = M4.car(childs1246);
            var posn1249 = M4.car(posns1247);
            child1248.render(ctx1239, posn_x(posn1249), posn_y(posn1249));
            var if_res515 = loop1245(M4.cdr(childs1246), M4.cdr(posns1247));
        }
        return if_res515;
    };
    loop1245(this1242.childs, this1242.posns);
    return ctx1239.restore();
};
var Bitmap = function(data1250) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1251 = this;
    var image1252 = new Image;
    image1252.crossOrigin = "anonymous";
    image1252.src = M1.js_string(data1250);
    this1251.image = image1252;
    this1251.width = image1252.width;
    this1251.height = image1252.height;
    return null;
};
Bitmap.prototype.render = function(ctx1253, x1254, y1255) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1256 = this;
    var image1257 = this1256.image;
    ctx1253.save();
    ctx1253.translate(x1254, y1255);
    ctx1253.drawImage(image1257, M4.__(image1257.width / 2), M4.__(image1257.height / 2));
    return ctx1253.restore();
};
var Freeze = function(img1258) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1259 = this;
    var canvas1260 = M3.document.createElement("canvas");
    var ctx1261 = canvas1260.getContext("2d");
    var width1262 = img1258.width;
    var height1263 = img1258.height;
    canvas1260.width = width1262;
    canvas1260.height = height1263;
    ctx1261.save();
    ctx1261.translate(width1262 / 2, height1263 / 2);
    img1258.render(ctx1261, 0, 0);
    ctx1261.restore();
    this1259.width = width1262;
    this1259.height = height1263;
    this1259.canvas = canvas1260;
    return null;
};
Freeze.prototype.render = function(ctx1264, x1265, y1266) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1267 = this;
    var width1268 = this1267.width;
    var height1269 = this1267.height;
    ctx1264.save();
    ctx1264.translate(x1265, y1266);
    ctx1264.drawImage(this1267.canvas, M4.__(width1268 / 2), M4.__(height1269 / 2));
    return ctx1264.restore();
};
var Rotate = function(image1270, angle1271) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1272 = this;
    var width1273 = image1270.width;
    var height1274 = image1270.height;
    var θ1275 = (M3.Math.PI * angle1271) / 180.0;
    var sin_θ1276 = M4.sin(θ1275);
    var cos_θ1277 = M4.cos(θ1275);
    var x11278 = cos_θ1277 * width1273;
    var y11279 = sin_θ1276 * width1273;
    var x21280 = M4.__(sin_θ1276) * height1274;
    var y21281 = cos_θ1277 * height1274;
    var x31282 = x11278 + x21280;
    var y31283 = y11279 + y21281;
    var min_x1284 = M4.min(0, x11278, x21280, x31282);
    var max_x1285 = M4.max(0, x11278, x21280, x31282);
    var min_y1286 = M4.min(0, y11279, y21281, y31283);
    var max_y1287 = M4.max(0, y11279, y21281, y31283);
    var rotated_width1288 = M4.floor(max_x1285 - min_x1284);
    var rotated_height1289 = M4.floor(max_y1287 - min_y1286);
    this1272.image = image1270;
    this1272.width = rotated_width1288;
    this1272.height = rotated_height1289;
    this1272.degrees = angle1271;
    this1272.radians = θ1275;
    return null;
};
Rotate.prototype.render = function(ctx1290, x1291, y1292) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1293 = this;
    ctx1290.save();
    ctx1290.translate(x1291, y1292);
    ctx1290.rotate(this1293.radians);
    this1293.image.render(ctx1290, 0, 0);
    return ctx1290.restore();
};
var Scale = function(image1294, x_factor1295, y_factor1296) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1297 = this;
    this1297.image = image1294;
    this1297.x_factor = x_factor1295;
    this1297.y_factor = y_factor1296;
    this1297.width = M4.abs(M4.floor(image1294.width * x_factor1295));
    this1297.height = M4.abs(M4.floor(image1294.height * y_factor1296));
    return null;
};
Scale.prototype.render = function(ctx1298, x1299, y1300) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1301 = this;
    ctx1298.save();
    ctx1298.translate(x1299, y1300);
    ctx1298.scale(this1301.x_factor, this1301.y_factor);
    this1301.image.render(ctx1298, 0, 0);
    return ctx1298.restore();
};
var container = function(childs1302, posns1303, width1304, height1305) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Container(childs1302, posns1303, width1304, height1305);
};
var place_image = function(child1306, cx1307, cy1308, base1309) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var width1310 = base1309.width;
    var height1311 = base1309.height;
    return container(M4.list(base1309, child1306), M4.list(make_posn(width1310 / 2, height1311 / 2), make_posn(cx1307, cy1308)), width1310, height1311);
};
var place_images = function(images1312, posns1313, scene1314) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var width1315 = scene1314.width;
    var height1316 = scene1314.height;
    return container(M4.cons(scene1314, images1312), M4.cons(make_posn(width1315 / 2, height1316 / 2), posns1313), width1315, height1316);
};
var __align_image_pos = function(image1317, pos1318, x_place1319, y_place1320) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var x1321 = posn_x(pos1318);
    var y1322 = posn_y(pos1318);
    var tmp1324 = x_place1319;
    if (M4.equal_p(tmp1324, $rjs_core.UString.make("left")) !== false) {
        var if_res519 = (image1317.width / 2) + x1321;
    } else {
        if (M4.equal_p(tmp1324, $rjs_core.UString.make("right")) !== false) {
            var if_res518 = x1321 - (image1317.width / 2);
        } else {
            if (M4.equal_p(tmp1324, $rjs_core.UString.make("center")) !== false) {
                var if_res516 = true;
            } else {
                var if_res516 = M4.equal_p(tmp1324, $rjs_core.UString.make("middle"));
            }
            if (if_res516 !== false) {
                var if_res517 = x1321;
            } else {
                var if_res517 = M4.rvoid();
            }
            var if_res518 = if_res517;
        }
        var if_res519 = if_res518;
    }
    var new_x1323 = if_res519;
    var tmp1326 = y_place1320;
    if (M4.equal_p(tmp1326, $rjs_core.UString.make("top")) !== false) {
        var if_res523 = (image1317.height / 2) + y1322;
    } else {
        if (M4.equal_p(tmp1326, $rjs_core.UString.make("bottom")) !== false) {
            var if_res522 = y1322 - (image1317.height / 2);
        } else {
            if (M4.equal_p(tmp1326, $rjs_core.UString.make("center")) !== false) {
                var if_res520 = true;
            } else {
                var if_res520 = M4.equal_p(tmp1326, $rjs_core.UString.make("middle"));
            }
            if (if_res520 !== false) {
                var if_res521 = y1322;
            } else {
                var if_res521 = M4.rvoid();
            }
            var if_res522 = if_res521;
        }
        var if_res523 = if_res522;
    }
    var new_y1325 = if_res523;
    return make_posn(new_x1323, new_y1325);
};
var place_image_by_align = function(image1327, x1328, y1329, x_place1330, y_place1331, scene1332) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var new_pos1333 = __align_image_pos(image1327, make_posn(x1328, y1329), x_place1330, y_place1331);
    return place_image(image1327, posn_x(new_pos1333), posn_y(new_pos1333), scene1332);
};
var place_images_by_align = function(images1334, posns1335, x_place1336, y_place1337, scene1338) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var new_posns1339 = M5.map(function(i1340, p1341) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __align_image_pos(i1340, p1341, x_place1336, y_place1337);
    }, images1334, posns1335);
    return place_images(images1334, new_posns1339, scene1338);
};
var __single_overlay = function(x_place1342, y_place1343, ima1344, imb1345) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Overlay(x_place1342, y_place1343, ima1344, imb1345);
};
var __single_underlay = function(x_place1346, y_place1347, ima1348, imb1349) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Overlay(x_place1346, y_place1347, imb1349, ima1348);
};
var overlay_by_align = $rjs_core.attachProcedureArity(function(x_place1350, y_place1351, ima1352, imb1353, ...imn1354524) {
    if (arguments.length < 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var imn1354 = $rjs_core.Pair.listFromArray(imn1354524);
    return M2.foldl(function(img1355, acc1356) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_overlay(x_place1350, y_place1351, acc1356, img1355);
    }, empty_image, M4.cons(ima1352, M4.cons(imb1353, imn1354)));
});
var overlay = $rjs_core.attachProcedureArity(function(ima1357, imb1358, ...imn1359525) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var imn1359 = $rjs_core.Pair.listFromArray(imn1359525);
    return M2.foldl(function(img1360, acc1361) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_overlay($rjs_core.UString.make("middle"), $rjs_core.UString.make("middle"), acc1361, img1360);
    }, empty_image, M4.cons(ima1357, M4.cons(imb1358, imn1359)));
});
var overlay_by_xy = function(ima1362, x1363, y1364, imb1365) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Overlay(x1363, y1364, ima1362, imb1365);
};
var underlay = $rjs_core.attachProcedureArity(function(ima1366, imb1367, ...imn1368526) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var imn1368 = $rjs_core.Pair.listFromArray(imn1368526);
    return M2.foldl(function(img1369, acc1370) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_underlay($rjs_core.UString.make("middle"), $rjs_core.UString.make("middle"), acc1370, img1369);
    }, empty_image, M4.cons(ima1366, M4.cons(imb1367, imn1368)));
});
var underlay_by_align = $rjs_core.attachProcedureArity(function(x_place1371, y_place1372, ima1373, imb1374, ...imn1375527) {
    if (arguments.length < 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var imn1375 = $rjs_core.Pair.listFromArray(imn1375527);
    return M2.foldl(function(img1376, acc1377) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_underlay(x_place1371, y_place1372, acc1377, img1376);
    }, empty_image, M4.cons(ima1373, M4.cons(imb1374, imn1375)));
});
var underlay_by_xy = function(ima1378, x1379, y1380, imb1381) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Overlay(M4.__(x1379), M4.__(y1380), imb1381, ima1378);
};
var above_by_align = $rjs_core.attachProcedureArity(function(x_place1382, i11383, i21384, ...is1385528) {
    if (arguments.length < 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var is1385 = $rjs_core.Pair.listFromArray(is1385528);
    return M2.foldl(function(img1386, acc1387) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_overlay(x_place1382, $rjs_core.UString.make("above"), acc1387, img1386);
    }, empty_image, M4.cons(i11383, M4.cons(i21384, is1385)));
});
var above = $rjs_core.attachProcedureArity(function(i11388, i21389, ...is1390529) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var is1390 = $rjs_core.Pair.listFromArray(is1390529);
    return M2.foldl(function(img1391, acc1392) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_overlay($rjs_core.UString.make("middle"), $rjs_core.UString.make("above"), acc1392, img1391);
    }, empty_image, M4.cons(i11388, M4.cons(i21389, is1390)));
});
var beside_by_align = $rjs_core.attachProcedureArity(function(y_place1393, i11394, i21395, ...is1396530) {
    if (arguments.length < 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var is1396 = $rjs_core.Pair.listFromArray(is1396530);
    return M2.foldl(function(img1397, acc1398) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_overlay($rjs_core.UString.make("beside"), y_place1393, acc1398, img1397);
    }, empty_image, M4.cons(i11394, M4.cons(i21395, is1396)));
});
var beside = $rjs_core.attachProcedureArity(function(i11399, i21400, ...is1401531) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var is1401 = $rjs_core.Pair.listFromArray(is1401531);
    return M2.foldl(function(img1402, acc1403) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_overlay($rjs_core.UString.make("beside"), $rjs_core.UString.make("middle"), acc1403, img1402);
    }, empty_image, M4.cons(i11399, M4.cons(i21400, is1401)));
});
var rotate = function(angle1404, image1405) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Rotate(image1405, M4.__(angle1404));
};
var scale = function(factor1406, image1407) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Scale(image1407, factor1406, factor1406);
};
var flip_horizontal = function(image1408) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Scale(image1408, -1, 1);
};
var flip_vertical = function(image1409) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Scale(image1409, 1, -1);
};
var bitmap_by_data = function(data1410) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Bitmap(data1410);
};
var bitmap_by_url = function(url1411) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Bitmap(url1411);
};
var frame = function(img1412) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return color_frame($rjs_core.UString.make("black"), img1412);
};
var color_frame = function(color1413, img1414) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return overlay(rectangle(image_width(img1414), image_height(img1414), $rjs_core.PrimitiveSymbol.make("outline"), color1413), img1414);
};
var freeze = function(img1415) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Freeze(img1415);
};
var __rjs_quoted__ = {};
__rjs_quoted__.empty_image = empty_image;
__rjs_quoted__.posn_p = posn_p;
__rjs_quoted__.make_posn = make_posn;
__rjs_quoted__.posn_y = posn_y;
__rjs_quoted__.posn_x = posn_x;
__rjs_quoted__.___gt_web_color = ___gt_web_color;
__rjs_quoted__.struct_posn = struct_posn;
export {
    __rjs_quoted__,
    posn_x,
    posn_y,
    posn_p,
    make_posn,
    struct_posn,
    print_image,
    freeze,
    bitmap_by_url,
    bitmap_by_data,
    flip_horizontal,
    flip_vertical,
    scale,
    rotate,
    beside,
    beside_by_align,
    above,
    above_by_align,
    underlay_by_xy,
    underlay,
    overlay,
    overlay_by_xy,
    overlay_by_align,
    place_images_by_align,
    place_image_by_align,
    place_images,
    place_image,
    color_frame,
    frame,
    triangle,
    text_by_font,
    text,
    circle,
    square,
    rectangle,
    line,
    image_width,
    image_height,
    empty_scene,
    empty_image
};