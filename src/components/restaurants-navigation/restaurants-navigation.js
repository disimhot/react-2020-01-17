import React, {Component} from 'react'
import styles from './restaurants-navigation.module.css'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

class RestaurantsNavigation extends Component {
  static propTypes = {
    restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
    onRestaurantChange: PropTypes.func,
  }

  render() {
    const {restaurants, onRestaurantChange} = this.props

    return (
      <div className={styles.list}>
        {restaurants.map(({id, name}) => (
          <NavLink
            className={styles.restaurant}
            key={id}
            to={`/restaurant/${id}`}
            data-automation-id={`RESTAURANT_NAVIGATION_${id}`}
            activeClassName={styles.active}
          >
            {name}
          </NavLink>
        ))}
      </div>
    )
  }
}

RestaurantsNavigation.defaultProps = {
  restaurants: [{id: 'default'}],
}

export default RestaurantsNavigation
