import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Dishes from '../dishes'
import AverageRating from '../average-rating'
import Reviews from '../reviews'
import Hero from '../hero'
import styles from './restaurant.module.css'
import {Col, Row} from 'antd'
import Cart from '../cart'
import {connect} from 'react-redux'
import {validateRestaurant} from '../../store/action-creators'
import RestaurantsMap from '../restaurants-map'

class Restaurant extends Component {
  state = {
    error: null,
  }

  static propTypes = {
    restaurant: PropTypes.object.isRequired,
  }

  componentDidCatch(error, errorInfo) {
    this.setState({error})
  }

  render() {
    this.props.validateRestaurant(this.props.id)

    if (!this.props.restaurant) {
      return null
    }
    const {
      id,
      restaurant: {name, menu},
    } = this.props

    return (
      <div>
        <Hero heading={name}>
          {this.state.error ? null : <AverageRating id={id} />}
        </Hero>
        <Row>
          <Col span={18} className={styles.restaurantContent}>
            <RestaurantsMap id={id} />
            <Reviews id={id} />
            <Dishes menu={menu} />
          </Col>
          <Col span={6}>
            <Cart />
          </Col>
        </Row>
      </div>
    )
  }
}

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    menu: PropTypes.array,
  }),
}

export default connect(null, dispatch => {
  return {
    validateRestaurant: id => dispatch(validateRestaurant(id)),
  }
})(Restaurant)
