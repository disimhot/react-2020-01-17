import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Menu, MenuItem} from '../menu'

class RestaurantsNavigation extends Component {
  static propTypes = {
    restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
    onRestaurantChange: PropTypes.func,
  }

  render() {
    const {restaurants} = this.props
    return (
      <Menu>
        {restaurants.map(({id, name}) => (
          <MenuItem key={id} id={id}>
            {name}
          </MenuItem>
        ))}
      </Menu>
    )
  }
}

RestaurantsNavigation.defaultProps = {
  restaurants: [{id: 'default'}],
}

export default RestaurantsNavigation
