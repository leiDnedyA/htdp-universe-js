import * as $rjs_core from '../../../../runtime/core.js';
import * as M0 from "../private/jscommon.rkt.js";
import * as M1 from "../../../../runtime/kernel.rkt.js";
import * as M2 from "../../../racketscript-compiler/racketscript/interop.rkt.js";
import * as M3 from "../../../racketscript-compiler/racketscript/private/interop.rkt.js";
var __times_default_frames_per_second_times_ = 70;
var make_big_bang = function(init_world940, handlers941) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new BigBang(init_world940, handlers941);
};
var big_bang = $rjs_core.attachProcedureArity(function(init_world942, ...handlers943420) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var handlers943 = $rjs_core.Pair.listFromArray(handlers943420);
    return make_big_bang(init_world942, handlers943).setup().start();
});
var BigBang = function(init_world944, handlers945) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this946 = this;
    this946.world = init_world944;
    this946.interval = 1000 / __times_default_frames_per_second_times_;
    this946.handlers = handlers945;
    this946.__active_handlers = {};
    this946.__world_change_listeners = [];
    this946.__idle = true;
    this946.__stopped = true;
    this946.__events = [];
    return null;
};
BigBang.prototype.setup = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this947 = this;
    var canvas948 = M0.document.createElement("canvas");
    var ctx949 = canvas948.getContext("2d");
    canvas948.setAttribute("tabindex", 1);
    var let_result421 = M1.values();
    canvas948.setAttribute("style", "outline: none");
    var let_result422 = M1.values();
    this947.__canvas = canvas948;
    var let_result423 = M1.values();
    this947.__context = ctx949;
    var let_result424 = M1.values();
    M0.document.body.appendChild(canvas948);
    var let_result425 = M1.values();
    canvas948.focus();
    var let_result426 = M1.values();
    this947.register_handlers();
    var let_result427 = M1.values();
    var draw_handler950 = this947.__active_handlers["to-draw"];
    if (draw_handler950 !== false) {
        var if_res428 = M1.rvoid();
    } else {
        var if_res428 = M1.error($rjs_core.PrimitiveSymbol.make("big-bang"), $rjs_core.UString.make("to-draw handle not provided"));
    }
    if_res428;
    var let_result429 = M1.values();
    var img951 = draw_handler950.callback(this947.world);
    canvas948.width = img951.width;
    canvas948.height = img951.height;
    this947.change_world(this947.world);
    return this947;
};
BigBang.prototype.register_handlers = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this952 = this;
    var active_handlers953 = this952.__active_handlers;
    var loop954 = function(handlers955) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(handlers955) !== false) {
            var h956 = M1.car(handlers955)(this952);
            h956.register();
            active_handlers953[h956.name] = h956;
            var if_res430 = loop954(M1.cdr(handlers955));
        } else {
            var if_res430 = M1.rvoid();
        }
        return if_res430;
    };
    return loop954(this952.handlers);
};
BigBang.prototype.deregister_handlers = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this957 = this;
    var active_handlers958 = this957.__active_handlers;
    return Object.keys(active_handlers958).forEach(function(key959) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var h960 = active_handlers958[key959];
        h960.deregister();
        active_handlers958[h960.name] = undefined;
        return null;
    });
};
BigBang.prototype.start = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this961 = this;
    this961.__stopped = false;
    this961.queue_event({
        'type': "to-draw"
    });
    return this961.process_events();
};
BigBang.prototype.stop = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this962 = this;
    this962.clear_event_queue();
    this962.__stopped = true;
    this962.__idle = true;
    this962.deregister_handlers();
    this962.__active_handlers = {};
    this962.handlers = $rjs_core.Pair.EMPTY;
    return null;
};
BigBang.prototype.clear_event_queue = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this963 = this;
    return this963.__events.splice(0, this963.__events.length);
};
BigBang.prototype.queue_event = function(e964) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this965 = this;
    this965.__events.push(e964);
    if (this965.__idle !== false) {
        var self966 = this965;
        var if_res431 = window.requestAnimationFrame(function() {
            if (arguments.length !== 0) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return self966.process_events();
        });
    } else {
        var if_res431 = M1.rvoid();
    }
    return if_res431;
};
BigBang.prototype.change_world = function(new_world967) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this968 = this;
    var listeners969 = this968.__world_change_listeners;
    var loop970 = function(i971) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.__lt_(i971, listeners969.length) !== false) {
            var listener972 = listeners969[i971];
            listener972(new_world967);
            var if_res432 = loop970(M1.add1(i971));
        } else {
            var if_res432 = M1.rvoid();
        }
        return if_res432;
    };
    loop970(0);
    this968.world = new_world967;
    return null;
};
BigBang.prototype.add_world_change_listener = function(cb973) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this974 = this;
    return this974.__world_change_listeners.push(cb973);
};
BigBang.prototype.remove_world_change_listener = function(cb975) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this976 = this;
    var index977 = this976.__world_change_listeners.indexOf(cb975);
    return this976.__world_change_listeners.splice(index977, 1);
};
BigBang.prototype.process_events = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this978 = this;
    var events979 = this978.__events;
    this978.__idle = false;
    var loop980 = function(world_changed_p981) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.__gt_(events979.length, 0) !== false) {
            var evt982 = events979.shift();
            var handler983 = this978.__active_handlers[evt982.type];
            if (M1.equal_p(evt982.type, "raw") !== false) {
                var if_res434 = evt982.invoke(this978.world, evt982);
            } else {
                if (handler983 !== false) {
                    var if_res433 = handler983.invoke(this978.world, evt982);
                } else {
                    var if_res433 = M0.console.warn($rjs_core.UString.make("ignoring unknown/unregistered event type: "), evt982);
                }
                var if_res434 = if_res433;
            }
            var changed_p984 = if_res434;
            var or_part985 = world_changed_p981;
            if (or_part985 !== false) {
                var if_res435 = or_part985;
            } else {
                var if_res435 = changed_p984;
            }
            var if_res438 = loop980(if_res435);
        } else {
            if (world_changed_p981 !== false) {
                var if_res436 = M1.not(this978.__stopped);
            } else {
                var if_res436 = false;
            }
            if (if_res436 !== false) {
                this978.queue_event({
                    'type': "to-draw"
                });
                var if_res437 = loop980(false);
            } else {
                var if_res437 = M1.rvoid();
            }
            var if_res438 = if_res437;
        }
        return if_res438;
    };
    loop980(false);
    this978.__idle = true;
    return null;
};
var to_draw = function(cb986) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb987) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var on_tick_evt988 = {
            'type': "to-draw"
        };
        return {
            'name': "to-draw",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M1.rvoid();
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M1.rvoid();
            },
            'callback': cb986,
            'invoke': function(world989, evt990) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var ctx991 = bb987.__context;
                var img992 = cb986(bb987.world);
                var height993 = img992.height;
                var width994 = img992.width;
                ctx991.clearRect(0, 0, width994, height993);
                img992.render(ctx991, width994 / 2, height993 / 2);
                return false;
            }
        };
    };
};
var on_tick = function(cb995, rate996) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb997) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var on_tick_evt998 = {
            'type': "on-tick"
        };
        return {
            'name': "on-tick",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this999 = this;
                bb997.queue_event(on_tick_evt998);
                if (rate996 !== false) {
                    rate996 = 1000 * rate996;
                    var if_res439 = null;
                } else {
                    rate996 = bb997.interval;
                    var if_res439 = null;
                }
                return if_res439;
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1000 = this;
                var last_cb1001 = this1000.last_cb;
                if (last_cb1001 !== false) {
                    var if_res440 = window.clearTimeout(last_cb1001);
                } else {
                    var if_res440 = M1.rvoid();
                }
                return if_res440;
            },
            'invoke': function(world1002, _1003) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1004 = this;
                bb997.change_world(cb995(world1002));
                this1004.last_cb = setTimeout(function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return bb997.queue_event(on_tick_evt998);
                }, rate996);
                return true;
            }
        };
    };
};
var on_mouse = function(cb1005) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb1006) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "on-mouse",
            'listeners': {},
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1007 = this;
                var canvas1008 = bb1006.__canvas;
                var make_listener1009 = function(r_evt_name1010) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return function(evt1011) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var posn1012 = canvas_posn_δ(canvas1008, evt1011);
                        return bb1006.queue_event({
                            'type': "on-mouse",
                            'evt': M2.js_string__gt_string(r_evt_name1010),
                            'x': posn1012.x,
                            'y': posn1012.y
                        });
                    };
                };
                var register_listener1013 = function(evt_name1014, r_evt_name1015) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var cb1016 = make_listener1009(r_evt_name1015);
                    canvas1008.addEventListener(evt_name1014, cb1016);
                    this1007.listeners[evt_name1014] = cb1016;
                    return null;
                };
                register_listener1013("mousemove", "move");
                register_listener1013("mousedown", "button-down");
                register_listener1013("mouseup", "button-up");
                register_listener1013("mouseout", "leave");
                register_listener1013("mouseover", "enter");
                return register_listener1013("drag", "drag");
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1017 = this;
                var remove_listener1018 = function(evt_name1019) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var cb1020 = this1017.listeners[evt_name1019];
                    return bb1006.__canvas.removeEventListener(evt_name1019, cb1020);
                };
                remove_listener1018("mousemove");
                remove_listener1018("mousedown");
                remove_listener1018("mouseup");
                remove_listener1018("mouseout");
                remove_listener1018("mouseover");
                return remove_listener1018("drag");
            },
            'invoke': function(world1021, evt1022) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var new_world1023 = cb1005(world1021, evt1022.x, evt1022.y, evt1022.evt);
                bb1006.change_world(new_world1023);
                return true;
            }
        };
    };
};
var on_key = function(cb1024) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb1025) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "on-key",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1026 = this;
                var canvas1027 = bb1025.__canvas;
                this1026.listener = function(evt1028) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    evt1028.preventDefault();
                    evt1028.stopPropagation();
                    return bb1025.queue_event({
                        'type': "on-key",
                        'key': key_event__gt_key_name(evt1028)
                    });
                };
                return canvas1027.addEventListener("keydown", this1026.listener);
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1029 = this;
                bb1025.__canvas.removeEventListener("keydown", this1029.listener);
                this1029.listener = undefined;
                return null;
            },
            'invoke': function(world1030, evt1031) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var new_world1032 = cb1024(world1030, evt1031.key);
                bb1025.change_world(new_world1032);
                return true;
            }
        };
    };
};
var on_release = function(cb1033) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb1034) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "on-release",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1035 = this;
                var canvas1036 = bb1034.__canvas;
                this1035.listener = function(evt1037) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    evt1037.preventDefault();
                    evt1037.stopPropagation();
                    return bb1034.queue_event({
                        'type': "on-release",
                        'key': key_event__gt_key_name(evt1037)
                    });
                };
                return canvas1036.addEventListener("keyup", this1035.listener);
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1038 = this;
                bb1034.__canvas.removeEventListener("keyup", this1038.listener);
                this1038.listener = undefined;
                return null;
            },
            'invoke': function(world1039, evt1040) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var new_world1041 = cb1033(world1039, evt1040.key);
                bb1034.change_world(new_world1041);
                return true;
            }
        };
    };
};
var stop_when1042 = function(last_world_p21043, last_picture11044) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var last_world_p1045 = last_world_p21043;
    if (false !== false) {
        var if_res441 = false;
    } else {
        var if_res441 = last_picture11044;
    }
    var last_picture1046 = if_res441;
    return function(bb1047) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "stop-when",
            'predicate': last_world_p1045,
            'lastpicture': last_picture1046,
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1048 = this;
                return bb1047.add_world_change_listener(this1048.invoke);
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1049 = this;
                return bb1047.remove_world_change_listener(this1049.invoke);
            },
            'invoke': function(w1050) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (last_world_p1045(w1050) !== false) {
                    bb1047.stop();
                    if (last_picture1046 !== false) {
                        var handler1051 = to_draw(last_picture1046)(bb1047);
                        var if_res442 = bb1047.queue_event({
                            'type': "raw",
                            'invoke': handler1051.invoke
                        });
                    } else {
                        var if_res442 = M1.rvoid();
                    }
                    var if_res443 = if_res442;
                } else {
                    var if_res443 = M1.rvoid();
                }
                return if_res443;
            }
        };
    };
};
var cl444 = function(last_world_p1052) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return stop_when1042(last_world_p1052, false);
};
var cl445 = function(last_world_p1053, last_picture11054) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return stop_when1042(last_world_p1053, last_picture11054);
};
var stop_when = $rjs_core.attachProcedureArity(function() {
    var fixed_lam446 = {
        '1': cl444,
        '2': cl445
    } [arguments.length];
    if (fixed_lam446 !== undefined) {
        return fixed_lam446.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var key_table = {
    'Backspace': $rjs_core.UString.make("\b"),
    'Enter': $rjs_core.UString.make("\r"),
    'Tab': $rjs_core.UString.make("\t"),
    'ArrowLeft': $rjs_core.UString.make("left"),
    'ArrowRight': $rjs_core.UString.make("right"),
    'ArrowDown': $rjs_core.UString.make("down"),
    'ArrowUp': $rjs_core.UString.make("up"),
    'Shift': $rjs_core.UString.make("shift"),
    'Control': $rjs_core.UString.make("control"),
    'ControlRight': $rjs_core.UString.make("rcontrol"),
    'ControlLeft': $rjs_core.UString.make("control"),
    'ShiftRight': $rjs_core.UString.make("rshift"),
    'ShiftLeft': $rjs_core.UString.make("shift"),
    'Escape': $rjs_core.UString.make("escape"),
    'Home': $rjs_core.UString.make("home"),
    'End': $rjs_core.UString.make("end"),
    'Insert': $rjs_core.UString.make("insert"),
    'Delete': $rjs_core.UString.make("\u007F"),
    'Pause': $rjs_core.UString.make("pause"),
    'NumLock': $rjs_core.UString.make("numlock"),
    'F1': $rjs_core.UString.make("f1"),
    'F2': $rjs_core.UString.make("f2"),
    'F3': $rjs_core.UString.make("f3"),
    'F4': $rjs_core.UString.make("f4"),
    'F5': $rjs_core.UString.make("f5"),
    'F6': $rjs_core.UString.make("f6"),
    'F7': $rjs_core.UString.make("f7"),
    'F8': $rjs_core.UString.make("f8"),
    'F9': $rjs_core.UString.make("f9"),
    'F10': $rjs_core.UString.make("f10"),
    'F11': $rjs_core.UString.make("f11"),
    'F12': $rjs_core.UString.make("f12")
};
var key_event__gt_key_name = function(e1055) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var k1056 = e1055.key;
    var or_part1058 = k1056 === "Shift";
    if (or_part1058 !== false) {
        var if_res448 = or_part1058;
    } else {
        var or_part1059 = k1056 === "Control";
        if (or_part1059 !== false) {
            var if_res447 = or_part1059;
        } else {
            var if_res447 = k1056 === "Alt";
        }
        var if_res448 = if_res447;
    }
    if (if_res448 !== false) {
        var if_res449 = e1055.code;
    } else {
        var if_res449 = k1056;
    }
    var code1057 = if_res449;
    var key_table_code1060 = key_table[code1057];
    if (M1.void_p(key_table_code1060) !== false) {
        var if_res450 = M2.js_string__gt_string(code1057);
    } else {
        var if_res450 = key_table_code1060;
    }
    return if_res450;
};
var canvas_posn_δ = function(canvas1061, evt1062) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var rect1063 = canvas1061.getBoundingClientRect();
    return {
        'x': evt1062.clientX - rect1063.left,
        'y': evt1062.clientY - rect1063.top
    };
};
var key_eq__p = function(k11064, k21065) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.equal_p(k11064, k21065);
};
var mouse_eq__p = function(m11066, m21067) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.equal_p(m11066, m21067);
};
var __rjs_quoted__ = {};
__rjs_quoted__.key_event__gt_key_name = key_event__gt_key_name;
export {
    __rjs_quoted__,
    mouse_eq__p,
    key_eq__p,
    big_bang,
    stop_when,
    to_draw,
    on_release,
    on_key,
    on_tick,
    on_mouse
};