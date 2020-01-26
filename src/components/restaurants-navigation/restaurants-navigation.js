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
            data-automation-id="RESTAURANT_NAVIGATION"
            className={styles.restaurant}
            key={id}
            onClick={() => onRestaurantChange(id)}
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
