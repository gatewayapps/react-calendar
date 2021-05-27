import React from 'react';
import { DayOfWeek } from '../../lib/DayOfWeek';
import { IEventSource } from '../../lib/eventSource';
export interface ICalendarProps {
    defaultDate?: Date;
    events?: IEventSource[];
    getCalendarDates?: (values: {
        start: Date;
        end: Date;
    }) => void;
    weekStartsOn?: DayOfWeek;
    shouldScrollSync?: boolean;
    shouldShowDatePicker?: boolean;
    shouldShowTodayButton?: boolean;
    dayHeaderComponent?: React.ReactNode;
}
declare const Calendar: React.FunctionComponent<ICalendarProps>;
export default Calendar;
//# sourceMappingURL=Calendar.d.ts.map