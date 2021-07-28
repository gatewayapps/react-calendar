"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeekdayHeader = exports.BodyContainer = void 0;
const styled_components_1 = __importDefault(require("../../../styles/styled-components"));
exports.BodyContainer = styled_components_1.default.div `
  display: grid;
  flex: 1;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto repeat(${(props) => props.numberOfWeeks}, 1fr);
`;
exports.WeekdayHeader = styled_components_1.default.div `
  align-items: center;
  background-color: ${(props) => props.theme.weekdayHeader.backgroundColor};
  color: ${(props) => props.theme.weekdayHeader.color};
  display: flex;
  font-weight: bold;
  justify-content: center;
  text-align: center;
  padding: 0 1em;
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
`;
//# sourceMappingURL=Body.styled.js.map