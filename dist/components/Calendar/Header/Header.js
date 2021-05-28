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
const Header_styled_1 = require("./Header.styled");
const reactstrap_1 = require("reactstrap");
const pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
const DatePicker_1 = __importDefault(require("../DatePicker"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const Header = (props) => {
    const validRange = React.useMemo(() => { if (!props.validRange) {
        return undefined;
    } ; return { start: new Date(props.validRange.start), end: new Date(props.validRange.end) }; }, [props.validRange]);
    return (React.createElement(Header_styled_1.HeaderContainer, null,
        props.views ? React.createElement(reactstrap_1.Nav, { tabs: true },
            React.createElement(reactstrap_1.NavItem, null,
                React.createElement(reactstrap_1.NavLink, { onClick: () => {
                        props.setActiveTab(0);
                    } }, "Standard View")),
            props.views.map(({ name }, i) => (React.createElement(reactstrap_1.NavItem, { key: i },
                React.createElement(reactstrap_1.NavLink, { onClick: () => {
                        props.setActiveTab(i + 1);
                    } }, name))))) : React.createElement("div", null),
        React.createElement(Header_styled_1.Title, null, date_fns_1.format(props.currentMonth, 'MMMM yyyy')),
        React.createElement(Header_styled_1.NavContainer, null,
            props.shouldShowTodayButton && (React.createElement("button", { disabled: date_fns_1.isSameMonth(props.currentMonth, new Date()), style: { marginRight: '10px' }, className: "nav-button", onClick: () => props.setCurrentMonth(new Date()) },
                React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: pro_solid_svg_icons_1.faStopwatch }),
                React.createElement("span", null, "Today"))),
            React.createElement("button", { disabled: validRange ? !date_fns_1.isWithinInterval(date_fns_1.subMonths(props.currentMonth, 1), validRange) : false, style: { marginRight: '5px' }, className: "nav-button", onClick: () => props.setCurrentMonth(date_fns_1.subMonths(props.currentMonth, 1)) },
                React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: pro_solid_svg_icons_1.faChevronLeft })),
            props.shouldShowDatePicker && (React.createElement(DatePicker_1.default, { onChange: (evt) => props.setCurrentMonth(evt), minDate: validRange === null || validRange === void 0 ? void 0 : validRange.start, maxDate: validRange === null || validRange === void 0 ? void 0 : validRange.end, showMonthYearPicker: true, showYearDropdown: true })),
            React.createElement("button", { disabled: validRange ? !date_fns_1.isWithinInterval(date_fns_1.addMonths(props.currentMonth, 1), validRange) : false, style: { marginLeft: '5px' }, className: "nav-button", onClick: () => props.setCurrentMonth(date_fns_1.addMonths(props.currentMonth, 1)) },
                React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: pro_solid_svg_icons_1.faChevronRight })))));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map