import { IEventSource } from '../../dist/lib/eventSource'

export interface View {
  name: string
  component: (props: {
    events: IEventSource[]
    range: { start: Date | number; end: Date | number }
  }) => JSX.Element
}
