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
const reactstrap_1 = require("reactstrap");
const constants_1 = require("../../lib/constants");
const styled_components_1 = require("../../styles/styled-components");
const theme_1 = require("../../styles/theme");
const Body_1 = __importDefault(require("./Body"));
const Calendar_styled_1 = require("./Calendar.styled");
const Header_1 = __importDefault(require("./Header"));
const Calendar = (props) => {
    const [activeTab, setActiveTab] = react_1.default.useState(0);
    const [currentMonth, setCurrentMonth] = react_1.useState(date_fns_1.startOfMonth(props.defaultDate || new Date()));
    const range = react_1.default.useMemo(() => {
        if (!props.validRange) {
            return undefined;
        }
        const { start, end } = props.validRange;
        return { start: new Date(start), end: new Date(end) };
    }, [props.validRange]);
    return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.defaultTheme },
        react_1.default.createElement(Calendar_styled_1.CalendarContainer, null,
            react_1.default.createElement(Header_1.default, { currentMonth: currentMonth, setCurrentMonth: setCurrentMonth, setActiveTab: setActiveTab, shouldShowTodayButton: props.shouldShowTodayButton, shouldShowDatePicker: props.shouldShowDatePicker, validRange: range, views: props.views }),
            props.views ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(reactstrap_1.TabContent, { activeTab: activeTab },
                    react_1.default.createElement(reactstrap_1.TabPane, { tabId: 0 },
                        react_1.default.createElement(Body_1.default, { currentMonth: currentMonth, events: props.events, getCalendarDates: props.getCalendarDates, numberOfWeeks: constants_1.DEFAULT_NUMBER_OF_WEEKS, weekStartsOn: props.weekStartsOn || constants_1.DEFAULT_WEEK_STARTS_ON, shouldScrollSync: props.shouldScrollSync, dayHeaderComponent: props.dayHeaderComponent, eventComponent: props.eventComponent, validRange: range })),
                    props.views.map(({ component }, i) => (react_1.default.createElement(reactstrap_1.TabPane, { key: i, tabId: i + 1 }, props.events && range ? component({ events: props.events, range }) : null)))))) : (react_1.default.createElement(Body_1.default, { currentMonth: currentMonth, events: props.events, getCalendarDates: props.getCalendarDates, numberOfWeeks: constants_1.DEFAULT_NUMBER_OF_WEEKS, weekStartsOn: props.weekStartsOn || constants_1.DEFAULT_WEEK_STARTS_ON, shouldScrollSync: props.shouldScrollSync, dayHeaderComponent: props.dayHeaderComponent, eventComponent: props.eventComponent, validRange: range })))));
};
exports.default = Calendar;
//# sourceMappingURL=Calendar.js.map