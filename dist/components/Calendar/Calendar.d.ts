import React from 'react';
import { DayOfWeek } from '../../lib/DayOfWeek';
import { IEvent } from '../../lib/event';
import { IEventSource } from '../../lib/eventSource';
import { View } from '../../lib/view';
export interface ICalendarProps {
    defaultDate?: Date;
    dayHeaderComponent?: (props: {
        date: Date;
    }) => JSX.Element;
    events?: IEventSource[];
    eventComponent?: (props: {
        event: IEvent;
        showEventTime?: boolean;
    }) => JSX.Element;
    getCalendarDates?: (values: {
        start: Date;
        end: Date;
    }) => void;
    headerToolbar?: boolean;
    loadingComponent?: JSX.Element;
    shouldScrollSync?: boolean;
    shouldShowDatePicker?: boolean;
    shouldShowTodayButton?: boolean;
    showEventTime?: boolean;
    views?: View[];
    validRange?: {
        start: Date | string;
        end: Date | string;
    };
    weeks?: number;
    weekStartsOn?: DayOfWeek;
}
declare const Calendar: React.FunctionComponent<ICalendarProps>;
export default Calendar;
//# sourceMappingURL=Calendar.d.ts.map