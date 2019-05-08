import { mount } from 'enzyme'
import React from 'react'
import Calendar from '../src/components/Calendar'

describe('<Calendar />', () => {
  it('Should render properly', () => {
    const wrapper = mount(<Calendar defaultDate={new Date(2019, 4, 8)} />)
    expect(wrapper.text()).toContain('May 2019')
  })
})
