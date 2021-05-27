"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsContainer = exports.DayContainer = exports.DayHeader = void 0;
const styled_components_1 = __importDefault(require("../../../styles/styled-components"));
exports.DayHeader = styled_components_1.default.div `
  align-items: center;
  background-color: inherit;
  color: ${(props) => props.theme.calendarDay.headerColor};
  display: flex;
  font-size: 0.75em;
  font-weight: bold;
  overflow: hidden;
  padding: 5px;
`;
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

  ${exports.DayHeader} {
    border-top: ${(props) => {
    if (props.isToday) {
        return `4px solid ${props.theme.calendarDay.todayBorderColor}`;
    }
    else {
        return 'unset';
    }
}};
  }

  &:not(.firstDayOfWeek) {
    border-left-width: 0.5px;
  }

  &:not(.lastDayOfWeek) {
    border-right-width: 0.5px;
  }
`;
exports.EventsContainer = styled_components_1.default.div.attrs({
    className: 'events-container'
}) `
  flex: 1;
  max-height: 115px;
  overflow-y: hidden;

  &:hover {
    overflow-y: auto;
  }
`;
//# sourceMappingURL=Day.styled.js.map