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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const React = __importStar(require("react"));
const calendarUtils_1 = require("../../../lib/calendarUtils");
const Day_1 = __importDefault(require("../Day"));
const Body_styled_1 = require("./Body.styled");
const Body = (props) => {
    const startDate = React.useMemo(() => calendarUtils_1.getCalendarStartDate(props.currentMonth, props.weekStartsOn), [props.currentMonth, props.weekStartsOn]);
    const endDate = React.useMemo(() => calendarUtils_1.getCalendarEndDate(props.currentMonth, props.numberOfWeeks, props.weekStartsOn), [props.currentMonth, props.numberOfWeeks, props.weekStartsOn]);
    const allDays = React.useMemo(() => date_fns_1.eachDay(startDate, endDate), [startDate, endDate]);
    React.useEffect(() => {
        if (props.getCalendarDates) {
            props.getCalendarDates({ end: endDate, start: startDate });
        }
    }, [props.getCalendarDates, startDate, endDate]);
    React.useEffect(() => {
        calendarUtils_1.setupScrollSync(props.shouldScrollSync);
    }, [props.shouldScrollSync]);
    return (React.createElement(Body_styled_1.BodyContainer, { numberOfWeeks: props.numberOfWeeks },
        allDays
            .slice(0, 7)
            .map((date) => date_fns_1.format(date, 'dddd'))
            .map((weekday, index) => (React.createElement(Body_styled_1.WeekdayHeader, { key: weekday, row: 1, column: index + 1 }, weekday))),
        allDays.map((date, index) => {
            const row = Math.floor(index / 7) + 2;
            const column = (index % 7) + 1;
            return (React.createElement(Day_1.default, { key: date.toISOString(), currentMonth: props.currentMonth, date: date, events: calendarUtils_1.getEventsForDay(date, props.events), row: row, column: column }));
        })));
};
exports.default = Body;
//# sourceMappingURL=Body.js.map