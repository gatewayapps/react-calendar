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
const react_1 = __importStar(require("react"));
const Calendar_styled_1 = require("./Calendar.styled");
const constants_1 = require("../../lib/constants");
const date_fns_2 = require("date-fns");
const calendarUtils_1 = require("../../lib/calendarUtils");
const Body_1 = __importDefault(require("./Body"));
const Header_1 = __importDefault(require("./Header"));
const react_tabs_1 = require("react-tabs");
const styled_components_1 = require("../../styles/styled-components");
const theme_1 = require("../../styles/theme");
const Calendar = (props) => {
    var _a;
    const [activeTab, setActiveTab] = react_1.default.useState(0);
    const [numOfWeeks, setNumOfWeeks] = react_1.default.useState(constants_1.DEFAULT_NUMBER_OF_WEEKS);
    const [currentSpan, setCurrentSpan] = react_1.useState(date_fns_1.startOfMonth((_a = props.defaultDate) !== null && _a !== void 0 ? _a : new Date()));
    const start = react_1.default.useMemo(() => calendarUtils_1.getCalendarStartDate(currentSpan, numOfWeeks, props.weekStartsOn), [
        props.weekStartsOn,
        currentSpan,
        numOfWeeks
    ]);
    const end = react_1.default.useMemo(() => calendarUtils_1.getCalendarEndDate(currentSpan, numOfWeeks, props.weekStartsOn), [currentSpan, numOfWeeks, props.weekStartsOn]);
    const range = react_1.default.useMemo(() => {
        if (!props.validRange) {
            return undefined;
        }
        const { start, end } = props.validRange;
        return {
            start: typeof start === 'string' ? date_fns_2.parseISO(start) : start,
            end: typeof end === 'string' ? date_fns_2.parseISO(end) : end
        };
    }, [props.validRange]);
    const renderView = react_1.default.useCallback((viewComponent) => {
        return viewComponent({ endDate: end, events: props.events, startDate: start, validRange: range });
    }, [end, start, props.events, range]);
    react_1.default.useEffect(() => {
        if (props.weeks && props.weeks > 0 && activeTab === 0) {
            setNumOfWeeks(props.weeks);
        }
    }, [props.weeks]);
    return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.defaultTheme },
        react_1.default.createElement(Calendar_styled_1.CalendarContainer, { selectedIndex: activeTab, onSelect: () => { } },
            react_1.default.createElement(Header_1.default, { activeTab: activeTab, currentSpan: currentSpan, numberOfWeeks: numOfWeeks, setActiveTab: setActiveTab, setCurrentSpan: setCurrentSpan, setNumOfWeeks: setNumOfWeeks, shouldShowTodayButton: props.shouldShowTodayButton, shouldShowDatePicker: props.shouldShowDatePicker, validRange: range, views: props.views }),
            react_1.default.createElement(Calendar_styled_1.CalendarBodyContainer, null,
                props.loadingComponent,
                props.views ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(react_tabs_1.TabPanel, { key: 0, tabIndex: 0 },
                        react_1.default.createElement(Body_1.default, { currentSpan: currentSpan, start: start, end: end, events: props.events, getCalendarDates: props.getCalendarDates, numberOfWeeks: numOfWeeks, weekStartsOn: props.weekStartsOn || constants_1.DEFAULT_WEEK_STARTS_ON, shouldScrollSync: props.shouldScrollSync, dayHeaderComponent: props.dayHeaderComponent, eventComponent: props.eventComponent, validRange: range })),
                    props.views.map(({ component }, i) => (react_1.default.createElement(react_tabs_1.TabPanel, { key: i + 1, tabIndex: i + 1 }, renderView(component)))))) : (react_1.default.createElement(Body_1.default, { currentSpan: currentSpan, start: start, end: end, events: props.events, getCalendarDates: props.getCalendarDates, numberOfWeeks: numOfWeeks, weekStartsOn: props.weekStartsOn || constants_1.DEFAULT_WEEK_STARTS_ON, shouldScrollSync: props.shouldScrollSync, dayHeaderComponent: props.dayHeaderComponent, eventComponent: props.eventComponent, validRange: range }))))));
};
exports.default = Calendar;
//# sourceMappingURL=Calendar.js.map