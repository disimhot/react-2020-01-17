import React from 'react'
import styles from '../restaurants-navigation/restaurants-navigation.module.css'

function Menu(props) {
  return <div className={styles.list}>{props.children}</div>
}

export {Menu}
