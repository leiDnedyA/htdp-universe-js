import * as $rjs_core from './core.js';
import * as M1 from "./lib.rkt.js";
import * as M2 from "../links/racketscript-compiler/racketscript/compiler/directive.rkt.js";
import * as M4 from "./unsafe.rkt.js";
var equal_p = M1.Core.isEqual;
var eqv_p = M1.Core.isEqv;
var eq_p = M1.Core.isEq;
var values = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(function() {
    var vals1460 = M1.Core.argumentsToArray(arguments);
    if ((vals1460.length === 1) !== false) {
        var if_res551 = vals1460[0];
    } else {
        var if_res551 = M1.Values.make(vals1460);
    }
    return if_res551;
}, 0), $rjs_core.UString.make("values"));
var call_with_values = function(generator1461, receiver1462) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var vals1463 = generator1461();
    if (M1.Values.check(vals1463) !== false) {
        var if_res553 = receiver1462.apply(this, vals1463.getAll());
    } else {
        if (not(eq_p(vals1463, undefined) || eq_p(vals1463, null)) !== false) {
            var if_res552 = receiver1462.apply(this, [vals1463]);
        } else {
            var if_res552 = rvoid();
        }
        var if_res553 = if_res552;
    }
    return if_res553;
};
var immutable_p = function(v1464) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Kernel.isImmutable(v1464);
};
var rvoid = $rjs_core.attachProcedureArity(function(..._1465554) {
    var _1465 = $rjs_core.Pair.listFromArray(_1465554);
    return null;
});
var void_p = function(v1466) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (v1466 === null) || (v1466 === undefined);
};
var number_p = M1.Core.Number.JS.check;
var real_p = M1.Core.Number.JS.check;
var integer_p = Number.isInteger;
var complex_p = $rjs_core.attachProcedureArity(function(..._1467555) {
    var _1467 = $rjs_core.Pair.listFromArray(_1467555);
    return M1.Core.racketCoreError($rjs_core.UString.make("Not supported with JS number semantics"));
});
var zero_p = function(v1468) {
    if (number_p(v1468) !== false) {
        var if_res556 = rvoid();
    } else {
        var if_res556 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("zero?"), $rjs_core.UString.make("number?"), v1468));
    }
    if_res556;
    return v1468 === 0;
};
var positive_p = function(v1469) {
    if (real_p(v1469) !== false) {
        var if_res557 = rvoid();
    } else {
        var if_res557 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("positive?"), $rjs_core.UString.make("real?"), v1469));
    }
    if_res557;
    return v1469 > 0;
};
var negative_p = function(v1470) {
    if (real_p(v1470) !== false) {
        var if_res558 = rvoid();
    } else {
        var if_res558 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("negative?"), $rjs_core.UString.make("real?"), v1470));
    }
    if_res558;
    return v1470 < 0;
};
var add1 = function(v1471) {
    if (number_p(v1471) !== false) {
        var if_res559 = rvoid();
    } else {
        var if_res559 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("add1"), $rjs_core.UString.make("number?"), v1471));
    }
    if_res559;
    return v1471 + 1;
};
var sub1 = function(v1472) {
    if (number_p(v1472) !== false) {
        var if_res560 = rvoid();
    } else {
        var if_res560 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("sub1"), $rjs_core.UString.make("number?"), v1472));
    }
    if_res560;
    return v1472 - 1;
};
var quotient = function(dividend1473, divisor1474) {
    if (integer_p(dividend1473) !== false) {
        var if_res561 = rvoid();
    } else {
        var if_res561 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("quotient"), $rjs_core.UString.make("integer?"), dividend1473));
    }
    if_res561;
    if (integer_p(divisor1474) !== false) {
        var if_res562 = rvoid();
    } else {
        var if_res562 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("quotient"), $rjs_core.UString.make("integer?"), divisor1474));
    }
    if_res562;
    return (dividend1473 / divisor1474) | 0;
};
var even_p = function(v1475) {
    if (integer_p(v1475) !== false) {
        var if_res563 = rvoid();
    } else {
        var if_res563 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("even?"), $rjs_core.UString.make("integer?"), v1475));
    }
    if_res563;
    return (v1475 % 2) === 0;
};
var odd_p = function(v1476) {
    if (integer_p(v1476) !== false) {
        var if_res564 = rvoid();
    } else {
        var if_res564 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("odd?"), $rjs_core.UString.make("integer?"), v1476));
    }
    if_res564;
    return not(even_p(v1476));
};
var exact_nonnegative_integer_p = function(v1477) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Number.isInteger(v1477) && (v1477 >= 0);
};
var exact_integer_p = function(v1478) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Number.isInteger(v1478);
};
var exact_p = function(v1479) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Number.isInteger(v1479);
};
var inexact_p = function(v1480) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return not(exact_p(v1480));
};
var single_flonum_available_p = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var single_flonum_p = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var real__gt_single_flonum = function(v1481) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v1481;
};
var __times_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.mul, 0);
var __by_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.div, 1);
var __plus_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.add, 0);
var __ = M1.Core.attachProcedureArity(M1.Core.Number.JS.sub, 1);
var __lt_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.lt, 1);
var __gt_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.gt, 1);
var __lt__eq_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.lte, 1);
var __gt__eq_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.gte, 1);
var __eq_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.equals, 1);
var floor = function(v1495) {
    if (real_p(v1495) !== false) {
        var if_res565 = rvoid();
    } else {
        var if_res565 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("floor"), $rjs_core.UString.make("real?"), v1495));
    }
    if_res565;
    return Math.floor(v1495);
};
var abs = function(v1496) {
    if (real_p(v1496) !== false) {
        var if_res566 = rvoid();
    } else {
        var if_res566 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("abs"), $rjs_core.UString.make("real?"), v1496));
    }
    if_res566;
    return Math.abs(v1496);
};
var sin = function(v1497) {
    if (number_p(v1497) !== false) {
        var if_res567 = rvoid();
    } else {
        var if_res567 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("sin"), $rjs_core.UString.make("number?"), v1497));
    }
    if_res567;
    return Math.sin(v1497);
};
var cos = function(v1498) {
    if (number_p(v1498) !== false) {
        var if_res568 = rvoid();
    } else {
        var if_res568 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cos"), $rjs_core.UString.make("number?"), v1498));
    }
    if_res568;
    return Math.cos(v1498);
};
var tan = function(v1499) {
    if (number_p(v1499) !== false) {
        var if_res569 = rvoid();
    } else {
        var if_res569 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("tan"), $rjs_core.UString.make("number?"), v1499));
    }
    if_res569;
    return Math.tan(v1499);
};
var asin = function(v1500) {
    if (number_p(v1500) !== false) {
        var if_res570 = rvoid();
    } else {
        var if_res570 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("asin"), $rjs_core.UString.make("number?"), v1500));
    }
    if_res570;
    return Math.asin(v1500);
};
var acos = function(v1501) {
    if (number_p(v1501) !== false) {
        var if_res571 = rvoid();
    } else {
        var if_res571 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("acos"), $rjs_core.UString.make("number?"), v1501));
    }
    if_res571;
    return Math.acos(v1501);
};
var cl572 = function(v1505) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Math.atan(v1505);
};
var cl573 = function(x1506, y1507) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Math.atan2(x1506, y1507);
};
var atan = $rjs_core.attachProcedureArity(function() {
    var fixed_lam574 = {
        '1': cl572,
        '2': cl573
    } [arguments.length];
    if (fixed_lam574 !== undefined) {
        return fixed_lam574.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var ceiling = function(v1508) {
    if (real_p(v1508) !== false) {
        var if_res575 = rvoid();
    } else {
        var if_res575 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("ceiling"), $rjs_core.UString.make("real?"), v1508));
    }
    if_res575;
    return Math.ceil(v1508);
};
var round = function(v1509) {
    if (real_p(v1509) !== false) {
        var if_res576 = rvoid();
    } else {
        var if_res576 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("round"), $rjs_core.UString.make("real?"), v1509));
    }
    if_res576;
    return Math.round(v1509);
};
var min = function(a1510, b1511) {
    if (real_p(a1510) !== false) {
        var if_res577 = rvoid();
    } else {
        var if_res577 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("min"), $rjs_core.UString.make("real?"), a1510));
    }
    if_res577;
    if (real_p(b1511) !== false) {
        var if_res578 = rvoid();
    } else {
        var if_res578 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("min"), $rjs_core.UString.make("real?"), b1511));
    }
    if_res578;
    return Math.min(a1510, b1511);
};
var max = function(a1512, b1513) {
    if (real_p(a1512) !== false) {
        var if_res579 = rvoid();
    } else {
        var if_res579 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("max"), $rjs_core.UString.make("real?"), a1512));
    }
    if_res579;
    if (real_p(b1513) !== false) {
        var if_res580 = rvoid();
    } else {
        var if_res580 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("max"), $rjs_core.UString.make("real?"), b1513));
    }
    if_res580;
    return Math.max(a1512, b1513);
};
var log = function(v1514) {
    if (number_p(v1514) !== false) {
        var if_res581 = rvoid();
    } else {
        var if_res581 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("log"), $rjs_core.UString.make("number?"), v1514));
    }
    if_res581;
    return Math.log(v1514);
};
var exp = function(w1515) {
    if (number_p(w1515) !== false) {
        var if_res582 = rvoid();
    } else {
        var if_res582 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("exp"), $rjs_core.UString.make("number?"), w1515));
    }
    if_res582;
    return Math.exp(w1515);
};
var expt = function(w1516, z1517) {
    if (number_p(w1516) !== false) {
        var if_res583 = rvoid();
    } else {
        var if_res583 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("expt"), $rjs_core.UString.make("number?"), w1516));
    }
    if_res583;
    if (number_p(z1517) !== false) {
        var if_res584 = rvoid();
    } else {
        var if_res584 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("expt"), $rjs_core.UString.make("number?"), z1517));
    }
    if_res584;
    return Math.pow(w1516, z1517);
};
var sqrt = function(v1518) {
    if (number_p(v1518) !== false) {
        var if_res585 = rvoid();
    } else {
        var if_res585 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("sqrt"), $rjs_core.UString.make("number?"), v1518));
    }
    if_res585;
    return Math.sqrt(v1518);
};
var sqr = function(v1519) {
    if (number_p(v1519) !== false) {
        var if_res586 = rvoid();
    } else {
        var if_res586 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("sqr"), $rjs_core.UString.make("number?"), v1519));
    }
    if_res586;
    return __times_(v1519, v1519);
};
var truncate = function(v1520) {
    if (number_p(v1520) !== false) {
        var if_res587 = rvoid();
    } else {
        var if_res587 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("truncate"), $rjs_core.UString.make("number?"), v1520));
    }
    if_res587;
    return Math.trunc(v1520);
};
var remainder = function(a1521, b1522) {
    if (integer_p(a1521) !== false) {
        var if_res588 = rvoid();
    } else {
        var if_res588 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("remainder"), $rjs_core.UString.make("integer?"), a1521));
    }
    if_res588;
    if (integer_p(b1522) !== false) {
        var if_res589 = rvoid();
    } else {
        var if_res589 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("remainder"), $rjs_core.UString.make("integer?"), b1522));
    }
    if_res589;
    return a1521 % b1522;
};
var number__gt_string = function(n1523) {
    if (number_p(n1523) !== false) {
        var if_res590 = rvoid();
    } else {
        var if_res590 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("number->string"), $rjs_core.UString.make("number?"), n1523));
    }
    if_res590;
    return M1.Core.UString.makeMutable(n1523.toString());
};
var arithmetic_shift = function(n1524, m1525) {
    if (integer_p(n1524) !== false) {
        var if_res591 = rvoid();
    } else {
        var if_res591 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("arithmetic-shift"), $rjs_core.UString.make("integer?"), n1524));
    }
    if_res591;
    if (integer_p(m1525) !== false) {
        var if_res592 = rvoid();
    } else {
        var if_res592 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("arithmetic-shift"), $rjs_core.UString.make("integer?"), m1525));
    }
    if_res592;
    if (negative_p(m1525) !== false) {
        var if_res593 = n1524 >> __(m1525);
    } else {
        var if_res593 = n1524 << m1525;
    }
    return if_res593;
};
var inexact__gt_exact = function(v1526) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v1526;
};
var exact__gt_inexact = function(v1527) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v1527;
};
var make_rectangular = function(x1528, y1529) {
    if (real_p(x1528) !== false) {
        var if_res594 = rvoid();
    } else {
        var if_res594 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-rectangular"), $rjs_core.UString.make("real?"), x1528));
    }
    if_res594;
    if (real_p(y1529) !== false) {
        var if_res595 = rvoid();
    } else {
        var if_res595 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-rectangular"), $rjs_core.UString.make("real?"), y1529));
    }
    if_res595;
    return M1.Core.Pair.make(x1528, y1529);
};
var make_polar = function(m1530, a1531) {
    if (real_p(m1530) !== false) {
        var if_res596 = rvoid();
    } else {
        var if_res596 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-polar"), $rjs_core.UString.make("real?"), m1530));
    }
    if_res596;
    if (real_p(a1531) !== false) {
        var if_res597 = rvoid();
    } else {
        var if_res597 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-polar"), $rjs_core.UString.make("real?"), a1531));
    }
    if_res597;
    return error($rjs_core.UString.make("Complex numbers not supported with JS numerber semantics"));
};
var real_part = function(z1532) {
    if (pair_p(z1532) !== false) {
        var if_res598 = rvoid();
    } else {
        var if_res598 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("real-part"), $rjs_core.UString.make("(if-scheme-numbers number? pair?)"), z1532));
    }
    if_res598;
    return z1532.hd(z1532);
};
var imag_part = function(z1533) {
    if (pair_p(z1533) !== false) {
        var if_res599 = rvoid();
    } else {
        var if_res599 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("imag-part"), $rjs_core.UString.make("(if-scheme-numbers number? pair?)"), z1533));
    }
    if_res599;
    return z1533.tl(z1533);
};
var magnitude = function(x1534) {
    if (number_p(x1534) !== false) {
        var if_res600 = rvoid();
    } else {
        var if_res600 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("magnitude"), $rjs_core.UString.make("number?"), x1534));
    }
    if_res600;
    return $rjs_core.attachProcedureArity(function(..._1535601) {
        var _1535 = $rjs_core.Pair.listFromArray(_1535601);
        return M1.Core.racketCoreError($rjs_core.UString.make("Not supported with JS number semantics"));
    });
};
var conjugate = function(x1536) {
    if (number_p(x1536) !== false) {
        var if_res602 = rvoid();
    } else {
        var if_res602 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("conjugate"), $rjs_core.UString.make("number?"), x1536));
    }
    if_res602;
    return $rjs_core.attachProcedureArity(function(..._1537603) {
        var _1537 = $rjs_core.Pair.listFromArray(_1537603);
        return M1.Core.racketCoreError($rjs_core.UString.make("Not supported with JS number semantics"));
    });
};
var angle = function(x1538) {
    if (number_p(x1538) !== false) {
        var if_res604 = rvoid();
    } else {
        var if_res604 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("angle"), $rjs_core.UString.make("number?"), x1538));
    }
    if_res604;
    return $rjs_core.attachProcedureArity(function(..._1539605) {
        var _1539 = $rjs_core.Pair.listFromArray(_1539605);
        return M1.Core.racketCoreError($rjs_core.UString.make("Not supported with JS number semantics"));
    });
};
var rational_p = Number.isInteger;
var numerator = function(x1540) {
    if (number_p(x1540) !== false) {
        var if_res606 = rvoid();
    } else {
        var if_res606 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("numerator"), $rjs_core.UString.make("number?"), x1540));
    }
    if_res606;
    return x1540;
};
var denominator = function(x1541) {
    if (number_p(x1541) !== false) {
        var if_res607 = rvoid();
    } else {
        var if_res607 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("denominator"), $rjs_core.UString.make("number?"), x1541));
    }
    if_res607;
    return 1;
};
var bitwise_and = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(M1.Core.Number.JS.bitwiseAnd, 1), $rjs_core.UString.make("bitwise-and"));
var bitwise_ior = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(M1.Core.Number.JS.bitwiseOr, 1), $rjs_core.UString.make("bitwise-ior"));
var bitwise_xor = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(M1.Core.Number.JS.bitwiseXor, 1), $rjs_core.UString.make("bitwise-xor"));
var bitwise_not = function(v1542) {
    if (number_p(v1542) !== false) {
        var if_res608 = rvoid();
    } else {
        var if_res608 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bitwise-not"), $rjs_core.UString.make("number?"), v1542));
    }
    if_res608;
    return M1.Core.Number.JS.bitwiseNot(v1542);
};
var bitwise_bit_set_p = function(n1543, m1544) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return not(zero_p(bitwise_and(n1543, arithmetic_shift(1, m1544))));
};
var not = function(v1545) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return equal_p(v1545, false) || false;
};
var rfalse = false;
var rtrue = true;
var false_p = function(v1546) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v1546 === false;
};
var boolean_p = function(v1547) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (v1547 === true) || (v1547 === false);
};
var car = function(pair1548) {
    if (pair_p(pair1548) !== false) {
        var if_res609 = rvoid();
    } else {
        var if_res609 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("car"), $rjs_core.UString.make("pair?"), pair1548));
    }
    if_res609;
    return pair1548.hd;
};
var cdr = function(pair1549) {
    if (pair_p(pair1549) !== false) {
        var if_res610 = rvoid();
    } else {
        var if_res610 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cdr"), $rjs_core.UString.make("pair?"), pair1549));
    }
    if_res610;
    return pair1549.tl;
};
var cons = M1.Core.attachProcedureName(M1.Core.Pair.make, $rjs_core.UString.make("cons"));
var pair_p = M1.Core.attachProcedureName(M1.Core.Pair.check, $rjs_core.UString.make("pair?"));
var caar = function(v1550) {
    if ((function(v1551) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v1551) && pair_p(v1551.hd);
        })(v1550) !== false) {
        var if_res611 = rvoid();
    } else {
        var if_res611 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("caar"), $rjs_core.UString.make("(check/pair-of? pair? #t)"), v1550));
    }
    if_res611;
    return v1550.hd.hd;
};
var cadr = function(v1552) {
    if ((function(v1553) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v1553) && pair_p(v1553.tl);
        })(v1552) !== false) {
        var if_res612 = rvoid();
    } else {
        var if_res612 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cadr"), $rjs_core.UString.make("(check/pair-of? #t pair?)"), v1552));
    }
    if_res612;
    return v1552.tl.hd;
};
var cdar = function(v1554) {
    if ((function(v1555) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v1555) && pair_p(v1555.hd);
        })(v1554) !== false) {
        var if_res613 = rvoid();
    } else {
        var if_res613 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cdar"), $rjs_core.UString.make("(check/pair-of? pair? #t)"), v1554));
    }
    if_res613;
    return v1554.hd.tl;
};
var cddr = function(v1556) {
    if ((function(v1557) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v1557) && pair_p(v1557.tl);
        })(v1556) !== false) {
        var if_res614 = rvoid();
    } else {
        var if_res614 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cddr"), $rjs_core.UString.make("(check/pair-of? #t pair?)"), v1556));
    }
    if_res614;
    return v1556.tl.tl;
};
var cdddr = function(v1558) {
    if ((function(v1559) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v1559) && (function(v1560) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M1.Core.Pair.check(v1560) && pair_p(v1560.tl);
            })(v1559.tl);
        })(v1558) !== false) {
        var if_res615 = rvoid();
    } else {
        var if_res615 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cdddr"), $rjs_core.UString.make("(check/pair-of? #t (check/pair-of? #t pair?))"), v1558));
    }
    if_res615;
    return v1558.tl.tl.tl;
};
var caddr = function(v1561) {
    if ((function(v1562) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v1562) && (function(v1563) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M1.Core.Pair.check(v1563) && pair_p(v1563.tl);
            })(v1562.tl);
        })(v1561) !== false) {
        var if_res616 = rvoid();
    } else {
        var if_res616 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("caddr"), $rjs_core.UString.make("(check/pair-of? #t (check/pair-of? #t pair?))"), v1561));
    }
    if_res616;
    return v1561.tl.tl.hd;
};
var cadddr = function(v1564) {
    if ((function(v1565) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v1565) && (function(v1566) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M1.Core.Pair.check(v1566) && (function(v1567) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return M1.Core.Pair.check(v1567) && pair_p(v1567.tl);
                })(v1566.tl);
            })(v1565.tl);
        })(v1564) !== false) {
        var if_res617 = rvoid();
    } else {
        var if_res617 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cadddr"), $rjs_core.UString.make("(check/pair-of? #t (check/pair-of? #t (check/pair-of? #t pair?)))"), v1564));
    }
    if_res617;
    return v1564.tl.tl.tl.hd;
};
var cddddr = function(v1568) {
    if ((function(v1569) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v1569) && (function(v1570) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M1.Core.Pair.check(v1570) && (function(v1571) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return M1.Core.Pair.check(v1571) && pair_p(v1571.tl);
                })(v1570.tl);
            })(v1569.tl);
        })(v1568) !== false) {
        var if_res618 = rvoid();
    } else {
        var if_res618 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cddddr"), $rjs_core.UString.make("(check/pair-of? #t (check/pair-of? #t (check/pair-of? #t pair?)))"), v1568));
    }
    if_res618;
    return v1568.tl.tl.tl.tl;
};
var rnull = M1.Core.Pair.EMPTY;
var list = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(M1.Core.Pair.makeList, 0), $rjs_core.UString.make("list"));
var null_p = M1.Core.Pair.isEmpty;
var list_p = M1.Core.Pair.isList;
var length = function(v1572) {
    if (list_p(v1572) !== false) {
        var if_res619 = rvoid();
    } else {
        var if_res619 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("length"), $rjs_core.UString.make("list?"), v1572));
    }
    if_res619;
    return v1572.length;
};
var reverse = function(lst1573) {
    if (list_p(lst1573) !== false) {
        var if_res620 = rvoid();
    } else {
        var if_res620 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("reverse"), $rjs_core.UString.make("list?"), lst1573));
    }
    if_res620;
    var loop1574 = function(lst1575, result1576) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst1575) !== false) {
            var if_res621 = result1576;
        } else {
            var if_res621 = loop1574(lst1575.tl, M1.Core.Pair.make(lst1575.hd, result1576));
        }
        return if_res621;
    };
    return loop1574(lst1573, $rjs_core.Pair.EMPTY);
};
var list_times_ = function() {
    var let_result622 = values();
    var n_args1577 = arguments.length;
    var top_arguments1578 = arguments;
    var loop1579 = function(ii1580, result1581) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((ii1580 === 0) !== false) {
            var if_res623 = result1581;
        } else {
            var next_ii1582 = ii1580 - 1;
            var if_res623 = loop1579(next_ii1582, M1.Core.Pair.make(top_arguments1578[next_ii1582], result1581));
        }
        return if_res623;
    };
    return loop1579(n_args1577 - 1, arguments[n_args1577 - 1]);
};
var append = function() {
    var let_result624 = values();
    var result1583 = $rjs_core.Pair.EMPTY;
    var lsts1584 = arguments;
    var loop1585 = function(i1586) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i1586 < lsts1584.length) !== false) {
            var lst1587 = lsts1584[i1586];
            result1583 = foldr(M1.Core.Pair.make, lst1587, result1583);
            var if_res625 = loop1585(i1586 + 1);
        } else {
            var if_res625 = rvoid();
        }
        return if_res625;
    };
    loop1585(0);
    return result1583;
};
var for_each = function(lam1588) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res626 = null;
    } else {
        var if_res626 = rvoid();
    }
    if_res626;
    var let_result627 = values();
    var lsts1589 = Array.prototype.slice.call(arguments, 1);
    if (procedure_p(lam1588) !== false) {
        var if_res628 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), lam1588, $rjs_core.UString.make(", at:"), 0);
        var if_res628 = null;
    }
    if_res628;
    map.apply(null, [lam1588].concat(lsts1589));
    return null;
};
var mcons = function(hd1590, tl1591) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.MPair.make(hd1590, tl1591);
};
var mpair_p = function(v1592) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.MPair.check(v1592);
};
var mcar = function(p1593) {
    if (mpair_p(p1593) !== false) {
        var if_res629 = rvoid();
    } else {
        var if_res629 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("mcar"), $rjs_core.UString.make("mpair?"), p1593));
    }
    if_res629;
    return p1593.car();
};
var mcdr = function(p1594) {
    if (mpair_p(p1594) !== false) {
        var if_res630 = rvoid();
    } else {
        var if_res630 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("mcdr"), $rjs_core.UString.make("mpair?"), p1594));
    }
    if_res630;
    return p1594.cdr();
};
var set_mcar_bang_ = function(p1595, v1596) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (mpair_p(p1595) !== false) {
        var if_res631 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("mpair?"), $rjs_core.UString.make(", given:"), p1595, $rjs_core.UString.make(", at:"), 0);
        var if_res631 = null;
    }
    if_res631;
    return p1595.setCar(v1596);
};
var set_mcdr_bang_ = function(p1597, v1598) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (mpair_p(p1597) !== false) {
        var if_res632 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("mpair?"), $rjs_core.UString.make(", given:"), p1597, $rjs_core.UString.make(", at:"), 0);
        var if_res632 = null;
    }
    if_res632;
    return p1597.setCdr(v1598);
};
var make_struct_type = function(name1599, super_type1600, init_field_count1601, auto_field_count1602, auto_v1603, props1604, inspector1605, proc_spec1606, immutables1607, guard1608, constructor_name1609) {
    return M1.Core.Struct.makeStructType({
        'name': name1599.toString(),
        'superType': super_type1600,
        'initFieldCount': init_field_count1601,
        'autoFieldCount': auto_field_count1602,
        'autoV': auto_v1603,
        'props': props1604,
        'inspector': inspector1605,
        'procSpec': proc_spec1606,
        'immutables': immutables1607,
        'guard': guard1608,
        'constructorName': constructor_name1609
    });
};
var make_struct_field_accessor = function(ref1610, index1611, field_name1612) {
    return function(s1613) {
        if ((arguments.length !== 1) !== false) {
            throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
            var if_res633 = null;
        } else {
            var if_res633 = rvoid();
        }
        if_res633;
        return ref1610(s1613, index1611);
    };
};
var make_struct_field_mutator = function(set1614, index1615, fieldName1616) {
    return function(s1617, v1618) {
        if ((arguments.length !== 2) !== false) {
            throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
            var if_res634 = null;
        } else {
            var if_res634 = rvoid();
        }
        if_res634;
        return set1614(s1617, index1615, v1618);
    };
};
var make_struct_type_property = function(name1619, guard1620, supers1621, can_impersonate_p1622) {
    return M1.Core.Struct.makeStructTypeProperty({
        'name': name1619,
        'guard': guard1620,
        'supers': supers1621,
        'canImpersonate': can_impersonate_p1622
    });
};
var check_struct_type = function(name1623, what1624) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (what1624 !== false) {
        if (M1.Core.Struct.isStructType(what1624) !== false) {
            var if_res635 = rvoid();
        } else {
            throw M1.Core.racketCoreError($rjs_core.UString.make("not a struct type"));
            var if_res635 = null;
        }
        if_res635;
        var if_res636 = what1624;
    } else {
        var if_res636 = rvoid();
    }
    return if_res636;
};
var struct_type_p = function(v1625) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Struct.isStructType(v1625);
};
var struct_type_info = function(desc1626) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Values.make(M1.Core.Struct.structTypeInfo(desc1626));
};
var vector = function() {
    return M1.Core.Vector.make(M1.Core.argumentsToArray(arguments), true);
};
var make_vector = function(size1627, v1628) {
    if (integer_p(size1627) !== false) {
        var if_res637 = rvoid();
    } else {
        var if_res637 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-vector"), $rjs_core.UString.make("integer?"), size1627));
    }
    if_res637;
    if (eq_p(v1628, undefined) !== false) {
        var if_res638 = 0;
    } else {
        var if_res638 = v1628;
    }
    return M1.Core.Vector.makeInit(size1627, if_res638);
};
var vector_p = M1.Core.Vector.check;
var vector_length = function(v1629) {
    if (vector_p(v1629) !== false) {
        var if_res639 = rvoid();
    } else {
        var if_res639 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-length"), $rjs_core.UString.make("vector?"), v1629));
    }
    if_res639;
    return v1629.length();
};
var vector_ref = function(vec1630, i1631) {
    if (vector_p(vec1630) !== false) {
        var if_res640 = rvoid();
    } else {
        var if_res640 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-ref"), $rjs_core.UString.make("vector?"), vec1630));
    }
    if_res640;
    if (integer_p(i1631) !== false) {
        var if_res641 = rvoid();
    } else {
        var if_res641 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-ref"), $rjs_core.UString.make("integer?"), i1631));
    }
    if_res641;
    return vec1630.ref(i1631);
};
var vector_set_bang_ = function(vec1632, i1633, v1634) {
    if (vector(vec1632) !== false) {
        var if_res642 = rvoid();
    } else {
        var if_res642 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-set!"), $rjs_core.UString.make("vector"), vec1632));
    }
    if_res642;
    if (integer_p(i1633) !== false) {
        var if_res643 = rvoid();
    } else {
        var if_res643 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-set!"), $rjs_core.UString.make("integer?"), i1633));
    }
    if_res643;
    return vec1632.set(i1633, v1634);
};
var vector__gt_list = function(vec1635) {
    if (vector_p(vec1635) !== false) {
        var if_res644 = rvoid();
    } else {
        var if_res644 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector->list"), $rjs_core.UString.make("vector?"), vec1635));
    }
    if_res644;
    return M1.Core.Pair.listFromArray(vec1635.items);
};
var list__gt_vector = function(lst1636) {
    if (list_p(lst1636) !== false) {
        var if_res645 = rvoid();
    } else {
        var if_res645 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("list->vector"), $rjs_core.UString.make("list?"), lst1636));
    }
    if_res645;
    return M1.Core.Vector.make(M1.Core.Pair.listToArray(lst1636), true);
};
var vector__gt_immutable_vector = function(vec1637) {
    if (vector_p(vec1637) !== false) {
        var if_res646 = rvoid();
    } else {
        var if_res646 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector->immutable-vector"), $rjs_core.UString.make("vector?"), vec1637));
    }
    if_res646;
    return M1.Core.Vector.copy(vec1637, false);
};
var vector_copy = function(vec1638) {
    if (vector_p(vec1638) !== false) {
        var if_res647 = rvoid();
    } else {
        var if_res647 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy"), $rjs_core.UString.make("vector?"), vec1638));
    }
    if_res647;
    return M1.Core.Vector.copy(vec1638, true);
};
var vector_copy_bang_ = function(dest1639, dest_start1640, src1641, src_start1642, src_end1643) {
    if (vector_p(dest1639) !== false) {
        var if_res648 = rvoid();
    } else {
        var if_res648 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("vector?"), dest1639));
    }
    if_res648;
    if (integer_p(dest_start1640) !== false) {
        var if_res649 = rvoid();
    } else {
        var if_res649 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("integer?"), dest_start1640));
    }
    if_res649;
    if (vector_p(src1641) !== false) {
        var if_res650 = rvoid();
    } else {
        var if_res650 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("vector?"), src1641));
    }
    if_res650;
    if (integer_p(src_start1642) !== false) {
        var if_res651 = rvoid();
    } else {
        var if_res651 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("integer?"), src_start1642));
    }
    if_res651;
    if (integer_p(src_end1643) !== false) {
        var if_res652 = rvoid();
    } else {
        var if_res652 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("integer?"), src_end1643));
    }
    if_res652;
    return dest1639.copy(dest_start1640, src1641, src_start1642, src_end1643);
};
var hash = function() {
    var let_result653 = values();
    var kv_times_1644 = arguments;
    if (((kv_times_1644.length % 2) !== 0) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("invalid number of arguments"));
        var if_res654 = null;
    } else {
        var if_res654 = rvoid();
    }
    if_res654;
    var items1645 = [];
    var loop1646 = function(i1647) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i1647 < kv_times_1644.length) !== false) {
            items1645.push([kv_times_1644[i1647], kv_times_1644[__plus_(i1647, 1)]]);
            var if_res655 = loop1646(i1647 + 2);
        } else {
            var if_res655 = rvoid();
        }
        return if_res655;
    };
    loop1646(0);
    return M1.Core.Hash.makeEqual(items1645, false);
};
var hasheqv = function() {
    var let_result656 = values();
    var kv_times_1648 = arguments;
    if (((kv_times_1648.length % 2) !== 0) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("invalid number of arguments"));
        var if_res657 = null;
    } else {
        var if_res657 = rvoid();
    }
    if_res657;
    var items1649 = [];
    var loop1650 = function(i1651) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i1651 < kv_times_1648.length) !== false) {
            items1649.push([kv_times_1648[i1651], kv_times_1648[__plus_(i1651, 1)]]);
            var if_res658 = loop1650(i1651 + 2);
        } else {
            var if_res658 = rvoid();
        }
        return if_res658;
    };
    loop1650(0);
    return M1.Core.Hash.makeEqv(items1649, false);
};
var hasheq = function() {
    var let_result659 = values();
    var kv_times_1652 = arguments;
    if (((kv_times_1652.length % 2) !== 0) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("invalid number of arguments"));
        var if_res660 = null;
    } else {
        var if_res660 = rvoid();
    }
    if_res660;
    var items1653 = [];
    var loop1654 = function(i1655) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i1655 < kv_times_1652.length) !== false) {
            items1653.push([kv_times_1652[i1655], kv_times_1652[__plus_(i1655, 1)]]);
            var if_res661 = loop1654(i1655 + 2);
        } else {
            var if_res661 = rvoid();
        }
        return if_res661;
    };
    loop1654(0);
    return M1.Core.Hash.makeEq(items1653, false);
};
var make_hash = function(assocs1656) {
    var let_result662 = values();
    var assocs_times_1657 = assocs1656 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqualFromAssocs(assocs_times_1657, true);
};
var make_hasheqv = function(assocs1658) {
    var let_result663 = values();
    var assocs_times_1659 = assocs1658 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqvFromAssocs(assocs_times_1659, true);
};
var make_hasheq = function(assocs1660) {
    var let_result664 = values();
    var assocs_times_1661 = assocs1660 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqFromAssocs(assocs_times_1661, true);
};
var make_immutable_hash = function(assocs1662) {
    var let_result665 = values();
    var assocs_times_1663 = assocs1662 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqualFromAssocs(assocs_times_1663, false);
};
var make_immutable_hasheqv = function(assocs1664) {
    var let_result666 = values();
    var assocs_times_1665 = assocs1664 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqvFromAssocs(assocs_times_1665, false);
};
var make_immutable_hasheq = function(assocs1666) {
    var let_result667 = values();
    var assocs_times_1667 = assocs1666 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqFromAssocs(assocs_times_1667, false);
};
var hash_p = M1.Core.Hash.check;
var hash_equal_p = M1.Core.Hash.isEqualHash;
var hash_eqv_p = M1.Core.Hash.isEqvHash;
var hash_eq_p = M1.Core.Hash.isEqHash;
var hash_weak_p = M1.Core.Hash.isWeakHash;
var cl668 = function(h1668, k1669) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h1668.hasKey(k1669) !== false) {
        var if_res671 = h1668._h.get(k1669);
    } else {
        var if_res671 = raise(M1.Core.makeArgumentsError($rjs_core.UString.make("hash-ref"), $rjs_core.UString.make("no value found for key"), $rjs_core.UString.make("key"), k1669));
    }
    return if_res671;
};
var cl669 = function(h1670, k1671, fail1672) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1670.ref(k1671, fail1672);
};
var hash_ref = $rjs_core.attachProcedureArity(function() {
    var fixed_lam670 = {
        '2': cl668,
        '3': cl669
    } [arguments.length];
    if (fixed_lam670 !== undefined) {
        return fixed_lam670.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var hash_has_key_p = function(h1673, k1674) {
    return h1673.hasKey(k1674);
};
var cl672 = function(h1675, k1676) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h1675.hasKey(k1676) !== false) {
        var if_res675 = h1675.refKey(k1676);
    } else {
        var if_res675 = raise(M1.Core.makeArgumentsError($rjs_core.UString.make("hash-ref-key"), $rjs_core.UString.make("hash does not contain key"), $rjs_core.UString.make("key"), k1676));
    }
    return if_res675;
};
var cl673 = function(h1677, k1678, fail1679) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1677.refKey(k1678, fail1679);
};
var hash_ref_key = $rjs_core.attachProcedureArity(function() {
    var fixed_lam674 = {
        '2': cl672,
        '3': cl673
    } [arguments.length];
    if (fixed_lam674 !== undefined) {
        return fixed_lam674.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var hash_set = function(h1680, k1681, v1682) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h1680.isImmutable() !== false) {
        var if_res676 = h1680.set(k1681, v1682);
    } else {
        var if_res676 = raise(M1.Core.makeArgumentError($rjs_core.UString.make("hash-set"), $rjs_core.UString.make("(and/c hash? immutable?)"), 0, h1680, k1681, v1682));
    }
    return if_res676;
};
var hash_remove = function(h1683, k1684) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h1683.isImmutable() !== false) {
        var if_res677 = h1683.remove(k1684);
    } else {
        var if_res677 = raise(M1.Core.makeArgumentError($rjs_core.UString.make("hash-remove"), $rjs_core.UString.make("(and/c hash? immutable?)"), 0, h1683, k1684));
    }
    return if_res677;
};
var cl678 = function(h1685, proc1686) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Hash.map(h1685, proc1686);
};
var cl679 = function(h1687, proc1688, try_order_p1689) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Hash.map(h1687, proc1688);
};
var hash_map = $rjs_core.attachProcedureArity(function() {
    var fixed_lam680 = {
        '2': cl678,
        '3': cl679
    } [arguments.length];
    if (fixed_lam680 !== undefined) {
        return fixed_lam680.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var hash_count = function(h1690) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1690.size();
};
var hash_remove_bang_ = function(h1691, k1692) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h1691.isImmutable(h1691) !== false) {
        var if_res681 = raise(M1.Core.makeArgumentError($rjs_core.UString.make("hash-remove!"), $rjs_core.UString.make("(and/c hash? (not/c immutable?))"), 0, h1691, k1692));
    } else {
        var if_res681 = h1691.doremove(k1692);
    }
    return if_res681;
};
var hash_set_bang_ = function(h1693, k1694, v1695) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h1693.isImmutable(h1693) !== false) {
        var if_res682 = raise(M1.Core.makeArgumentError($rjs_core.UString.make("hash-set!"), $rjs_core.UString.make("(and/c hash? (not/c immutable?))"), 0, h1693, k1694, v1695));
    } else {
        var if_res682 = h1693.doset(k1694, v1695);
    }
    return if_res682;
};
var hash_iterate_first = function(h1696) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1696.iterateFirst();
};
var hash_iterate_next = function(h1697, i1698) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1697.iterateNext(i1698);
};
var hash_iterate_key = function(h1699, i1700) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1699.iterateKey(i1700);
};
var hash_iterate_value = function(h1701, i1702) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1701.iterateValue(i1702);
};
var hash_iterate_key_plus_value = function(h1703, i1704) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1703.iterateKeyValue(i1704);
};
var hash_iterate_pair = function(h1705, i1706) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1705.iteratePair(i1706);
};
var hash_keys_subset_p = function(h11707, h21708) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((M1.Core.Hash.check(h11707) && M1.Core.Hash.check(h21708)) !== false) {
        if (h11707.isSameType(h21708) !== false) {
            var if_res683 = h11707.isKeysSubset(h21708);
        } else {
            var if_res683 = raise(M1.Core.makeArgumentsError($rjs_core.UString.make("hash-keys-subset?"), $rjs_core.UString.make("given hash tables do not use the same key comparison"), $rjs_core.UString.make("first table"), h11707, $rjs_core.UString.make("second table"), h21708));
        }
        var if_res684 = if_res683;
    } else {
        var if_res684 = false;
    }
    return if_res684;
};
var hash_union = function(h11709, h21710) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h11709.union(h21710);
};
var hash_strong_p = function(h1711) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return true;
};
var apply = function(lam1712) {
    var let_result685 = values();
    var args1713 = Array.prototype.slice.call(arguments, 1);
    if (procedure_p(lam1712) !== false) {
        var if_res686 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), lam1712, $rjs_core.UString.make(", at:"), 0);
        var if_res686 = null;
    }
    if_res686;
    var let_result687 = values();
    if (zero_p(args1713.length) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res691 = null;
    } else {
        if (equal_p(args1713.length, 1) !== false) {
            if (null_p(args1713[0]) !== false) {
                var if_res689 = rvoid();
            } else {
                if (M1.Core.Pair.check(args1713[0]) !== false) {
                    var if_res688 = rvoid();
                } else {
                    throw M1.Core.racketContractError($rjs_core.UString.make("expected a"), M1.Core.Pair, $rjs_core.UString.make(", but given"), args1713[0]);
                    var if_res688 = null;
                }
                var if_res689 = if_res688;
            }
            if_res689;
            var if_res690 = M1.Core.Pair.listToArray(args1713[0]);
        } else {
            var if_res690 = args1713.concat(M1.Core.Pair.listToArray(args1713.pop()));
        }
        var if_res691 = if_res690;
    }
    var final_args1714 = if_res691;
    return lam1712.apply(null, final_args1714);
};
var map = function(fn1715) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res692 = null;
    } else {
        var if_res692 = rvoid();
    }
    if_res692;
    var let_result693 = values();
    var lists1716 = Array.prototype.slice.call(arguments, 1);
    if (procedure_p(fn1715) !== false) {
        var if_res694 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), fn1715, $rjs_core.UString.make(", at:"), 0);
        var if_res694 = null;
    }
    if_res694;
    var let_result695 = values();
    if (__lt__eq_(lists1716.length, 0) !== false) {
        var if_res696 = error($rjs_core.PrimitiveSymbol.make("map"), $rjs_core.UString.make("need at-least two arguments"));
    } else {
        var if_res696 = rvoid();
    }
    if_res696;
    var let_result697 = values();
    var lst_len1717 = length(lists1716[0]);
    var loop1718 = function(i1719) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i1719 < lists1716.length) !== false) {
            var v1720 = lists1716[i1719];
            if (eq_p(length(v1720), lst_len1717) !== false) {
                var if_res698 = rvoid();
            } else {
                var if_res698 = error($rjs_core.PrimitiveSymbol.make("map"), $rjs_core.UString.make("all input lists must have equal length"));
            }
            if_res698;
            var if_res699 = loop1718(i1719 + 1);
        } else {
            var if_res699 = rvoid();
        }
        return if_res699;
    };
    loop1718(1);
    var let_result700 = values();
    var result1721 = Array(lst_len1717);
    var args1722 = Array(lists1716.length);
    var loop1723 = function(result_i1724) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((result_i1724 < lst_len1717) !== false) {
            var loop1725 = function(lst_j1726) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if ((lst_j1726 < lists1716.length) !== false) {
                    var lst1727 = lists1716[lst_j1726];
                    args1722[lst_j1726] = lst1727.hd;
                    lists1716[lst_j1726] = lst1727.tl;
                    var if_res701 = loop1725(lst_j1726 + 1);
                } else {
                    var if_res701 = rvoid();
                }
                return if_res701;
            };
            loop1725(0);
            result1721[result_i1724] = fn1715.apply(null, args1722);
            var if_res702 = loop1723(result_i1724 + 1);
        } else {
            var if_res702 = rvoid();
        }
        return if_res702;
    };
    loop1723(0);
    return M1.Core.Pair.listFromArray(result1721);
};
var foldl = function(fn1728, init1729) {
    if ((arguments.length < 2) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res703 = null;
    } else {
        var if_res703 = rvoid();
    }
    if_res703;
    var let_result704 = values();
    var lists1730 = Array.prototype.slice.call(arguments, 2);
    if (procedure_p(fn1728) !== false) {
        var if_res705 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), fn1728, $rjs_core.UString.make(", at:"), 0);
        var if_res705 = null;
    }
    if_res705;
    var let_result706 = values();
    if (__lt__eq_(lists1730.length, 0) !== false) {
        var if_res707 = error($rjs_core.PrimitiveSymbol.make("foldl"), $rjs_core.UString.make("need at-least two arguments"));
    } else {
        var if_res707 = rvoid();
    }
    if_res707;
    var let_result708 = values();
    var lst_len1731 = length(lists1730[0]);
    var loop1732 = function(i1733) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i1733 < lists1730.length) !== false) {
            var v1734 = lists1730[i1733];
            if (eq_p(length(v1734), lst_len1731) !== false) {
                var if_res709 = rvoid();
            } else {
                var if_res709 = error($rjs_core.PrimitiveSymbol.make("foldl"), $rjs_core.UString.make("all input lists must have equal length"));
            }
            if_res709;
            var if_res710 = loop1732(i1733 + 1);
        } else {
            var if_res710 = rvoid();
        }
        return if_res710;
    };
    loop1732(1);
    var let_result711 = values();
    var result1735 = init1729;
    var args1736 = Array(lists1730.length + 1);
    var loop1737 = function(result_i1738) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((result_i1738 < lst_len1731) !== false) {
            var loop1739 = function(lst_j1740) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if ((lst_j1740 < lists1730.length) !== false) {
                    var lst1741 = lists1730[lst_j1740];
                    args1736[lst_j1740] = lst1741.hd;
                    lists1730[lst_j1740] = lst1741.tl;
                    var if_res712 = loop1739(lst_j1740 + 1);
                } else {
                    var if_res712 = rvoid();
                }
                return if_res712;
            };
            loop1739(0);
            args1736[lists1730.length] = result1735;
            result1735 = fn1728.apply(null, args1736);
            var if_res713 = loop1737(result_i1738 + 1);
        } else {
            var if_res713 = rvoid();
        }
        return if_res713;
    };
    loop1737(0);
    return result1735;
};
var _foldr = function(fn1742, init1743, lists1744) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (null_p(lists1744[0]) !== false) {
        var if_res715 = init1743;
    } else {
        var args1745 = Array(add1(lists1744.length));
        var loop1746 = function(ii1747) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if ((ii1747 < lists1744.length) !== false) {
                var lst1748 = lists1744[ii1747];
                args1745[ii1747] = lst1748.hd;
                lists1744[ii1747] = lst1748.tl;
                var if_res714 = loop1746(ii1747 + 1);
            } else {
                var if_res714 = rvoid();
            }
            return if_res714;
        };
        loop1746(0);
        args1745[lists1744.length] = _foldr(fn1742, init1743, lists1744);
        var if_res715 = fn1742.apply(null, args1745);
    }
    return if_res715;
};
var foldr = function(fn1749, init1750) {
    if ((arguments.length < 2) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res716 = null;
    } else {
        var if_res716 = rvoid();
    }
    if_res716;
    var let_result717 = values();
    var lists1751 = Array.prototype.slice.call(arguments, 2);
    if (procedure_p(fn1749) !== false) {
        var if_res718 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), fn1749, $rjs_core.UString.make(", at:"), 0);
        var if_res718 = null;
    }
    if_res718;
    var let_result719 = values();
    if (__lt__eq_(lists1751.length, 0) !== false) {
        var if_res720 = error($rjs_core.PrimitiveSymbol.make("foldr"), $rjs_core.UString.make("need at-least two arguments"));
    } else {
        var if_res720 = rvoid();
    }
    if_res720;
    var let_result721 = values();
    var lst_len1752 = length(lists1751[0]);
    var loop1753 = function(i1754) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i1754 < lists1751.length) !== false) {
            var v1755 = lists1751[i1754];
            if (eq_p(length(v1755), lst_len1752) !== false) {
                var if_res722 = rvoid();
            } else {
                var if_res722 = error($rjs_core.PrimitiveSymbol.make("foldr"), $rjs_core.UString.make("all input lists must have equal length"));
            }
            if_res722;
            var if_res723 = loop1753(i1754 + 1);
        } else {
            var if_res723 = rvoid();
        }
        return if_res723;
    };
    loop1753(1);
    return _foldr(fn1749, init1750, lists1751);
};
var cl724 = function(end1756) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return range(0, end1756, 1);
};
var cl725 = function(start1757, end1758) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (__lt_(start1757, end1758) !== false) {
        var if_res728 = 1;
    } else {
        var if_res728 = -1;
    }
    return range(start1757, end1758, if_res728);
};
var cl726 = function(start1759, end1760, step1761) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var result1762 = [];
    if ((__gt__eq_(step1761, 0) && __lt_(step1761, end1760)) !== false) {
        var loop1763 = function(i1764) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if ((i1764 < end1760) !== false) {
                result1762.push(i1764);
                var if_res729 = loop1763(i1764 + step1761);
            } else {
                var if_res729 = rvoid();
            }
            return if_res729;
        };
        var if_res732 = loop1763(start1759);
    } else {
        if ((__lt__eq_(step1761, 0) && __lt_(end1760, start1759)) !== false) {
            var loop1765 = function(i1766) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if ((i1766 < __(end1760)) !== false) {
                    result1762.push(__(i1766));
                    var if_res730 = loop1765(i1766 + __(step1761));
                } else {
                    var if_res730 = rvoid();
                }
                return if_res730;
            };
            var if_res731 = loop1765(__(start1759));
        } else {
            var if_res731 = rvoid();
        }
        var if_res732 = if_res731;
    }
    if_res732;
    return M1.Core.Pair.listFromArray(result1762);
};
var range = $rjs_core.attachProcedureArity(function() {
    var fixed_lam727 = {
        '1': cl724,
        '2': cl725,
        '3': cl726
    } [arguments.length];
    if (fixed_lam727 !== undefined) {
        return fixed_lam727.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2, 3]);
var remove = function(v1767, lst1768, proc1769) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (eq_p(proc1769, undefined) !== false) {
        proc1769 = M1.Core.isEqual;
        var if_res733 = null;
    } else {
        var if_res733 = rvoid();
    }
    if_res733;
    var loop1770 = function(result1771, lst1772) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst1772) !== false) {
            var if_res735 = reverse(result1771);
        } else {
            if (proc1769(v1767, car(lst1772)) !== false) {
                var if_res734 = append(reverse(result1771), cdr(lst1772));
            } else {
                var if_res734 = rvoid();
            }
            if_res734;
            var if_res735 = loop1770(cons(car(lst1772), result1771), cdr(lst1772));
        }
        return if_res735;
    };
    return loop1770($rjs_core.Pair.EMPTY, lst1768);
};
var filter = function(fn1773, lst1774) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop1775 = function(result1776, lst1777) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst1777) !== false) {
            var if_res737 = reverse(result1776);
        } else {
            if (fn1773(lst1777.hd) !== false) {
                var if_res736 = loop1775(M1.Core.Pair.make(lst1777.hd, result1776), lst1777.tl);
            } else {
                var if_res736 = loop1775(result1776, lst1777.tl);
            }
            var if_res737 = if_res736;
        }
        return if_res737;
    };
    return loop1775($rjs_core.Pair.EMPTY, lst1774);
};
var ormap = function(fn1778) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res738 = null;
    } else {
        var if_res738 = rvoid();
    }
    if_res738;
    var let_result739 = values();
    var lists1779 = Array.prototype.slice.call(arguments, 1);
    return foldl.apply(this, [function() {
        var args1780 = M1.Core.argumentsToArray(arguments);
        var final_arg1781 = args1780.pop();
        return (final_arg1781 || fn1778.apply(null, args1780)) && true;
    }, false].concat(lists1779));
};
var andmap = function(fn1782) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res740 = null;
    } else {
        var if_res740 = rvoid();
    }
    if_res740;
    var let_result741 = values();
    var lists1783 = Array.prototype.slice.call(arguments, 1);
    return foldl.apply(this, [function() {
        var args1784 = M1.Core.argumentsToArray(arguments);
        var final_arg1785 = args1784.pop();
        return (final_arg1785 && fn1782.apply(null, args1784)) && true;
    }, true].concat(lists1783));
};
var member = function(v1786, lst1787) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop1788 = function(lst1789) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst1789) !== false) {
            var if_res743 = false;
        } else {
            if (M1.Core.isEqual(v1786, lst1789.hd) !== false) {
                var if_res742 = lst1789;
            } else {
                var if_res742 = loop1788(lst1789.tl);
            }
            var if_res743 = if_res742;
        }
        return if_res743;
    };
    return loop1788(lst1787);
};
var compose = function() {
    var procs1790 = M1.Core.argumentsToArray(arguments);
    return function() {
        var let_result744 = values();
        var result1791 = M1.Core.argumentsToArray(arguments);
        var procs_times_1792 = procs1790.reverse();
        var loop1793 = function(i1794) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if ((i1794 < procs_times_1792.length) !== false) {
                var p1795 = procs_times_1792[i1794];
                result1791 = p1795.apply(null, result1791);
                if (M1.Core.Values.check(result1791) !== false) {
                    result1791 = result1791.getAll();
                    var if_res745 = null;
                } else {
                    result1791 = [result1791];
                    var if_res745 = null;
                }
                if_res745;
                var if_res746 = loop1793(i1794 + 1);
            } else {
                var if_res746 = rvoid();
            }
            return if_res746;
        };
        loop1793(0);
        if ((result1791.length === 1) !== false) {
            var if_res747 = result1791[0];
        } else {
            var if_res747 = M1.Core.Values.make(result1791);
        }
        return if_res747;
    };
};
var compose1 = function() {
    var procs1796 = M1.Core.argumentsToArray(arguments);
    return function(v1797) {
        var let_result748 = values();
        var result1798 = v1797;
        var procs_times_1799 = procs1796.reverse();
        var loop1800 = function(i1801) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if ((i1801 < procs_times_1799.length) !== false) {
                var p1802 = procs_times_1799[i1801];
                result1798 = p1802(result1798);
                var if_res749 = loop1800(i1801 + 1);
            } else {
                var if_res749 = rvoid();
            }
            return if_res749;
        };
        loop1800(0);
        return result1798;
    };
};
var list_ref = function(lst1803, pos1804) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop1805 = function(i1806, lst1807) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst1807) !== false) {
            var if_res751 = error($rjs_core.PrimitiveSymbol.make("list-ref?"), $rjs_core.UString.make("insufficient elements"));
        } else {
            if ((i1806 === pos1804) !== false) {
                var if_res750 = lst1807.hd;
            } else {
                var if_res750 = loop1805(i1806 + 1, lst1807.tl);
            }
            var if_res751 = if_res750;
        }
        return if_res751;
    };
    return loop1805(0, lst1803);
};
var build_list = function(n1808, proc1809) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var arr1810 = Array(n1808);
    var loop1811 = function(i1812) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i1812 < n1808) !== false) {
            arr1810[i1812] = proc1809(i1812);
            var if_res752 = loop1811(i1812 + 1);
        } else {
            var if_res752 = rvoid();
        }
        return if_res752;
    };
    loop1811(0);
    return M1.Core.Pair.listFromArray(arr1810);
};
var make_list = function(n1813, v1814) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop1815 = function(result1816, i1817) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i1817 === n1813) !== false) {
            var if_res753 = result1816;
        } else {
            var if_res753 = loop1815(M1.Core.Pair.make(v1814, result1816), i1817 + 1);
        }
        return if_res753;
    };
    return loop1815($rjs_core.Pair.EMPTY, 0);
};
var flatten = function(lst1818) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (null_p(lst1818) !== false) {
        var if_res755 = lst1818;
    } else {
        if (pair_p(lst1818) !== false) {
            var if_res754 = append(flatten(lst1818.hd), flatten(lst1818.tl));
        } else {
            var if_res754 = list(lst1818);
        }
        var if_res755 = if_res754;
    }
    return if_res755;
};
var assoc = function(k1819, lst1820) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop1821 = function(lst1822) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst1822) !== false) {
            var if_res757 = false;
        } else {
            if (M1.Core.isEqual(k1819, lst1822.hd.hd) !== false) {
                var if_res756 = lst1822.hd;
            } else {
                var if_res756 = loop1821(lst1822.tl);
            }
            var if_res757 = if_res756;
        }
        return if_res757;
    };
    return loop1821(lst1820);
};
var memv = M1.Kernel.memv;
var memq = M1.Kernel.memq;
var memf = M1.Kernel.memf;
var findf = M1.Kernel.findf;
var assv = M1.Kernel.assv;
var assq = M1.Kernel.assq;
var assf = M1.Kernel.assf;
var alt_reverse = reverse;
var string = M1.Core.attachProcedureName(M1.Core.UString.makeMutableFromCharsVarArgs, $rjs_core.UString.make("string"));
var string_append = M1.Core.attachProcedureName(M1.Core.UString.stringAppend, $rjs_core.UString.make("string-append"));
var string_ref = function(s1823, i1824) {
    if (string_p(s1823) !== false) {
        var if_res758 = rvoid();
    } else {
        var if_res758 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-ref"), $rjs_core.UString.make("string?"), s1823));
    }
    if_res758;
    if (exact_nonnegative_integer_p(i1824) !== false) {
        var if_res759 = rvoid();
    } else {
        var if_res759 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-ref"), $rjs_core.UString.make("exact-nonnegative-integer?"), i1824));
    }
    if_res759;
    if (s1823.isValidIndex(i1824) !== false) {
        var if_res760 = s1823.charAt(i1824);
    } else {
        var if_res760 = raise(M1.Core.makeOutOfRangeError($rjs_core.UString.make("string-ref"), $rjs_core.UString.make("string"), s1823, s1823.length, i1824));
    }
    return if_res760;
};
var string_eq__p = function(sa1825, sb1826) {
    if (string_p(sa1825) !== false) {
        var if_res761 = rvoid();
    } else {
        var if_res761 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string=?"), $rjs_core.UString.make("string?"), sa1825));
    }
    if_res761;
    if (string_p(sb1826) !== false) {
        var if_res762 = rvoid();
    } else {
        var if_res762 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string=?"), $rjs_core.UString.make("string?"), sb1826));
    }
    if_res762;
    return M1.Core.UString.eq(sa1825, sb1826);
};
var string_lt__p = function(sa1827, sb1828) {
    if (string_p(sa1827) !== false) {
        var if_res763 = rvoid();
    } else {
        var if_res763 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string<?"), $rjs_core.UString.make("string?"), sa1827));
    }
    if_res763;
    if (string_p(sb1828) !== false) {
        var if_res764 = rvoid();
    } else {
        var if_res764 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string<?"), $rjs_core.UString.make("string?"), sb1828));
    }
    if_res764;
    return M1.Core.UString.lt(sa1827, sb1828);
};
var string_lt__eq__p = function(sa1829, sb1830) {
    if (string_p(sa1829) !== false) {
        var if_res765 = rvoid();
    } else {
        var if_res765 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string<=?"), $rjs_core.UString.make("string?"), sa1829));
    }
    if_res765;
    if (string_p(sb1830) !== false) {
        var if_res766 = rvoid();
    } else {
        var if_res766 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string<=?"), $rjs_core.UString.make("string?"), sb1830));
    }
    if_res766;
    return M1.Core.UString.lte(sa1829, sb1830);
};
var string_gt__p = function(sa1831, sb1832) {
    if (string_p(sa1831) !== false) {
        var if_res767 = rvoid();
    } else {
        var if_res767 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string>?"), $rjs_core.UString.make("string?"), sa1831));
    }
    if_res767;
    if (string_p(sb1832) !== false) {
        var if_res768 = rvoid();
    } else {
        var if_res768 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string>?"), $rjs_core.UString.make("string?"), sb1832));
    }
    if_res768;
    return M1.Core.UString.gt(sa1831, sb1832);
};
var string_gt__eq__p = function(sa1833, sb1834) {
    if (string_p(sa1833) !== false) {
        var if_res769 = rvoid();
    } else {
        var if_res769 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string>=?"), $rjs_core.UString.make("string?"), sa1833));
    }
    if_res769;
    if (string_p(sb1834) !== false) {
        var if_res770 = rvoid();
    } else {
        var if_res770 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string>=?"), $rjs_core.UString.make("string?"), sb1834));
    }
    if_res770;
    return M1.Core.UString.gte(sa1833, sb1834);
};
var string_p = M1.Core.attachProcedureName(M1.Core.UString.check, $rjs_core.UString.make("string?"));
var fprintf = $rjs_core.attachProcedureArity(function(out1835, form1836, ...args1837771) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args1837 = $rjs_core.Pair.listFromArray(args1837771);
    return apply(M1.Kernel.fprintf, print_as_expression(), out1835, form1836, args1837);
});
var eprintf = $rjs_core.attachProcedureArity(function(form1838, ...args1839772) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args1839 = $rjs_core.Pair.listFromArray(args1839772);
    return apply(M1.Kernel.fprintf, print_as_expression(), current_error_port(), form1838, args1839);
});
var printf = $rjs_core.attachProcedureArity(function(form1840, ...args1841773) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args1841 = $rjs_core.Pair.listFromArray(args1841773);
    return apply(M1.Kernel.fprintf, print_as_expression(), current_output_port(), form1840, args1841);
});
var format = $rjs_core.attachProcedureArity(function(form1842, ...args1843774) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args1843 = $rjs_core.Pair.listFromArray(args1843774);
    var out1844 = open_output_string();
    apply(fprintf, out1844, form1842, args1843);
    return get_output_string(out1844);
});
var symbol_p = M1.Core.PrimitiveSymbol.check;
var keyword_p = M1.Core.Keyword.check;
var make_string1845 = function(k21846, c11847) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var k1848 = k21846;
    if (false !== false) {
        var if_res775 = $rjs_core.Char.charFromCodepoint(0);
    } else {
        var if_res775 = c11847;
    }
    var c1849 = if_res775;
    return M1.Core.UString.repeatChar(k1848, c1849);
};
var cl776 = function(k1850) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return make_string1845(k1850, $rjs_core.Char.charFromCodepoint(0));
};
var cl777 = function(k1851, c11852) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return make_string1845(k1851, c11852);
};
var make_string = $rjs_core.attachProcedureArity(function() {
    var fixed_lam778 = {
        '1': cl776,
        '2': cl777
    } [arguments.length];
    if (fixed_lam778 !== undefined) {
        return fixed_lam778.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var list__gt_string = function(lst1853) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Kernel.listToString(lst1853);
};
var string__gt_list1854 = function(str31855) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (eq_p(str31855, M4.unsafe_undefined) !== false) {
        var if_res779 = string_p;
    } else {
        var if_res779 = str31855;
    }
    var str1856 = if_res779;
    return M1.Core.Pair.listFromArray(M1.Core.UString.toArray(str1856));
};
var cl780 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_list1854(M4.unsafe_undefined);
};
var cl781 = function(str31857) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_list1854(str31857);
};
var string__gt_list = $rjs_core.attachProcedureArity(function() {
    var fixed_lam782 = {
        '0': cl780,
        '1': cl781
    } [arguments.length];
    if (fixed_lam782 !== undefined) {
        return fixed_lam782.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1]);
var string__gt_immutable_string1858 = function(s41859) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (eq_p(s41859, M4.unsafe_undefined) !== false) {
        var if_res783 = string_p;
    } else {
        var if_res783 = s41859;
    }
    var s1860 = if_res783;
    return M1.Core.UString.stringToImmutableString(s1860);
};
var cl784 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_immutable_string1858(M4.unsafe_undefined);
};
var cl785 = function(s41861) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_immutable_string1858(s41861);
};
var string__gt_immutable_string = $rjs_core.attachProcedureArity(function() {
    var fixed_lam786 = {
        '0': cl784,
        '1': cl785
    } [arguments.length];
    if (fixed_lam786 !== undefined) {
        return fixed_lam786.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1]);
var symbol__gt_string = function(v1862) {
    if (symbol_p(v1862) !== false) {
        var if_res787 = rvoid();
    } else {
        var if_res787 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("symbol->string"), $rjs_core.UString.make("symbol?"), v1862));
    }
    if_res787;
    return M1.Core.UString.makeMutable(v1862.toString());
};
var string__gt_symbol = function(s1863) {
    if (string_p(s1863) !== false) {
        var if_res788 = rvoid();
    } else {
        var if_res788 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string->symbol"), $rjs_core.UString.make("string?"), s1863));
    }
    if_res788;
    return M1.Core.PrimitiveSymbol.make(s1863);
};
var string__gt_uninterned_symbol = function(s1864) {
    if (string_p(s1864) !== false) {
        var if_res789 = rvoid();
    } else {
        var if_res789 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string->uninterned-symbol"), $rjs_core.UString.make("string?"), s1864));
    }
    if_res789;
    return M1.Core.PrimitiveSymbol.makeUninterned(s1864);
};
var string__gt_unreadable_symbol = function(s1865) {
    if (string_p(s1865) !== false) {
        var if_res790 = rvoid();
    } else {
        var if_res790 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string->unreadable-symbol"), $rjs_core.UString.make("string?"), s1865));
    }
    if_res790;
    return M1.Core.PrimitiveSymbol.make(s1865);
};
var string__gt_number1866 = function(s61867, radix51868) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var s1869 = s61867;
    if (false !== false) {
        var if_res791 = 10;
    } else {
        var if_res791 = radix51868;
    }
    var radix1870 = if_res791;
    var integer_in1871 = function(lo1872, hi1873) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return function(v1874) {
            return (exact_integer_p(v1874) && __gt__eq_(v1874, 2)) && __lt__eq_(v1874, 16);
        };
    };
    if (string_p(s1869) !== false) {
        var if_res792 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("string?"), $rjs_core.UString.make(", given:"), s1869, $rjs_core.UString.make(", at:"), 0);
        var if_res792 = null;
    }
    if_res792;
    var let_result793 = values();
    if (integer_in1871(2, 16)(radix1870) !== false) {
        var if_res794 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("(integer-in 2 16)"), $rjs_core.UString.make(", given:"), radix1870, $rjs_core.UString.make(", at:"), 1);
        var if_res794 = null;
    }
    if_res794;
    var let_result795 = values();
    var js_string__gt_number1875 = function() {
        if (arguments.length !== 0) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var result1876 = parseInt(s1869, radix1870);
        if ((isNaN(result1876) || not(s1869.isValidInteger(radix1870))) !== false) {
            var if_res796 = false;
        } else {
            var if_res796 = result1876;
        }
        return if_res796;
    };
    return js_string__gt_number1875();
};
var cl797 = function(s1878) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_number1866(s1878, 10);
};
var cl798 = function(s1879, radix51880) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_number1866(s1879, radix51880);
};
var string__gt_number = $rjs_core.attachProcedureArity(function() {
    var fixed_lam799 = {
        '1': cl797,
        '2': cl798
    } [arguments.length];
    if (fixed_lam799 !== undefined) {
        return fixed_lam799.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var symbol_interned_p = function(sym1881) {
    if (symbol_p(sym1881) !== false) {
        var if_res800 = rvoid();
    } else {
        var if_res800 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("symbol-interned?"), $rjs_core.UString.make("symbol?"), sym1881));
    }
    if_res800;
    return M1.Core.PrimitiveSymbol.isInterned(sym1881);
};
var symbol_eq__p = function(s1882, v1883) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return s1882.equals(v1883);
};
var symbol_lt__p = function(s1884, v1885) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return s1884.lt(v1885);
};
var keyword_lt__p = function(s1886, v1887) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return s1886.lt(v1887);
};
var string_length = function(s1888) {
    if (string_p(s1888) !== false) {
        var if_res801 = rvoid();
    } else {
        var if_res801 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-length"), $rjs_core.UString.make("string?"), s1888));
    }
    if_res801;
    return s1888.length;
};
var string_downcase = function(s1889) {
    if (string_p(s1889) !== false) {
        var if_res802 = rvoid();
    } else {
        var if_res802 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-downcase"), $rjs_core.UString.make("string?"), s1889));
    }
    if_res802;
    return s1889.toLowerCase();
};
var string_upcase = function(s1890) {
    if (string_p(s1890) !== false) {
        var if_res803 = rvoid();
    } else {
        var if_res803 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-upcase"), $rjs_core.UString.make("string?"), s1890));
    }
    if_res803;
    return s1890.toUpperCase();
};
var substring1891 = function(str81892, start91893, end71894) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var str1895 = str81892;
    var start1896 = start91893;
    if (false !== false) {
        var if_res804 = false;
    } else {
        var if_res804 = end71894;
    }
    var end1897 = if_res804;
    if (not(M1.Core.UString.check(str1895)) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("expected a string"));
        var if_res808 = null;
    } else {
        if ((start1896 < 0) !== false) {
            throw M1.Core.racketContractError($rjs_core.UString.make("invalid start index"));
            var if_res807 = null;
        } else {
            if (((end1897 !== false) && (((end1897 < 0) || (end1897 > str1895.length)) || (end1897 < start1896))) !== false) {
                throw M1.Core.racketContractError($rjs_core.UString.make("invalid end index"));
                var if_res806 = null;
            } else {
                if ((end1897 === false) !== false) {
                    end1897 = str1895.length;
                    var if_res805 = null;
                } else {
                    var if_res805 = rvoid();
                }
                var if_res806 = if_res805;
            }
            var if_res807 = if_res806;
        }
        var if_res808 = if_res807;
    }
    if_res808;
    return str1895.substring(start1896, end1897);
};
var cl809 = function(str1898, start1899) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return substring1891(str1898, start1899, false);
};
var cl810 = function(str1900, start1901, end71902) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return substring1891(str1900, start1901, end71902);
};
var substring = $rjs_core.attachProcedureArity(function() {
    var fixed_lam811 = {
        '2': cl809,
        '3': cl810
    } [arguments.length];
    if (fixed_lam811 !== undefined) {
        return fixed_lam811.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var string_split = function(str1903, sep1904) {
    if (string_p(str1903) !== false) {
        var if_res812 = rvoid();
    } else {
        var if_res812 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-split"), $rjs_core.UString.make("string?"), str1903));
    }
    if_res812;
    if ((function(v1905) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return string_p(v1905) || regexp_p(v1905);
        })(sep1904) !== false) {
        var if_res813 = rvoid();
    } else {
        var if_res813 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-split"), $rjs_core.UString.make("(check/or string? regexp?)"), sep1904));
    }
    if_res813;
    return M1.Core.Pair.listFromArray(str1903.split(sep1904));
};
var string_set_bang_ = function(str1906, k1907, char1908) {
    if ((function(v1909) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return string_p(v1909) && (function(v1910) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return not(immutable_p(v1910));
            })(v1909);
        })(str1906) !== false) {
        var if_res814 = rvoid();
    } else {
        var if_res814 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-set!"), $rjs_core.UString.make("(check/and string? (check/not immutable?))"), str1906));
    }
    if_res814;
    if (exact_nonnegative_integer_p(k1907) !== false) {
        var if_res815 = rvoid();
    } else {
        var if_res815 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-set!"), $rjs_core.UString.make("exact-nonnegative-integer?"), k1907));
    }
    if_res815;
    if (char_p(char1908) !== false) {
        var if_res816 = rvoid();
    } else {
        var if_res816 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-set!"), $rjs_core.UString.make("char?"), char1908));
    }
    if_res816;
    if (str1906.isValidIndex(k1907) !== false) {
        var if_res817 = str1906.setCharAt(k1907, char1908);
    } else {
        var if_res817 = raise(M1.Core.makeOutOfRangeError($rjs_core.UString.make("string-set!"), $rjs_core.UString.make("string"), str1906, str1906.length, k1907));
    }
    return if_res817;
};
var char_p = function(c1911) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Char.check(c1911);
};
var char__gt_integer = function(c1912) {
    if (char_p(c1912) !== false) {
        var if_res818 = rvoid();
    } else {
        var if_res818 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char->integer"), $rjs_core.UString.make("char?"), c1912));
    }
    if_res818;
    return M1.Core.Char.charToInteger(c1912);
};
var integer__gt_char = function(k1913) {
    if (exact_nonnegative_integer_p(k1913) !== false) {
        var if_res819 = rvoid();
    } else {
        var if_res819 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("integer->char"), $rjs_core.UString.make("exact-nonnegative-integer?"), k1913));
    }
    if_res819;
    return M1.Core.Char.integerToChar(k1913);
};
var char_utf_8_length = function(c1914) {
    if (char_p(c1914) !== false) {
        var if_res820 = rvoid();
    } else {
        var if_res820 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-utf-8-length"), $rjs_core.UString.make("char?"), c1914));
    }
    if_res820;
    return M1.Core.Char.charUtf8Length(c1914);
};
var char_upcase = function(c1915) {
    if (char_p(c1915) !== false) {
        var if_res821 = rvoid();
    } else {
        var if_res821 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-upcase"), $rjs_core.UString.make("char?"), c1915));
    }
    if_res821;
    return M1.Core.Char.upcase(c1915);
};
var char_downcase = function(c1916) {
    if (char_p(c1916) !== false) {
        var if_res822 = rvoid();
    } else {
        var if_res822 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-downcase"), $rjs_core.UString.make("char?"), c1916));
    }
    if_res822;
    return M1.Core.Char.downcase(c1916);
};
var char_alphabetic_p = function(c1917) {
    if (char_p(c1917) !== false) {
        var if_res823 = rvoid();
    } else {
        var if_res823 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-alphabetic?"), $rjs_core.UString.make("char?"), c1917));
    }
    if_res823;
    return M1.Core.Char.isAlphabetic(c1917);
};
var char_lower_case_p = function(c1918) {
    if (char_p(c1918) !== false) {
        var if_res824 = rvoid();
    } else {
        var if_res824 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-lower-case?"), $rjs_core.UString.make("char?"), c1918));
    }
    if_res824;
    return M1.Core.Char.isLowerCase(c1918);
};
var char_upper_case_p = function(c1919) {
    if (char_p(c1919) !== false) {
        var if_res825 = rvoid();
    } else {
        var if_res825 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-upper-case?"), $rjs_core.UString.make("char?"), c1919));
    }
    if_res825;
    return M1.Core.Char.isUpperCase(c1919);
};
var char_title_case_p = function(c1920) {
    if (char_p(c1920) !== false) {
        var if_res826 = rvoid();
    } else {
        var if_res826 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-title-case?"), $rjs_core.UString.make("char?"), c1920));
    }
    if_res826;
    return M1.Core.Char.isTitleCase(c1920);
};
var char_numeric_p = function(c1921) {
    if (char_p(c1921) !== false) {
        var if_res827 = rvoid();
    } else {
        var if_res827 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-numeric?"), $rjs_core.UString.make("char?"), c1921));
    }
    if_res827;
    return M1.Core.Char.isNumeric(c1921);
};
var char_symbolic_p = function(c1922) {
    if (char_p(c1922) !== false) {
        var if_res828 = rvoid();
    } else {
        var if_res828 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-symbolic?"), $rjs_core.UString.make("char?"), c1922));
    }
    if_res828;
    return M1.Core.Char.isSymbolic(c1922);
};
var char_punctuation_p = function(c1923) {
    if (char_p(c1923) !== false) {
        var if_res829 = rvoid();
    } else {
        var if_res829 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-punctuation?"), $rjs_core.UString.make("char?"), c1923));
    }
    if_res829;
    return M1.Core.Char.isPunctuation(c1923);
};
var char_graphic_p = function(c1924) {
    if (char_p(c1924) !== false) {
        var if_res830 = rvoid();
    } else {
        var if_res830 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-graphic?"), $rjs_core.UString.make("char?"), c1924));
    }
    if_res830;
    return M1.Core.Char.isGraphic(c1924);
};
var char_whitespace_p = function(c1925) {
    if (char_p(c1925) !== false) {
        var if_res831 = rvoid();
    } else {
        var if_res831 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-whitespace?"), $rjs_core.UString.make("char?"), c1925));
    }
    if_res831;
    return M1.Core.Char.isWhitespace(c1925);
};
var char_blank_p = function(c1926) {
    if (char_p(c1926) !== false) {
        var if_res832 = rvoid();
    } else {
        var if_res832 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-blank?"), $rjs_core.UString.make("char?"), c1926));
    }
    if_res832;
    return M1.Core.Char.isBlank(c1926);
};
var char_iso_control_p = function(c1927) {
    if (char_p(c1927) !== false) {
        var if_res833 = rvoid();
    } else {
        var if_res833 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-iso-control?"), $rjs_core.UString.make("char?"), c1927));
    }
    if_res833;
    return M1.Core.Char.isIsoControl(c1927);
};
var char_lt__p = function(a1928, b1929) {
    if (char_p(a1928) !== false) {
        var if_res834 = rvoid();
    } else {
        var if_res834 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char<?"), $rjs_core.UString.make("char?"), a1928));
    }
    if_res834;
    if (char_p(b1929) !== false) {
        var if_res835 = rvoid();
    } else {
        var if_res835 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char<?"), $rjs_core.UString.make("char?"), b1929));
    }
    if_res835;
    return a1928 < b1929;
};
var char_lt__eq__p = function(a1930, b1931) {
    if (char_p(a1930) !== false) {
        var if_res836 = rvoid();
    } else {
        var if_res836 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char<=?"), $rjs_core.UString.make("char?"), a1930));
    }
    if_res836;
    if (char_p(b1931) !== false) {
        var if_res837 = rvoid();
    } else {
        var if_res837 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char<=?"), $rjs_core.UString.make("char?"), b1931));
    }
    if_res837;
    return a1930 <= b1931;
};
var char_gt__p = function(a1932, b1933) {
    if (char_p(a1932) !== false) {
        var if_res838 = rvoid();
    } else {
        var if_res838 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char>?"), $rjs_core.UString.make("char?"), a1932));
    }
    if_res838;
    if (char_p(b1933) !== false) {
        var if_res839 = rvoid();
    } else {
        var if_res839 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char>?"), $rjs_core.UString.make("char?"), b1933));
    }
    if_res839;
    return a1932 > b1933;
};
var char_gt__eq__p = function(a1934, b1935) {
    if (char_p(a1934) !== false) {
        var if_res840 = rvoid();
    } else {
        var if_res840 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char>=?"), $rjs_core.UString.make("char?"), a1934));
    }
    if_res840;
    if (char_p(b1935) !== false) {
        var if_res841 = rvoid();
    } else {
        var if_res841 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char>=?"), $rjs_core.UString.make("char?"), b1935));
    }
    if_res841;
    return a1934 >= b1935;
};
var char_eq__p = function(a1936, b1937) {
    if (char_p(a1936) !== false) {
        var if_res842 = rvoid();
    } else {
        var if_res842 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char=?"), $rjs_core.UString.make("char?"), a1936));
    }
    if_res842;
    if (char_p(b1937) !== false) {
        var if_res843 = rvoid();
    } else {
        var if_res843 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char=?"), $rjs_core.UString.make("char?"), b1937));
    }
    if_res843;
    return M1.Core.Char.eq(a1936, b1937);
};
var box = M1.Core.Box.make;
var unbox = function(v1938) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v1938.get();
};
var set_box_bang_ = function(b1939, v1940) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return b1939.set(v1940);
};
var box_p = M1.Core.Box.check;
var box_cas_bang_ = function(loc1941, old1942, new1943) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (eq_p(old1942, unbox(loc1941)) && set_box_bang_(loc1941, new1943)) && true;
};
var box_immutable = M1.Core.Box.make;
var make_weak_box = M1.Core.Box.make;
var weak_box_value = function(v1944) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v1944.get();
};
var set_box_times__bang_ = function(b1945, v1946) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return b1945.set(v1946);
};
var unbox_times_ = function(v1947) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v1947.get();
};
var let_result844 = M1.Core.Struct.makeStructTypeProperty({
    'name': $rjs_core.UString.make("prop:evt")
});
var prop_evt = let_result844.getAt(0);
var evt_p = let_result844.getAt(1);
var prop_checked_procedure = make_struct_type_property($rjs_core.UString.make("prop:checked-procedure")).getAt(0);
var prop_impersonator_of = make_struct_type_property($rjs_core.UString.make("prop:impersonator-of")).getAt(0);
var prop_arity_string = make_struct_type_property($rjs_core.UString.make("prop:arity-string")).getAt(0);
var prop_incomplete_arity = make_struct_type_property($rjs_core.UString.make("prop:incomplete-arity")).getAt(0);
var prop_method_arity_error = make_struct_type_property($rjs_core.UString.make("prop:method-arity-error")).getAt(0);
var prop_exn_srclocs = make_struct_type_property($rjs_core.UString.make("prop:exn:srclocs")).getAt(0);
var prop_authentic = make_struct_type_property($rjs_core.UString.make("prop:authentic")).getAt(0);
var prop_serialize = make_struct_type_property($rjs_core.UString.make("prop:serialize")).getAt(0);
var prop_custom_write = make_struct_type_property($rjs_core.UString.make("prop:custom-write")).getAt(0);
var prop_sealed = make_struct_type_property($rjs_core.UString.make("prop:sealed")).getAt(0);
var prop_object_name = make_struct_type_property($rjs_core.UString.make("prop:object-name")).getAt(0);
var prop_procedure = M1.Core.Struct.propProcedure;
var prop_equal_plus_hash = M1.Core.Struct.propEqualHash;
var equal_hash_code = function(v1948) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return 0;
};
var equal_secondary_hash_code = function(v1949) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return 1;
};
var error = M1.Kernel.error;
var raise_argument_error = M1.Kernel.argerror;
var raise_arguments_error = M1.Kernel.argserror;
var raise_result_error = M1.Kernel.resulterror;
var raise_mismatch_error = M1.Kernel.mismatcherror;
var bytes_p = function(bs1950) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Bytes.check(bs1950);
};
var make_bytes1951 = function(len111952, b101953) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var len1954 = len111952;
    if (false !== false) {
        var if_res845 = 0;
    } else {
        var if_res845 = b101953;
    }
    var b1955 = if_res845;
    return M1.Core.Bytes.make(len1954, b1955);
};
var cl846 = function(len1956) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return make_bytes1951(len1956, 0);
};
var cl847 = function(len1957, b101958) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return make_bytes1951(len1957, b101958);
};
var make_bytes = $rjs_core.attachProcedureArity(function() {
    var fixed_lam848 = {
        '1': cl846,
        '2': cl847
    } [arguments.length];
    if (fixed_lam848 !== undefined) {
        return fixed_lam848.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var bytes_ref = function(bs1959, i1960) {
    if (bytes_p(bs1959) !== false) {
        var if_res849 = rvoid();
    } else {
        var if_res849 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-ref"), $rjs_core.UString.make("bytes?"), bs1959));
    }
    if_res849;
    if (integer_p(i1960) !== false) {
        var if_res850 = rvoid();
    } else {
        var if_res850 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-ref"), $rjs_core.UString.make("integer?"), i1960));
    }
    if_res850;
    if ((__lt_(i1960, 0) || __gt_(i1960, bs1959.length)) !== false) {
        var if_res851 = raise(M1.Core.makeOutOfRangeError($rjs_core.UString.make("bytes-ref"), $rjs_core.UString.make("byte string"), bs1959, bs1959.length, i1960));
    } else {
        var if_res851 = M1.Core.Bytes.ref(bs1959, i1960);
    }
    return if_res851;
};
var bytes_set_bang_ = function(bs1961, i1962, b1963) {
    if (bytes_p(bs1961) !== false) {
        var if_res852 = rvoid();
    } else {
        var if_res852 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-set!"), $rjs_core.UString.make("bytes?"), bs1961));
    }
    if_res852;
    if (integer_p(i1962) !== false) {
        var if_res853 = rvoid();
    } else {
        var if_res853 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-set!"), $rjs_core.UString.make("integer?"), i1962));
    }
    if_res853;
    if (integer_p(b1963) !== false) {
        var if_res854 = rvoid();
    } else {
        var if_res854 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-set!"), $rjs_core.UString.make("integer?"), b1963));
    }
    if_res854;
    if ((__lt_(i1962, 0) || __gt_(i1962, bs1961.length)) !== false) {
        var if_res855 = raise(M1.Core.makeOutOfRangeError($rjs_core.UString.make("bytes-set!"), $rjs_core.UString.make("byte string"), bs1961, bs1961.length, i1962));
    } else {
        var if_res855 = M1.Core.Bytes.set(bs1961, i1962, b1963);
    }
    return if_res855;
};
var bytes_append = function() {
    var bss1964 = M1.Core.argumentsToArray(arguments);
    return M1.Core.Bytes.append(bss1964);
};
var bytes__gt_string_by_utf_8 = function(bs1965) {
    if (bytes_p(bs1965) !== false) {
        var if_res856 = rvoid();
    } else {
        var if_res856 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes->string/utf-8"), $rjs_core.UString.make("bytes?"), bs1965));
    }
    if_res856;
    return M1.Core.UString.fromBytesUtf8(bs1965);
};
var bytes__gt_string_by_latin_1 = function(bs1966) {
    if (bytes_p(bs1966) !== false) {
        var if_res857 = rvoid();
    } else {
        var if_res857 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes->string/latin-1"), $rjs_core.UString.make("bytes?"), bs1966));
    }
    if_res857;
    return M1.Core.UString.fromBytesLatin1(bs1966);
};
var string__gt_bytes_by_utf_8 = function(str1967) {
    if (string_p(str1967) !== false) {
        var if_res858 = rvoid();
    } else {
        var if_res858 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string->bytes/utf-8"), $rjs_core.UString.make("string?"), str1967));
    }
    if_res858;
    return M1.Core.UString.toBytesUtf8(str1967);
};
var string__gt_bytes_by_locale1968 = function(str151969, err_byte121970, start131971, end141972) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var str1973 = str151969;
    if (false !== false) {
        var if_res859 = true;
    } else {
        var if_res859 = err_byte121970;
    }
    var err_byte1974 = if_res859;
    if (false !== false) {
        var if_res860 = 0;
    } else {
        var if_res860 = start131971;
    }
    var start1975 = if_res860;
    if (false !== false) {
        var if_res861 = 0;
    } else {
        var if_res861 = end141972;
    }
    var end1976 = if_res861;
    return M1.Core.UString.toBytesUtf8(str1973);
};
var cl862 = function(str1977) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_bytes_by_locale1968(str1977, true, 0, 0);
};
var cl863 = function(str1978, err_byte1979, start1980, end141981) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_bytes_by_locale1968(str1978, err_byte1979, start1980, end141981);
};
var cl864 = function(str1982, err_byte1983, start131984) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_bytes_by_locale1968(str1982, err_byte1983, start131984, 0);
};
var cl865 = function(str1985, err_byte121986) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_bytes_by_locale1968(str1985, err_byte121986, 0, 0);
};
var string__gt_bytes_by_locale = $rjs_core.attachProcedureArity(function() {
    var fixed_lam866 = {
        '1': cl862,
        '4': cl863,
        '3': cl864,
        '2': cl865
    } [arguments.length];
    if (fixed_lam866 !== undefined) {
        return fixed_lam866.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2, 3, 4]);
var bytes_eq__p = function(bstr11987, bstr21988) {
    if (bytes_p(bstr11987) !== false) {
        var if_res867 = rvoid();
    } else {
        var if_res867 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes=?"), $rjs_core.UString.make("bytes?"), bstr11987));
    }
    if_res867;
    if (bytes_p(bstr21988) !== false) {
        var if_res868 = rvoid();
    } else {
        var if_res868 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes=?"), $rjs_core.UString.make("bytes?"), bstr21988));
    }
    if_res868;
    return M1.Core.Bytes.eq(bstr11987, bstr21988);
};
var bytes_lt__p = function(bstr11989, bstr21990) {
    if (bytes_p(bstr11989) !== false) {
        var if_res869 = rvoid();
    } else {
        var if_res869 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes<?"), $rjs_core.UString.make("bytes?"), bstr11989));
    }
    if_res869;
    if (bytes_p(bstr21990) !== false) {
        var if_res870 = rvoid();
    } else {
        var if_res870 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes<?"), $rjs_core.UString.make("bytes?"), bstr21990));
    }
    if_res870;
    return M1.Core.Bytes.lt(bstr11989, bstr21990);
};
var bytes_gt__p = function(bstr11991, bstr21992) {
    if (bytes_p(bstr11991) !== false) {
        var if_res871 = rvoid();
    } else {
        var if_res871 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes>?"), $rjs_core.UString.make("bytes?"), bstr11991));
    }
    if_res871;
    if (bytes_p(bstr21992) !== false) {
        var if_res872 = rvoid();
    } else {
        var if_res872 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes>?"), $rjs_core.UString.make("bytes?"), bstr21992));
    }
    if_res872;
    return M1.Core.Bytes.gt(bstr11991, bstr21992);
};
var bytes_length = function(bs1993) {
    if (bytes_p(bs1993) !== false) {
        var if_res873 = rvoid();
    } else {
        var if_res873 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-length"), $rjs_core.UString.make("bytes?"), bs1993));
    }
    if_res873;
    return bs1993.length;
};
var current_continuation_marks = M1.Core.Marks.getContinuationMarks;
var continuation_mark_set__gt_list = M1.Core.Marks.getMarks;
var continuation_mark_set_first = function(mark_set1994, key_v1995, none_v1996, prompt_tag1997) {
    var let_result874 = values();
    var mark_set1998 = mark_set1998 || M1.Core.Marks.getContinuationMarks(prompt_tag1997);
    var marks1999 = M1.Core.Marks.getMarks(mark_set1998, key_v1995, prompt_tag1997);
    if (null_p(marks1999) !== false) {
        var if_res875 = none_v1996;
    } else {
        var if_res875 = marks1999.hd;
    }
    return if_res875;
};
var make_parameter = M1.Paramz.makeParameter;
var call_with_continuation_prompt = M1.Core.Marks.callWithContinuationPrompt;
var abort_current_continuation = function(prompt_tag2000) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res876 = null;
    } else {
        var if_res876 = rvoid();
    }
    if_res876;
    var let_result877 = values();
    var args2001 = Array.prototype.slice.call(arguments, 1);
    throw new M1.Core.Marks.AbortCurrentContinuation(prompt_tag2000, args2001);
    return null;
};
var make_continuation_prompt_tag = M1.Core.Marks.makeContinuationPromptTag;
var default_continuation_prompt_tag = M1.Core.Marks.defaultContinuationPromptTag;
var raise = M1.Kernel.doraise;
var exn_fail_p = M1.Core.isErr;
var exn_fail_contract_p = M1.Core.isContractErr;
var exn_fail_contract_arity_p = M1.Core.isContractErr;
var exn_message = function(e2002) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.UString.makeMutable(M1.Core.errMsg(e2002));
};
var current_output_port = make_parameter(M1.Core.Ports.standardOutputPort);
var current_input_port = make_parameter(M1.Core.Ports.standardInputPort);
var current_error_port = make_parameter(M1.Core.Ports.standardErrorPort);
var current_print = make_parameter(function(p2003) {
    if (void_p(p2003) !== false) {
        var if_res878 = rvoid();
    } else {
        print(p2003);
        var if_res878 = newline();
    }
    return if_res878;
});
var port_p = function(p2004) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.check(p2004);
};
var input_port_p = function(p2005) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.isInputPort(p2005);
};
var output_port_p = function(p2006) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.isOutputPort(p2006);
};
var string_port_p = function(p2007) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.isStringPort(p2007);
};
var open_output_string = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.openOutputString();
};
var get_output_string = function(p2008) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.getOutputString(p2008);
};
var print_as_expression = make_parameter(true);
var display2009 = function(datum172010, out162011) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum2012 = datum172010;
    if (eq_p(out162011, M4.unsafe_undefined) !== false) {
        var if_res879 = current_output_port();
    } else {
        var if_res879 = out162011;
    }
    var out2013 = if_res879;
    return M1.Core.display(out2013, datum2012);
};
var cl880 = function(datum2014) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return display2009(datum2014, M4.unsafe_undefined);
};
var cl881 = function(datum2015, out162016) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return display2009(datum2015, out162016);
};
var display = $rjs_core.attachProcedureArity(function() {
    var fixed_lam882 = {
        '1': cl880,
        '2': cl881
    } [arguments.length];
    if (fixed_lam882 !== undefined) {
        return fixed_lam882.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var displayln2017 = function(datum192018, out182019) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum2020 = datum192018;
    if (eq_p(out182019, M4.unsafe_undefined) !== false) {
        var if_res883 = current_output_port();
    } else {
        var if_res883 = out182019;
    }
    var out2021 = if_res883;
    display(datum2020, out2021);
    return newline(out2021);
};
var cl884 = function(datum2022) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return displayln2017(datum2022, M4.unsafe_undefined);
};
var cl885 = function(datum2023, out182024) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return displayln2017(datum2023, out182024);
};
var displayln = $rjs_core.attachProcedureArity(function() {
    var fixed_lam886 = {
        '1': cl884,
        '2': cl885
    } [arguments.length];
    if (fixed_lam886 !== undefined) {
        return fixed_lam886.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var write2025 = function(datum212026, out202027) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum2028 = datum212026;
    if (eq_p(out202027, M4.unsafe_undefined) !== false) {
        var if_res887 = current_output_port();
    } else {
        var if_res887 = out202027;
    }
    var out2029 = if_res887;
    return M1.Core.write(out2029, datum2028);
};
var cl888 = function(datum2030) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return write2025(datum2030, M4.unsafe_undefined);
};
var cl889 = function(datum2031, out202032) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return write2025(datum2031, out202032);
};
var write = $rjs_core.attachProcedureArity(function() {
    var fixed_lam890 = {
        '1': cl888,
        '2': cl889
    } [arguments.length];
    if (fixed_lam890 !== undefined) {
        return fixed_lam890.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var writeln2033 = function(datum232034, out222035) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum2036 = datum232034;
    if (eq_p(out222035, M4.unsafe_undefined) !== false) {
        var if_res891 = current_output_port();
    } else {
        var if_res891 = out222035;
    }
    var out2037 = if_res891;
    write(datum2036, out2037);
    return newline(out2037);
};
var cl892 = function(datum2038) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return writeln2033(datum2038, M4.unsafe_undefined);
};
var cl893 = function(datum2039, out222040) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return writeln2033(datum2039, out222040);
};
var writeln = $rjs_core.attachProcedureArity(function() {
    var fixed_lam894 = {
        '1': cl892,
        '2': cl893
    } [arguments.length];
    if (fixed_lam894 !== undefined) {
        return fixed_lam894.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var print2041 = function(datum262042, out242043, quote_depth252044) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum2045 = datum262042;
    if (eq_p(out242043, M4.unsafe_undefined) !== false) {
        var if_res895 = current_output_port();
    } else {
        var if_res895 = out242043;
    }
    var out2046 = if_res895;
    if (false !== false) {
        var if_res896 = 0;
    } else {
        var if_res896 = quote_depth252044;
    }
    var quote_depth2047 = if_res896;
    return M1.Core.print(out2046, datum2045, print_as_expression(), quote_depth2047);
};
var cl897 = function(datum2048) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return print2041(datum2048, M4.unsafe_undefined, 0);
};
var cl898 = function(datum2049, out2050, quote_depth252051) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return print2041(datum2049, out2050, quote_depth252051);
};
var cl899 = function(datum2052, out242053) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return print2041(datum2052, out242053, 0);
};
var print = $rjs_core.attachProcedureArity(function() {
    var fixed_lam900 = {
        '1': cl897,
        '3': cl898,
        '2': cl899
    } [arguments.length];
    if (fixed_lam900 !== undefined) {
        return fixed_lam900.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2, 3]);
var println2054 = function(datum282055, out272056) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum2057 = datum282055;
    if (eq_p(out272056, M4.unsafe_undefined) !== false) {
        var if_res901 = current_output_port();
    } else {
        var if_res901 = out272056;
    }
    var out2058 = if_res901;
    print(datum2057, out2058);
    return newline(out2058);
};
var cl902 = function(datum2059) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return println2054(datum2059, M4.unsafe_undefined);
};
var cl903 = function(datum2060, out272061) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return println2054(datum2060, out272061);
};
var println = $rjs_core.attachProcedureArity(function() {
    var fixed_lam904 = {
        '1': cl902,
        '2': cl903
    } [arguments.length];
    if (fixed_lam904 !== undefined) {
        return fixed_lam904.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var newline2062 = function(out292063) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (eq_p(out292063, M4.unsafe_undefined) !== false) {
        var if_res905 = current_output_port();
    } else {
        var if_res905 = out292063;
    }
    var out2064 = if_res905;
    return display($rjs_core.UString.make("\n"), out2064);
};
var cl906 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return newline2062(M4.unsafe_undefined);
};
var cl907 = function(out292065) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return newline2062(out292065);
};
var newline = $rjs_core.attachProcedureArity(function() {
    var fixed_lam908 = {
        '0': cl906,
        '1': cl907
    } [arguments.length];
    if (fixed_lam908 !== undefined) {
        return fixed_lam908.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1]);
var current_inspector = function() {
    return true;
};
var current_code_inspector = function() {
    return true;
};
var make_inspector = $rjs_core.attachProcedureArity(function(..._2066909) {
    var _2066 = $rjs_core.Pair.listFromArray(_2066909);
    return false;
});
var check_method = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var random = M1.Kernel.random;
var current_seconds = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Math.floor(Date.now() / 1000);
};
var object_name = function(fn2067) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return fn2067.name;
};
var unquoted_printing_string = function(s2068) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return s2068;
};
var error_print_width = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return 42;
};
var error_value__gt_string_handler = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(x2069, n2070) {
        if ((arguments.length !== 2) !== false) {
            throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
            var if_res910 = null;
        } else {
            var if_res910 = rvoid();
        }
        if_res910;
        return $rjs_core.UString.make("str");
    };
};
var procedure_extract_target = function(f2071) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var regexp_p = function(v2072) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Regexp.check(v2072);
};
var pregexp_p = regexp_p;
var byte_regexp_p = regexp_p;
var byte_pregexp_p = regexp_p;
var regexp = function(str2073) {
    if (string_p(str2073) !== false) {
        var if_res911 = rvoid();
    } else {
        var if_res911 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("regexp"), $rjs_core.UString.make("string?"), str2073));
    }
    if_res911;
    return M1.Core.Regexp.fromString(str2073);
};
var pregexp = regexp;
var byte_regexp = function(bs2074) {
    if (bytes_p(bs2074) !== false) {
        var if_res912 = rvoid();
    } else {
        var if_res912 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("byte-regexp"), $rjs_core.UString.make("bytes?"), bs2074));
    }
    if_res912;
    return M1.Core.Regexp.fromString(bytes__gt_string_by_utf_8(bs2074));
};
var byte_pregexp = byte_regexp;
var regexp_match2075 = function(pattern322076, input332077, start_pos302078, end_pos312079) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var pattern2080 = pattern322076;
    var input2081 = input332077;
    if (false !== false) {
        var if_res913 = 0;
    } else {
        var if_res913 = start_pos302078;
    }
    var start_pos2082 = if_res913;
    if (false !== false) {
        var if_res914 = false;
    } else {
        var if_res914 = end_pos312079;
    }
    var end_pos2083 = if_res914;
    return M1.Core.Regexp.match(pattern2080, input2081, start_pos2082, end_pos2083);
};
var cl915 = function(pattern2084, input2085) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match2075(pattern2084, input2085, 0, false);
};
var cl916 = function(pattern2086, input2087, start_pos2088, end_pos312089) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match2075(pattern2086, input2087, start_pos2088, end_pos312089);
};
var cl917 = function(pattern2090, input2091, start_pos302092) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match2075(pattern2090, input2091, start_pos302092, false);
};
var regexp_match = $rjs_core.attachProcedureArity(function() {
    var fixed_lam918 = {
        '2': cl915,
        '4': cl916,
        '3': cl917
    } [arguments.length];
    if (fixed_lam918 !== undefined) {
        return fixed_lam918.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var regexp_match_p2093 = function(pattern362094, input372095, start_pos342096, end_pos352097) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var pattern2098 = pattern362094;
    var input2099 = input372095;
    if (false !== false) {
        var if_res919 = 0;
    } else {
        var if_res919 = start_pos342096;
    }
    var start_pos2100 = if_res919;
    if (false !== false) {
        var if_res920 = false;
    } else {
        var if_res920 = end_pos352097;
    }
    var end_pos2101 = if_res920;
    if (M1.Core.Regexp.match(pattern2098, input2099, start_pos2100, end_pos2101) !== false) {
        var if_res921 = true;
    } else {
        var if_res921 = false;
    }
    return if_res921;
};
var cl922 = function(pattern2102, input2103) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match_p2093(pattern2102, input2103, 0, false);
};
var cl923 = function(pattern2104, input2105, start_pos2106, end_pos352107) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match_p2093(pattern2104, input2105, start_pos2106, end_pos352107);
};
var cl924 = function(pattern2108, input2109, start_pos342110) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match_p2093(pattern2108, input2109, start_pos342110, false);
};
var regexp_match_p = $rjs_core.attachProcedureArity(function() {
    var fixed_lam925 = {
        '2': cl922,
        '4': cl923,
        '3': cl924
    } [arguments.length];
    if (fixed_lam925 !== undefined) {
        return fixed_lam925.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var let_result926 = make_struct_type($rjs_core.PrimitiveSymbol.make("kernel:arity-at-least"), false, 1, 0, false, rnull, false, false, $rjs_core.Pair.makeList(0), false, $rjs_core.PrimitiveSymbol.make("kernel:arity-at-least"));
var struct_2111 = let_result926.getAt(0);
var make_2112 = let_result926.getAt(1);
var __p2113 = let_result926.getAt(2);
var __ref2114 = let_result926.getAt(3);
var __set_bang_2115 = let_result926.getAt(4);
var let_result927 = values(struct_2111, make_2112, __p2113, make_struct_field_accessor(__ref2114, 0, $rjs_core.PrimitiveSymbol.make("value")));
var struct_kernel_arity_at_least = let_result927.getAt(0);
var make_arity_at_least = let_result927.getAt(1);
var kernel_arity_at_least_p = let_result927.getAt(2);
var kernel_arity_at_least_value = let_result927.getAt(3);
var procedure_p = function(f2116) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return typeof(f2116) === "function";
};
var arity_at_least = make_arity_at_least;
var arity_at_least_p = function(p2117) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return kernel_arity_at_least_p(p2117);
};
var arity_at_least_value = function(p2118) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return kernel_arity_at_least_value(p2118);
};
var procedure_arity_includes_p = function(fn2119, n2120) {
    var ar2121 = procedure_arity(fn2119);
    if (kernel_arity_at_least_p(ar2121) !== false) {
        var if_res929 = __lt__eq_(kernel_arity_at_least_value(ar2121), n2120);
    } else {
        if (list_p(ar2121) !== false) {
            var if_res928 = member(n2120, ar2121);
        } else {
            var if_res928 = n2120 === ar2121;
        }
        var if_res929 = if_res928;
    }
    return if_res929;
};
var procedure_arity = function(fn2122) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (Array.isArray(fn2122.__rjs_arityValue) !== false) {
        if ((fn2122.__rjs_arityValue.length === 1) !== false) {
            var if_res930 = fn2122.__rjs_arityValue[0];
        } else {
            var if_res930 = M1.Core.Pair.listFromArray(fn2122.__rjs_arityValue);
        }
        var if_res932 = if_res930;
    } else {
        if ((fn2122.__rjs_arityValue === undefined) !== false) {
            var if_res931 = fn2122.length;
        } else {
            var if_res931 = make_arity_at_least(fn2122.__rjs_arityValue || fn2122.length);
        }
        var if_res932 = if_res931;
    }
    return if_res932;
};
var procedure_arity_p = function(v2123) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (exact_nonnegative_integer_p(v2123) || kernel_arity_at_least_p(v2123)) || ormap(function(v2124) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return exact_nonnegative_integer_p(v2124) || kernel_arity_at_least_p(v2124);
    }, v2123);
};
var procedure_arity_mask = function(fn2125) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var ar2126 = procedure_arity(fn2125);
    if (integer_p(ar2126) !== false) {
        var if_res934 = arithmetic_shift(1, ar2126);
    } else {
        if (kernel_arity_at_least_p(ar2126) !== false) {
            var if_res933 = arithmetic_shift(-1, kernel_arity_at_least_value(ar2126));
        } else {
            var if_res933 = rvoid();
        }
        var if_res934 = if_res933;
    }
    return if_res934;
};
var checked_procedure_check_and_extract = function(type2127, v2128, proc2129, v12130, v22131) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((M1.Core.Struct.check(v2128, type2127) && type2127._findProperty(prop_checked_procedure)) !== false) {
        var fn2132 = v2128.getField(0);
        var r12133 = fn2132(v12130, v22131);
        if (r12133 !== false) {
            var if_res935 = v2128.getField(1);
        } else {
            var if_res935 = proc2129(v2128, v12130, v22131);
        }
        var if_res936 = if_res935;
    } else {
        var if_res936 = proc2129(v2128, v12130, v22131);
    }
    return if_res936;
};
var gensym = function(sym2134) {
    var s2135 = (sym2134 && sym2134.v) || $rjs_core.UString.make("");
    __count = __count + 1;
    return M1.Core.PrimitiveSymbol.makeUninterned(s2135 + __count);
};
var eval_jit_enabled = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var variable_reference_constant_p = function(x2136) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var variable_reference_from_unsafe_p = function(x2137) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var variable_reference__gt_module_source = function(x2138) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var variable_reference__gt_resolved_module_path = function(x2139) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var module_name_fixup = function(x2140) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var inspector_p = function(p2141) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return true;
};
var make_thread_cell = function(p2142) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return p2142;
};
var __count = 1000;
var system_type2143 = function(mode382144) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (false !== false) {
        var if_res937 = $rjs_core.PrimitiveSymbol.make("os");
    } else {
        var if_res937 = mode382144;
    }
    var mode2145 = if_res937;
    var tmp2146 = mode2145;
    if (equal_p(tmp2146, $rjs_core.PrimitiveSymbol.make("os")) !== false) {
        var if_res941 = $rjs_core.PrimitiveSymbol.make("unix");
    } else {
        if (equal_p(tmp2146, $rjs_core.PrimitiveSymbol.make("vm")) !== false) {
            var if_res940 = $rjs_core.PrimitiveSymbol.make("javascript");
        } else {
            if (equal_p(tmp2146, $rjs_core.PrimitiveSymbol.make("gc")) !== false) {
                var if_res939 = $rjs_core.PrimitiveSymbol.make("javascript");
            } else {
                if (equal_p(tmp2146, $rjs_core.PrimitiveSymbol.make("fs-change")) !== false) {
                    var if_res938 = M1.Core.Vector.make([false, false, false, false], false);
                } else {
                    var if_res938 = false;
                }
                var if_res939 = if_res938;
            }
            var if_res940 = if_res939;
        }
        var if_res941 = if_res940;
    }
    return if_res941;
};
var cl942 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return system_type2143($rjs_core.PrimitiveSymbol.make("os"));
};
var cl943 = function(mode382147) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return system_type2143(mode382147);
};
var system_type = $rjs_core.attachProcedureArity(function() {
    var fixed_lam944 = {
        '0': cl942,
        '1': cl943
    } [arguments.length];
    if (fixed_lam944 !== undefined) {
        return fixed_lam944.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1]);
var find_system_path = function(kind2148) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return $rjs_core.UString.make("");
};
var build_path = function(base2149) {
    return base2149;
};
var make_weak_hash = make_hash;
var make_weak_hasheqv = make_hasheqv;
var make_weak_hasheq = make_hasheq;
var current_environment_variables = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return rnull;
};
var environment_variables_ref = function(e2150, n2151) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var environment_variables_set_bang_2152 = function(e402153, n412154, v422155, fail392156) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var e2157 = e402153;
    var n2158 = n412154;
    var v2159 = v422155;
    if (false !== false) {
        var if_res945 = false;
    } else {
        var if_res945 = fail392156;
    }
    var fail2160 = if_res945;
    return rvoid();
};
var cl946 = function(e2161, n2162, v2163) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return environment_variables_set_bang_2152(e2161, n2162, v2163, false);
};
var cl947 = function(e2164, n2165, v2166, fail392167) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return environment_variables_set_bang_2152(e2164, n2165, v2166, fail392167);
};
var environment_variables_set_bang_ = $rjs_core.attachProcedureArity(function() {
    var fixed_lam948 = {
        '3': cl946,
        '4': cl947
    } [arguments.length];
    if (fixed_lam948 !== undefined) {
        return fixed_lam948.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [3, 4]);
var prefab_struct_key = function(v2168) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var path_p = M1.Core.Path.check;
var version = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return $rjs_core.UString.make("99.0");
};
var string__gt_path = M1.Core.Path.fromString;
var dynamic_wind = function(f2169, g2170, h2171) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    f2169();
    g2170();
    return h2171();
};
var datum_intern_literal = function(v2172) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v2172;
};
var make_semaphore = function(x2173) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return x2173;
};
var semaphore_peek_evt = function(x2174) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return x2174;
};
var call_with_semaphore = function(s2175, f2176) {
    return false;
};
var syntax_source = M1.Core.Correlated.syntaxSource;
var syntax_line = M1.Core.Correlated.syntaxLine;
var syntax_column = M1.Core.Correlated.syntaxColumn;
var syntax_position = M1.Core.Correlated.syntaxPosition;
var syntax_span = M1.Core.Correlated.syntaxSpan;
var __rjs_quoted__ = {};
__rjs_quoted__.length = length;
__rjs_quoted__.kernel_arity_at_least_value = kernel_arity_at_least_value;
__rjs_quoted__.null_p = null_p;
__rjs_quoted__.struct_kernel_arity_at_least = struct_kernel_arity_at_least;
__rjs_quoted__.make_struct_type_property = make_struct_type_property;
__rjs_quoted__.cdr = cdr;
__rjs_quoted__.make_arity_at_least = make_arity_at_least;
__rjs_quoted__.car = car;
__rjs_quoted__.__plus_ = __plus_;
__rjs_quoted__.apply = apply;
__rjs_quoted__.kernel_arity_at_least_p = kernel_arity_at_least_p;
export {
    __rjs_quoted__,
    equal_p,
    eqv_p,
    eq_p,
    values,
    call_with_values,
    immutable_p,
    rvoid,
    void_p,
    number_p,
    real_p,
    integer_p,
    complex_p,
    zero_p,
    positive_p,
    negative_p,
    add1,
    sub1,
    quotient,
    even_p,
    odd_p,
    exact_nonnegative_integer_p,
    exact_integer_p,
    exact_p,
    inexact_p,
    single_flonum_available_p,
    single_flonum_p,
    real__gt_single_flonum,
    __times_,
    __by_,
    __plus_,
    __,
    __lt_,
    __gt_,
    __lt__eq_,
    __gt__eq_,
    __eq_,
    floor,
    abs,
    sin,
    cos,
    tan,
    asin,
    acos,
    atan,
    ceiling,
    round,
    min,
    max,
    log,
    exp,
    expt,
    sqrt,
    sqr,
    truncate,
    remainder,
    number__gt_string,
    arithmetic_shift,
    inexact__gt_exact,
    exact__gt_inexact,
    make_rectangular,
    make_polar,
    real_part,
    imag_part,
    magnitude,
    conjugate,
    angle,
    rational_p,
    numerator,
    denominator,
    bitwise_and,
    bitwise_ior,
    bitwise_xor,
    bitwise_not,
    bitwise_bit_set_p,
    not,
    rfalse,
    rtrue,
    false_p,
    boolean_p,
    car,
    cdr,
    cons,
    pair_p,
    caar,
    cadr,
    cdar,
    cddr,
    cdddr,
    caddr,
    cadddr,
    cddddr,
    rnull,
    list,
    null_p,
    list_p,
    length,
    reverse,
    list_times_,
    append,
    for_each,
    mcons,
    mpair_p,
    mcar,
    mcdr,
    set_mcar_bang_,
    set_mcdr_bang_,
    make_struct_type,
    make_struct_field_accessor,
    make_struct_field_mutator,
    make_struct_type_property,
    check_struct_type,
    struct_type_p,
    struct_type_info,
    vector,
    make_vector,
    vector_p,
    vector_length,
    vector_ref,
    vector_set_bang_,
    vector__gt_list,
    list__gt_vector,
    vector__gt_immutable_vector,
    vector_copy,
    vector_copy_bang_,
    hash,
    hasheqv,
    hasheq,
    make_hash,
    make_hasheqv,
    make_hasheq,
    make_immutable_hash,
    make_immutable_hasheqv,
    make_immutable_hasheq,
    hash_p,
    hash_equal_p,
    hash_eqv_p,
    hash_eq_p,
    hash_weak_p,
    hash_ref,
    hash_has_key_p,
    hash_ref_key,
    hash_set,
    hash_remove,
    hash_map,
    hash_count,
    hash_remove_bang_,
    hash_set_bang_,
    hash_iterate_first,
    hash_iterate_next,
    hash_iterate_key,
    hash_iterate_value,
    hash_iterate_key_plus_value,
    hash_iterate_pair,
    hash_keys_subset_p,
    hash_union,
    hash_strong_p,
    apply,
    map,
    foldl,
    _foldr,
    foldr,
    range,
    remove,
    filter,
    ormap,
    andmap,
    member,
    compose,
    compose1,
    list_ref,
    build_list,
    make_list,
    flatten,
    assoc,
    memv,
    memq,
    memf,
    findf,
    assv,
    assq,
    assf,
    alt_reverse,
    string,
    string_append,
    string_ref,
    string_eq__p,
    string_lt__p,
    string_lt__eq__p,
    string_gt__p,
    string_gt__eq__p,
    string_p,
    fprintf,
    eprintf,
    printf,
    format,
    symbol_p,
    keyword_p,
    make_string,
    list__gt_string,
    string__gt_list,
    string__gt_immutable_string,
    symbol__gt_string,
    string__gt_symbol,
    string__gt_uninterned_symbol,
    string__gt_unreadable_symbol,
    string__gt_number,
    symbol_interned_p,
    symbol_eq__p,
    symbol_lt__p,
    keyword_lt__p,
    string_length,
    string_downcase,
    string_upcase,
    substring,
    string_split,
    string_set_bang_,
    char_p,
    char__gt_integer,
    integer__gt_char,
    char_utf_8_length,
    char_upcase,
    char_downcase,
    char_alphabetic_p,
    char_lower_case_p,
    char_upper_case_p,
    char_title_case_p,
    char_numeric_p,
    char_symbolic_p,
    char_punctuation_p,
    char_graphic_p,
    char_whitespace_p,
    char_blank_p,
    char_iso_control_p,
    char_lt__p,
    char_lt__eq__p,
    char_gt__p,
    char_gt__eq__p,
    char_eq__p,
    box,
    unbox,
    set_box_bang_,
    box_p,
    box_cas_bang_,
    box_immutable,
    make_weak_box,
    weak_box_value,
    set_box_times__bang_,
    unbox_times_,
    evt_p,
    prop_evt,
    prop_checked_procedure,
    prop_impersonator_of,
    prop_arity_string,
    prop_incomplete_arity,
    prop_method_arity_error,
    prop_exn_srclocs,
    prop_authentic,
    prop_serialize,
    prop_custom_write,
    prop_sealed,
    prop_object_name,
    prop_procedure,
    prop_equal_plus_hash,
    equal_hash_code,
    equal_secondary_hash_code,
    error,
    raise_argument_error,
    raise_arguments_error,
    raise_result_error,
    raise_mismatch_error,
    bytes_p,
    make_bytes,
    bytes_ref,
    bytes_set_bang_,
    bytes_append,
    bytes__gt_string_by_utf_8,
    bytes__gt_string_by_latin_1,
    string__gt_bytes_by_utf_8,
    string__gt_bytes_by_locale,
    bytes_eq__p,
    bytes_lt__p,
    bytes_gt__p,
    bytes_length,
    current_continuation_marks,
    continuation_mark_set__gt_list,
    continuation_mark_set_first,
    make_parameter,
    call_with_continuation_prompt,
    abort_current_continuation,
    make_continuation_prompt_tag,
    default_continuation_prompt_tag,
    raise,
    exn_fail_p,
    exn_fail_contract_p,
    exn_fail_contract_arity_p,
    exn_message,
    current_output_port,
    current_input_port,
    current_error_port,
    current_print,
    port_p,
    input_port_p,
    output_port_p,
    string_port_p,
    open_output_string,
    get_output_string,
    print_as_expression,
    display,
    displayln,
    write,
    writeln,
    print,
    println,
    newline,
    current_inspector,
    current_code_inspector,
    make_inspector,
    check_method,
    random,
    current_seconds,
    object_name,
    unquoted_printing_string,
    error_print_width,
    error_value__gt_string_handler,
    procedure_extract_target,
    regexp_p,
    pregexp_p,
    byte_regexp_p,
    byte_pregexp_p,
    regexp,
    pregexp,
    byte_regexp,
    byte_pregexp,
    regexp_match,
    regexp_match_p,
    kernel_arity_at_least_value,
    kernel_arity_at_least_p,
    make_arity_at_least,
    struct_kernel_arity_at_least,
    procedure_p,
    arity_at_least,
    arity_at_least_p,
    arity_at_least_value,
    procedure_arity_includes_p,
    procedure_arity,
    procedure_arity_p,
    procedure_arity_mask,
    checked_procedure_check_and_extract,
    gensym,
    eval_jit_enabled,
    variable_reference_constant_p,
    variable_reference_from_unsafe_p,
    variable_reference__gt_module_source,
    variable_reference__gt_resolved_module_path,
    module_name_fixup,
    inspector_p,
    make_thread_cell,
    system_type,
    find_system_path,
    build_path,
    make_weak_hash,
    make_weak_hasheqv,
    make_weak_hasheq,
    current_environment_variables,
    environment_variables_ref,
    environment_variables_set_bang_,
    prefab_struct_key,
    path_p,
    version,
    string__gt_path,
    dynamic_wind,
    datum_intern_literal,
    make_semaphore,
    semaphore_peek_evt,
    call_with_semaphore,
    syntax_source,
    syntax_line,
    syntax_column,
    syntax_position,
    syntax_span
};