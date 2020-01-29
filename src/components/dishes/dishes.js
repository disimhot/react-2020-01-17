import React, {Component} from 'react'
import Dish, {DishProps} from '../dish'
import PropTypes from 'prop-types'

class Dishes extends Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape(DishProps)).isRequired,
  }

  render() {
    const {menu} = this.props

    return (
      <div>
        {menu.map(dish => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </div>
    )
  }
}

Dishes.defaultProps = {
  menu: [],
}

export default Dishes
