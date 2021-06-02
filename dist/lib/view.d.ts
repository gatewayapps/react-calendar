/// <reference types="react" />
import { IEventSource } from '../../dist/lib/eventSource';
import { Interval } from 'date-fns';
export interface View {
    name: string;
    component: (props: {
        events?: IEventSource[];
        range?: Interval;
    }) => JSX.Element;
}
//# sourceMappingURL=view.d.ts.map