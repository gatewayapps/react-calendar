import { storiesOf } from '@storybook/react'
import React from 'react'
import Calendar from '../src/components/Calendar'
import { DayOfWeek } from '../src/lib/DayOfWeek'

storiesOf('Calendar', module)
  .add('Default', () => (
    <div style={{ width: '100%', height: '800px' }}>
      <Calendar />
    </div>
  ))
  .add('Week Starts on Monday', () => (
    <div style={{ width: '100%', height: '800px' }}>
      <Calendar weekStartsOn={DayOfWeek.Monday} />
    </div>
  ))
