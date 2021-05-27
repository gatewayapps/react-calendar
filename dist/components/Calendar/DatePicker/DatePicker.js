"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
require("@fortawesome/fontawesome-pro/js/all.min.js");
const React = __importStar(require("react"));
const DatePicker_styled_1 = require("./DatePicker.styled");
const calendar_1 = require("primereact/calendar");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
const DatePicker = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    const [calendarDatePickerRef, setCalendarDatePickerRef] = React.useState(null);
    const openDatePicker = React.useCallback((evt) => {
        if (calendarDatePickerRef) {
            const currentCalendarRef = calendarDatePickerRef;
            currentCalendarRef.onInputFocus(evt);
        }
    }, [calendarDatePickerRef]);
    return (React.createElement(DatePicker_styled_1.CalandarDatePickerButton, { className: className, onClick: openDatePicker },
        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: pro_solid_svg_icons_1.faCalendarEdit }),
        React.createElement("span", null, "Select Date"),
        React.createElement(DatePicker_styled_1.CalendarDatePickerWrapper, null,
            React.createElement(calendar_1.Calendar, Object.assign({}, props, { ref: setCalendarDatePickerRef })))));
};
exports.default = DatePicker;
//# sourceMappingURL=DatePicker.js.map