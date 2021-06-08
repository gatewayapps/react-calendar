import * as React from 'react';
import { Interval } from 'date-fns';
import { DayOfWeek } from '../../../lib/DayOfWeek';
import { IEvent } from '../../../lib/event';
import { IEventSource } from '../../../lib/eventSource';
interface IBodyProps {
    currentSpan: Date;
    start: Date;
    end: Date;
    events?: IEventSource[];
    shouldScrollSync?: boolean;
    numberOfWeeks: number;
    weekStartsOn: DayOfWeek;
    dayHeaderComponent?: (props: {
        date: Date;
    }) => JSX.Element;
    eventComponent?: (props: {
        event: IEvent;
        showEventTime?: boolean;
    }) => JSX.Element;
    showEventTime?: boolean;
    validRange?: Interval;
}
declare const Body: React.FunctionComponent<IBodyProps>;
export default Body;
//# sourceMappingURL=Body.d.ts.map