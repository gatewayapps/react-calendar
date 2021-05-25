import * as React from 'react';
import { IEvent } from '../../../lib/event';
interface IDayProps {
    currentMonth: Date;
    date: Date;
    events: IEvent[];
    row: number;
    column: number;
}
declare const CalendarDay: React.FunctionComponent<IDayProps>;
export default CalendarDay;
//# sourceMappingURL=Day.d.ts.map