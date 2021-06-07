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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Body_styled_1 = require("./Body.styled");
const date_fns_1 = require("date-fns");
const Day_1 = __importDefault(require("../Day"));
const calendarUtils_1 = require("../../../lib/calendarUtils");
const Body = (_a) => {
    var { start, end } = _a, props = __rest(_a, ["start", "end"]);
    const allDays = React.useMemo(() => date_fns_1.eachDayOfInterval({ start, end }), [start, end]);
    const daysWithinValidRange = React.useMemo(() => {
        if (!props.validRange || allDays.length <= 0) {
            return true;
        }
        const { start, end } = props.validRange;
        return allDays.every((day) => date_fns_1.isWithinInterval(day, { start, end }));
    }, []);
    if (!daysWithinValidRange) {
        return null;
    }
    return (React.createElement(Body_styled_1.BodyContainer, { numberOfWeeks: props.numberOfWeeks },
        allDays
            .slice(0, 7)
            .map((date) => date_fns_1.format(date, 'EEEE'))
            .map((weekday, index) => (React.createElement(Body_styled_1.WeekdayHeader, { key: weekday, row: 1, column: index + 1 }, weekday))),
        allDays.map((date, index) => {
            const row = Math.floor(index / 7) + 2;
            const column = (index % 7) + 1;
            return (React.createElement(Day_1.default, { key: date.toISOString(), currentMonth: props.currentSpan, date: date, events: calendarUtils_1.getEventsForDay(date, props.events), row: row, shouldScrollSync: props.shouldScrollSync, column: column, dayHeaderComponent: props.dayHeaderComponent, eventComponent: props.eventComponent }));
        })));
};
exports.default = Body;
//# sourceMappingURL=Body.js.map