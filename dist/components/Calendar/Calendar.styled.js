"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarBodyContainer = exports.CalendarContainer = void 0;
const styled_components_1 = __importDefault(require("../../styles/styled-components"));
exports.CalendarContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .tab-content {
    display: flex;
    flex: 1;
  }

  .tab-pane {
    display: none;
    flex: 1;

    &.active {
      display: flex;
    }
  }
`;
exports.CalendarBodyContainer = styled_components_1.default.div `
  display: flex;
  flex: 1;
  position: relative;
`;
//# sourceMappingURL=Calendar.styled.js.map