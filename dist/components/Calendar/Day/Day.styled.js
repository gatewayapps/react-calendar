"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsContainer = exports.DayHeader = exports.DayContainer = void 0;
const styled_components_1 = __importDefault(require("../../../styles/styled-components"));
exports.DayContainer = styled_components_1.default.div `
  background: ${(props) => {
    if (!props.isCurrentMonth) {
        return props.theme.calendarDay.otherMonthBackgroundColor;
    }
    else if (props.isToday) {
        return props.theme.calendarDay.todayBackgroundColor;
    }
    else {
        return props.theme.calendarDay.currentMonthBackgroundColor;
    }
}};
  border: 1px solid ${(props) => props.theme.calendarDay.borderColor};
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: hidden;
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  /* IE 11 Support */
  -ms-grid-row: ${(props) => props.row};
  -ms-grid-column: ${(props) => props.column};

  &:not(.firstDayOfWeek) {
    border-left-width: 0.5px;
  }

  &:not(.lastDayOfWeek) {
    border-right-width: 0.5px;
  }
`;
exports.DayHeader = styled_components_1.default.div `
  background-color: #eee;
  border-bottom: 1px solid ${(props) => props.theme.calendarDay.borderColor};
  font-size: 0.85em;
  font-weight: bold;
  padding: 0 0.5em;
`;
exports.EventsContainer = styled_components_1.default.div.attrs({
    className: 'events-container'
}) `
  flex: 1;
  max-height: 115px;
  overflow-y: auto;
`;
//# sourceMappingURL=Day.styled.js.map