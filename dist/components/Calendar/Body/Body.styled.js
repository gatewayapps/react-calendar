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
  /* IE11 Support */
  display: -ms-grid;
  -ms-grid-columns: ${() => '1fr '.repeat(7).trim()};
  -ms-grid-rows: auto ${(props) => '1fr '.repeat(props.numberOfWeeks).trim()};
`;
exports.WeekdayHeader = styled_components_1.default.div `
  font-weight: bold;
  text-align: center;
  padding-bottom: 0.25em;
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  /* IE 11 Support */
  -ms-grid-row: ${(props) => props.row};
  -ms-grid-column: ${(props) => props.column};
`;
//# sourceMappingURL=Body.styled.js.map