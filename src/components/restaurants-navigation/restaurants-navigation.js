import React, {Component} from 'react'
import styles from './restaurants-navigation.module.css'
import PropTypes from 'prop-types'

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
          <span
            className={styles.restaurant}
            key={id}
            onClick={() => onRestaurantChange(id)}
            data-automation-id={`RESTAURANT_NAVIGATION_${id}`}
          >
            {name}
          </span>
        ))}
      </div>
    )
  }
}

RestaurantsNavigation.defaultProps = {
  restaurants: [{id: 'default'}],
}

export default RestaurantsNavigation
