import { Interval } from 'date-fns';
import * as React from 'react';
import { DayOfWeek } from '../../../lib/DayOfWeek';
import { IEvent } from '../../../lib/event';
import { IEventSource } from '../../../lib/eventSource';
interface IBodyProps {
    currentMonth: Date;
    events?: IEventSource[];
    getCalendarDates?: (values: {
        start: Date;
        end: Date;
    }) => void;
    shouldScrollSync?: boolean;
    numberOfWeeks: number;
    weekStartsOn: DayOfWeek;
    dayHeaderComponent?: (props: {
        date: Date;
    }) => JSX.Element;
    eventComponent?: (props: {
        event: IEvent;
    }) => JSX.Element;
    validRange?: Interval;
}
declare const Body: React.FunctionComponent<IBodyProps>;
export default Body;
//# sourceMappingURL=Body.d.ts.map