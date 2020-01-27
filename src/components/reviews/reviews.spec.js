import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Reviews from './reviews'
import {restaurants} from '../../fixtures'

const reviewsMock = restaurants[0].reviews

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
  it('should have properties', function() {
    const reviews_data = [
      {
        id: '5909796d-5030-4e36-adec-68b8f9ec2d96',
        user: 'Antony',
        text: 'Not bad',
        rating: 5,
      },
      {
        id: '429dea85-11dd-4054-a31e-c60c92e17255',
        user: 'Sam',
        text: 'No burgers',
        rating: 3,
      },
    ]
    const wrapper = mount(<Reviews reviews={reviewsMock} />)

    expect(wrapper.props().reviews).toEqual(reviews_data)
  })
})

describe('Reviews', function() {
  it('child should have author', function() {
    const test_name = 'Antony'
    const wrapper = mount(<Reviews reviews={reviewsMock} />)

    expect(
      wrapper
        .find('[data-automation-id="REVIEW_AUTHOR"]')
        .first()
        .text()
    ).toEqual(test_name)
  })
})

describe('Reviews', function() {
  it('child should have text', function() {
    const test_text = 'Not bad'
    const wrapper = mount(<Reviews reviews={reviewsMock} />)

    expect(
      wrapper
        .find('[data-automation-id="REVIEW_TEXT"]')
        .first()
        .text()
    ).toEqual(test_text)
  })
})
