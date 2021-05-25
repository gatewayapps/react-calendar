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
const classnames_1 = __importDefault(require("classnames"));
const date_fns_1 = require("date-fns");
const React = __importStar(require("react"));
const Day_styled_1 = require("./Day.styled");
const Event_1 = __importDefault(require("../Event"));
const calendarUtils_1 = require("../../../lib/calendarUtils");
const CalendarDay = (props) => {
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
        React.createElement(Day_styled_1.DayHeader, null, props.date.getDate()),
        React.createElement(Day_styled_1.EventsContainer, { ref: setEventContainerRef }, props.events.map((event) => (React.createElement(Event_1.default, Object.assign({}, event, { key: event.id })))))));
};
exports.default = CalendarDay;
//# sourceMappingURL=Day.js.map