import React from 'react'
import {mount} from 'enzyme'
import Reviews from './reviews'
import {restaurants} from '../../fixtures'
import Review from './review'

const reviewsMock = restaurants[0].reviews

describe('Reviews', function() {
  it('should render all given reviews', function() {
    const wrapper = mount(<Reviews reviews={reviewsMock} />)

    expect(wrapper.find(Review).length).toBe(reviewsMock.length)

    expect(wrapper.find('span[data-automation-id="REVIEW_TEXT"]').length).toBe(
      reviewsMock.length
    )
  })
})
