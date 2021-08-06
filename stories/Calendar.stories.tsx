import '../css/react-datepicker.css'
import '../css/react-tabs.css'
import React from 'react'
import { Calendar } from '../src'

export default {
  title: 'Calendar',
  component: Calendar
}

export const Basic = ({ ...args }) => (
  <div style={{ width: '100%', height: '800px' }}>
    <Calendar {...args} />
  </div>
)
