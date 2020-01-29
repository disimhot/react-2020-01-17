import React from 'react'
import {mount} from 'enzyme'
import Dish from './dish'
import {restaurants} from '../../fixtures'

const dishMock = restaurants[0].menu[0]

describe('Dish', function() {
  it('should increase cart amount when click on plus button', function() {
    const wrapper = mount(<Dish dish={dishMock} />)

    wrapper
      .find('button[data-automation-id="INCREASE"]')
      .simulate('click')
      .simulate('click')

    expect(wrapper.find('[data-automation-id="AMOUNT"]').text()).toBe('2')
  })
})

describe('Dish', function() {
  it('should decrease card amount when click on minus button', function() {
    const wrapper = mount(<Dish dish={dishMock} />)

    wrapper
      .find('button[data-automation-id="DECREASE"]')
      .simulate('click')
      .simulate('click')

    expect(wrapper.find('[data-automation-id="AMOUNT"]').text()).toBe('0')
  })

  it('should decrease cart amount when click on minus button not lower than 0', function() {
    const wrapper = mount(<Dish initialValue={3} dish={dishMock} />)

    wrapper
      .find('button[data-automation-id="INCREASE"]')
      .simulate('click')
      .simulate('click')
      .simulate('click')

    wrapper
      .find('button[data-automation-id="DECREASE"]')
      .simulate('click')
      .simulate('click')

    expect(wrapper.find('[data-automation-id="AMOUNT"]').text()).toBe('1')

    wrapper
      .find('button[data-automation-id="DECREASE"]')
      .simulate('click')
      .simulate('click')

    expect(wrapper.find('[data-automation-id="AMOUNT"]').text()).toBe('0')
  })
})
