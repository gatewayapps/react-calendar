"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarBodyContainer = exports.CalendarContainer = void 0;
const react_tabs_1 = require("react-tabs");
const styled_components_1 = __importDefault(require("../../styles/styled-components"));
exports.CalendarContainer = styled_components_1.default(react_tabs_1.Tabs) `
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .react-tabs__tab-panel--selected {
    display: flex;
    flex: 1;
  }
`;
exports.CalendarBodyContainer = styled_components_1.default.div `
  display: flex;
  flex: 1;
  position: relative;
`;
//# sourceMappingURL=Calendar.styled.js.map