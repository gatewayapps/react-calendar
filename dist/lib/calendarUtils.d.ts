import { DayOfWeek } from './DayOfWeek';
import { IEvent } from './event';
import { IEventSource } from './eventSource';
export declare function getCalendarStartDate(date: Date, numberOfWeeks?: number, weekStartsOn?: DayOfWeek): Date;
export declare function getCalendarEndDate(date: Date, numberOfWeeks?: number, weekStartsOn?: DayOfWeek): Date;
export declare function getEventsForDay(date: Date, events?: IEventSource[]): IEvent[];
export declare function setupScrollSync(element: HTMLDivElement, shouldScrollSync?: boolean): void;
//# sourceMappingURL=calendarUtils.d.ts.map