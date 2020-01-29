import React from 'react'
import {mount} from 'enzyme'
import Restaurants from './restaurants'
import {restaurants} from '../../fixtures'

describe('Restaurants', function() {
  it('should render navigation items', function() {
    const wrapper = mount(<Restaurants restaurants={restaurants} />)

    expect(
      wrapper.find('[data-automation-id="RESTAURANT_NAVIGATION"]').length
    ).toBe(restaurants.length)
  })
})
