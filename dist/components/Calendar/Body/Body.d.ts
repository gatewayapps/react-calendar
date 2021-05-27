import * as React from 'react';
import { DayOfWeek } from '../../../lib/DayOfWeek';
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
}
declare const Body: React.FunctionComponent<IBodyProps>;
export default Body;
//# sourceMappingURL=Body.d.ts.map