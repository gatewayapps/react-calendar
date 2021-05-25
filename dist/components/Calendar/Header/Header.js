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
const date_fns_1 = require("date-fns");
const React = __importStar(require("react"));
const Header_styled_1 = require("./Header.styled");
const Header = (props) => {
    return (React.createElement(Header_styled_1.HeaderContainer, null,
        React.createElement(Header_styled_1.Title, null, date_fns_1.format(props.currentMonth, 'MMMM YYYY')),
        React.createElement("div", null,
            React.createElement("button", { onClick: () => props.setCurrentMonth(date_fns_1.subMonths(props.currentMonth, 1)) }, "Prev"),
            React.createElement("button", { onClick: () => props.setCurrentMonth(date_fns_1.addMonths(props.currentMonth, 1)) }, "Next"))));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map