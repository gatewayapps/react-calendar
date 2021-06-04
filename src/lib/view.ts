import { IEventSource } from '../../dist/lib/eventSource'
import { Interval } from 'date-fns'

export interface View {
  name: string
  component: (props: {
    startDate: Date
    endDate: Date
    events?: IEventSource[]
    validRange?: Interval
  }) => JSX.Element
  weeks?: number
}
