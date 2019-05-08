import { storiesOf } from '@storybook/react'
import React from 'react'
import Calendar from '../src/components/Calendar'

storiesOf('Calendar', module).add('test', () => (
  <div style={{ width: '100%', height: '800px' }}>
    <Calendar />
  </div>
))
