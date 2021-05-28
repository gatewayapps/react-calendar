import React from 'react';
import { DayOfWeek } from '../../lib/DayOfWeek';
import { IEventSource } from '../../lib/eventSource';
import { IEvent } from '../../lib/event';
import { View } from '../../lib/view';
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
    dayHeaderComponent?: (props: {
        date: Date;
    }) => JSX.Element;
    eventComponent?: (props: {
        event: IEvent;
    }) => JSX.Element;
    views?: View[];
    validRange?: {
        start: Date | string;
        end: Date | string;
    };
}
declare const Calendar: React.FunctionComponent<ICalendarProps>;
export default Calendar;
//# sourceMappingURL=Calendar.d.ts.map