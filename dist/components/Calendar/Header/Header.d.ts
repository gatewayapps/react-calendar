import * as React from 'react';
interface IHeaderProps {
    currentMonth: Date;
    setCurrentMonth: (date: Date) => void;
    shouldShowTodayButton?: boolean;
    shouldShowDatePicker?: boolean;
}
declare const Header: React.FunctionComponent<IHeaderProps>;
export default Header;
//# sourceMappingURL=Header.d.ts.map