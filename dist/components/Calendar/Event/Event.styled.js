"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledEventBody = exports.StyledColorTag = exports.StyledEventContent = exports.StyledEventLink = exports.StyledEvent = void 0;
const styled_components_1 = __importDefault(require("../../../styles/styled-components"));
exports.StyledEvent = styled_components_1.default.div `
  background-color: ${(props) => props.theme.event.backgroundColor};
  border-radius: 0px;
  border: 1px solid ${(props) => props.theme.event.borderColor};
  color: ${(props) => props.theme.event.color};
  display: flex;
  font-size: 1em;
  margin: 3px;
  overflow: hidden;
`;
exports.StyledEventLink = styled_components_1.default.a `
  border: none;
  display: flex;
  flex: 1;
  overflow: hidden;
`;
exports.StyledEventContent = styled_components_1.default.div `
  align-items: center;
  display: flex;
  flex: 1;
  overflow: hidden;
`;
exports.StyledColorTag = styled_components_1.default.div `
  height: 100%;
  width: 20px;
`;
exports.StyledEventBody = styled_components_1.default.div `
  display: flex;
  flex: 1;
  justify-content: space-between;
  overflow: hidden;

  span {
    margin: 0 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:first-child {
      flex: 1;
    }
  }
`;
//# sourceMappingURL=Event.styled.js.map