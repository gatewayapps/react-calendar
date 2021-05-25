"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = exports.HeaderContainer = void 0;
const styled_components_1 = __importDefault(require("../../../styles/styled-components"));
exports.HeaderContainer = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
`;
exports.Title = styled_components_1.default.div `
  font-size: 1.25em;
`;
//# sourceMappingURL=Header.styled.js.map