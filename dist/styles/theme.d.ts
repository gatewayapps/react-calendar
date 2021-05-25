export interface ICalendarTheme {
    backgroundColor: string;
}
export interface ICalendarDayTheme {
    currentMonthBackgroundColor: string;
    otherMonthBackgroundColor: string;
    todayBackgroundColor: string;
    borderColor: string;
    headerBackgroundColor: string;
}
export interface IEventTheme {
    backgroundColor: string;
    borderColor: string;
    color: string;
}
export interface ITheme {
    calendar: ICalendarTheme;
    calendarDay: ICalendarDayTheme;
    event: IEventTheme;
}
export declare const defaultTheme: ITheme;
//# sourceMappingURL=theme.d.ts.map