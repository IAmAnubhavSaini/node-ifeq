"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ifeqString = exports.ifeqNumber = void 0;
function ifeqString(valueA, valueB, execute) {
    var ta = typeof valueA;
    var tb = typeof valueB;
    if (ta !== tb || ta !== 'string' || valueA !== valueB) {
        return false;
    }
    return execute(valueA);
}
exports.ifeqString = ifeqString;
function ifeqNumber(valueA, valueB, execute) {
    var ta = typeof valueA;
    var tb = typeof valueB;
    if (ta !== tb || ta !== 'number' || valueA !== valueB) {
        return false;
    }
    return execute(valueA);
}
exports.ifeqNumber = ifeqNumber;
//# sourceMappingURL=ifeq.js.map