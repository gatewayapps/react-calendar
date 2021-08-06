import { mount } from 'enzyme'
import React from 'react'
import Calendar from '../src/components/Calendar'

describe('<Calendar />', () => {
  it('Should render properly', () => {
    const wrapper = mount(<Calendar defaultDate={new Date(2019, 4, 8)} />)
    expect(wrapper.text()).toContain('May 2019')
  })

  it('Should render with range restrictions', () => {
    const wrapper = mount(
      <Calendar
        defaultDate={new Date(2019, 4, 8)}
        validRange={{
          start: '2015-01-01',
          end: '2050-12-31'
        }}
      />
    )
    expect(wrapper.text()).toContain('May 2019')
  })
})
