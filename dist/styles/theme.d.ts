export interface ICalendarTheme {
    backgroundColor: string;
}
export interface IButtonTheme {
    backgroundColor: string;
    backgroundColorHover: string;
    borderColor: string;
    color: string;
}
export interface ICalendarDayTheme {
    borderColor: string;
    currentMonthBackgroundColor: string;
    otherMonthBackgroundColor: string;
    todayBackgroundColor: string;
    todayBorderColor: string;
    headerBackgroundColor: string;
    headerColor: string;
}
export interface IHeaderTheme {
    button: IButtonTheme;
    title: ITitleTheme;
}
export interface ITitleTheme {
    color: string;
    fontSize: string;
}
export interface IEventTheme {
    backgroundColor: string;
    borderColor: string;
    color: string;
}
export interface IWeekDayHeader {
    backgroundColor: string;
    color: string;
}
export interface ITheme {
    calendar: ICalendarTheme;
    calendarDay: ICalendarDayTheme;
    event: IEventTheme;
    header: IHeaderTheme;
    weekdayHeader: IWeekDayHeader;
}
export declare const defaultTheme: ITheme;
//# sourceMappingURL=theme.d.ts.map