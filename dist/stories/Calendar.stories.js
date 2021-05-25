"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
const react_1 = __importDefault(require("react"));
const src_1 = require("../src");
exports.default = {
    title: 'Calendar',
    component: src_1.Calendar
};
const Basic = (_a) => {
    var args = __rest(_a, []);
    return (react_1.default.createElement("div", { style: { width: '100%', height: '800px' } },
        react_1.default.createElement(src_1.Calendar, Object.assign({}, args))));
};
exports.Basic = Basic;
//# sourceMappingURL=Calendar.stories.js.map