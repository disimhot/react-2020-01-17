import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Dishes from '../dishes'
import AverageRating from '../average-rating'
import Reviews from '../reviews'
import Hero from '../hero'
import styles from './restaurant.module.css'
import PropTypes from 'prop-types'

export const RestaurantProps = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array,
  }).isRequired,
}

class Restaurant extends Component {
  static propTypes = RestaurantProps

  state = {
    error: null,
  }

  static propTypes = {
    restaurant: PropTypes.object.isRequired,
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
    })
  }

  render() {
    const {
      restaurant: {name, menu, reviews},
    } = this.props

    return (
      <div>
        <Hero heading={name}>
          <AverageRating reviews={reviews} />
        </Hero>
        <div className={styles.restaurantContent}>
          <Reviews
            className={'reviews-container'}
            data-automation-id="REVIEW_CONTAINER"
            reviews={reviews}
          />
          {!this.state.error && <Dishes menu={menu} />}
        </div>
      </div>
    )
  }
}

Restaurant.defaultProps = {
  restaurant: {},
}

export default Restaurant
