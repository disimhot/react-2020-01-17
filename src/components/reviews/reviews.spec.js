import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Reviews from './reviews'
import Restaurant from '../restaurant/restaurant'
import {restaurants} from '../../fixtures'

const reviewsMock = restaurants[0].reviews
const restaurant = restaurants[0]

Enzyme.configure({
  adapter: new Adapter(),
})

describe('Reviews', function() {
  it('should exist', function() {
    const wrapper = mount(<Reviews reviews={reviewsMock} />)

    expect(wrapper.find('Reviews').exists()).toBe(true)
  })
})

describe('Reviews', function() {
  it('should render reviews', function() {
    const wrapper = mount(<Reviews reviews={reviewsMock} />)

    expect(wrapper.find('[data-automation-id="REVIEW_ITEM"]').length).toBe(
      reviewsMock.length
    )
  })
})

describe('Reviews', function() {
  it('should have name', function() {
    const wrapper = mount(<Reviews reviews={reviewsMock} />)

    expect(wrapper.find('Reviews').exists()).toBe(true)
  })
})
