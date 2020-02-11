import React, {Component} from 'react'
import styles from './restaurants-navigation.module.css'
import {Link} from 'react-router-dom'

class RestaurantsNavigation extends Component {
  render() {
    const {restaurants, onRestaurantChange} = this.props
    return (
      <div className={styles.list}>
        {restaurants.map(({id, name}) => (
          <Link
            className={styles.restaurant}
            key={id}
            to={`/restaurant/${id}`}
            data-automation-id={`RESTAURANT_NAVIGATION_${id}`}
          >
            {name}
          </Link>
        ))}
      </div>
    )
  }
}

export default RestaurantsNavigation
