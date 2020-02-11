import React, {Component} from 'react'
import Dish from '../dish'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchDishes} from '../../store/action-creators'
import {selectDishes} from '../../store/selectors'

class Dishes extends Component {
  componentDidMount() {
    this.props.fetchDishes && this.props.fetchDishes()
  }

  render() {
    const {menu, dishesLoaded} = this.props
    if (!dishesLoaded) {
      return <h1>Loading dishes...</h1>
    }
    return (
      <div>
        {menu.map(dishId => (
          <Dish key={dishId} id={dishId} />
        ))}
      </div>
    )
  }
}

export const DishesPropTypes = {
  menu: PropTypes.arrayOf(PropTypes.string),
}

Dishes.propTypes = DishesPropTypes

export default connect(
  state => ({dishesLoaded: selectDishes(state).length > 0}),
  {fetchDishes}
)(Dishes)
