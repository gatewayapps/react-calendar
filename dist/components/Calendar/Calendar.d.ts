import React from 'react';
import { DayOfWeek } from '../../lib/DayOfWeek';
import { IEventSource } from '../../lib/eventSource';
export interface ICalendarProps {
    defaultDate?: Date;
    events?: IEventSource[];
    weekStartsOn?: DayOfWeek;
    shouldScrollSync?: boolean;
}
declare const Calendar: React.FunctionComponent<ICalendarProps>;
export default Calendar;
//# sourceMappingURL=Calendar.d.ts.map