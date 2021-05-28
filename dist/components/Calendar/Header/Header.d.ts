import { Interval } from 'date-fns';
import * as React from 'react';
import { View } from '../../../lib/view';
interface IHeaderProps {
    currentMonth: Date;
    setCurrentMonth: (date: Date) => void;
    setActiveTab: (tab: number) => void;
    shouldShowTodayButton?: boolean;
    shouldShowDatePicker?: boolean;
    validRange?: Interval;
    views?: View[];
}
declare const Header: React.FunctionComponent<IHeaderProps>;
export default Header;
//# sourceMappingURL=Header.d.ts.map