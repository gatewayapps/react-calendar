import { mount } from 'enzyme'
import React from 'react'
import { Calendar } from '../src/components/Calendar'

describe('<Calendar />', () => {
  it('Should render properly', () => {
    const wrapper = mount(<Calendar />)
    expect(wrapper.text()).toContain('Hello from the calendar')
  })
})
