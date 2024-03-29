import * as $rjs_core from './core.js';
import * as Paramz from "./paramz.js";
var parameterization_key = Paramz.ParameterizationKey;
var break_enabled_key = Paramz.BreakEnabledKey;
var cache_configuration = Paramz.BreakEnabledKey;
var extend_parameterization = Paramz.extendParameterization;
var exception_handler_key = Paramz.ExceptionHandlerKey;
var check_for_break = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return undefined;
};
var reparameterize = function(v936) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v936;
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    parameterization_key,
    break_enabled_key,
    cache_configuration,
    extend_parameterization,
    exception_handler_key,
    check_for_break,
    reparameterize
};