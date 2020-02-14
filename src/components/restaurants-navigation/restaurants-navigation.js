import React, {Component} from 'react'
import styles from './restaurants-navigation.module.css'
import {NavLink} from 'react-router-dom'
import {Menu, MenuItem} from '../menu'

class RestaurantsNavigation extends Component {
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

export default RestaurantsNavigation
