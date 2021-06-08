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
const classnames_1 = __importDefault(require("classnames"));
const date_fns_1 = require("date-fns");
const React = __importStar(require("react"));
const Day_styled_1 = require("./Day.styled");
const Event_1 = __importDefault(require("../Event"));
const calendarUtils_1 = require("../../../lib/calendarUtils");
const CalendarDay = (_a) => {
    var { dayHeaderComponent, eventComponent } = _a, props = __rest(_a, ["dayHeaderComponent", "eventComponent"]);
    const [eventContainerRef, setEventContainerRef] = React.useState(null);
    const dayClasses = classnames_1.default({
        firstDayOfWeek: props.column === 1,
        lastDayOfWeek: props.column === 7
    });
    const updateScrollSync = React.useCallback((element) => {
        calendarUtils_1.setupScrollSync(element, props.shouldScrollSync);
    }, [props.shouldScrollSync]);
    React.useEffect(() => {
        if (eventContainerRef) {
            updateScrollSync(eventContainerRef);
        }
    }, [eventContainerRef, updateScrollSync]);
    return (React.createElement(Day_styled_1.DayContainer, { className: dayClasses, isCurrentMonth: date_fns_1.isSameMonth(props.currentMonth, props.date), isToday: date_fns_1.isToday(props.date), row: props.row, column: props.column },
        React.createElement(Day_styled_1.DayHeader, null, dayHeaderComponent ? dayHeaderComponent({ date: props.date }) : props.date.getDate()),
        React.createElement(Day_styled_1.EventsContainer, { ref: setEventContainerRef }, props.events.map((event, i) => {
            var _a;
            return eventComponent ? eventComponent({ event, showEventTime: props.showEventTime }) : React.createElement(Event_1.default, Object.assign({}, event, { showEventTime: props.showEventTime, key: (_a = event.id) !== null && _a !== void 0 ? _a : `${event.date.toISOString()}-${i}` }));
        }))));
};
exports.default = CalendarDay;
//# sourceMappingURL=Day.js.map