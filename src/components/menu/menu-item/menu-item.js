import React, {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import styles from '../../restaurants-navigation/restaurants-navigation.module.css'

function MenuItem(props) {
  useEffect(() => {
    // componentDidMount
  }, [])

  useEffect(() => {
    // componentDidUpdate
  }, [props])

  useEffect(() => {
    return () => {
      // componentWillUnmount
    }
  }, [props])

  return (
    <NavLink
      className={styles.restaurant}
      key={props.id}
      data-automation-id={`RESTAURANT_NAVIGATION_${props.id}`}
      to={`/restaurant/${props.id}`}
      activeClassName={styles.activeLink}
    >
      {props.children}
    </NavLink>
  )
}

export default MenuItem
