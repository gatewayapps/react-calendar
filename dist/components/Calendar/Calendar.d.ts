import 'react-tabs/style/react-tabs.css';
import React from 'react';
import { DayOfWeek } from '../../lib/DayOfWeek';
import { IEvent } from '../../lib/event';
import { IEventSource } from '../../lib/eventSource';
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
    loadingComponent?: JSX.Element;
    weeks?: number;
}
declare const Calendar: React.FunctionComponent<ICalendarProps>;
export default Calendar;
//# sourceMappingURL=Calendar.d.ts.map