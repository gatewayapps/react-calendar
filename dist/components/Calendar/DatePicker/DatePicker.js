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
Object.defineProperty(exports, "__esModule", { value: true });
require("@fortawesome/fontawesome-pro/js/all.min.js");
const React = __importStar(require("react"));
const DatePicker_styled_1 = require("./DatePicker.styled");
//import { Calendar } from '@bit/primefaces.primereact.calendar'
//import { CalendarProps } from '@bit/primefaces.primereact.calendar'
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
const DatePicker = (props) => {
    //const [calendarDatePickerRef, setCalendarDatePickerRef] = React.useState<Calendar | null>(null)
    // const openDatePicker = React.useCallback(
    //   (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     if (calendarDatePickerRef) {
    //       const currentCalendarRef = calendarDatePickerRef as any
    //       currentCalendarRef.onInputFocus(evt)
    //     }
    //   },
    //   [calendarDatePickerRef]
    // )
    return (React.createElement(DatePicker_styled_1.CalandarDatePickerButton, null,
        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: pro_solid_svg_icons_1.faCalendarEdit }),
        React.createElement("span", null, "Select Date"),
        React.createElement(DatePicker_styled_1.CalendarDatePickerWrapper, null)));
};
exports.default = DatePicker;
//# sourceMappingURL=DatePicker.js.map