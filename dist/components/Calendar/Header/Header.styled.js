"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = exports.NavContainer = exports.HeaderContainer = void 0;
const styled_components_1 = __importDefault(require("../../../styles/styled-components"));
exports.HeaderContainer = styled_components_1.default.div `
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0.5em;
`;
exports.NavContainer = styled_components_1.default.div `
  display: flex;
  justify-self: end;

  .nav-button {
    background-color: ${(props) => props.theme.header.button.backgroundColor};
    border: 1px solid ${(props) => props.theme.header.button.borderColor};
    border-radius: 2px;
    cursor: pointer;
    color: ${(props) => props.theme.header.button.color};
    font-size: 14px;
    padding: 0.4em 0.65em;
    transition: background-color 0.2s, box-shadow 0.2s;

    &:hover {
      background-color: ${(props) => props.theme.header.button.backgroundColorHover};
      border-color: ${(props) => props.theme.header.button.backgroundColorHover};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    span {
      margin-left: 5px;
    }
  }
`;
exports.Title = styled_components_1.default.h2 `
  font-size: ${(props) => props.theme.header.title.fontSize};
  color: ${(props) => props.theme.header.title.color};
  justify-self: center;
  margin: 0px;
`;
//# sourceMappingURL=Header.styled.js.map