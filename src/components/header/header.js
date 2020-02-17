import React from 'react'

import Logo from './logo'
import styles from './header.module.css'
import CartBadge from '../cart-badge'
import RSelect from '../rselect'

function Header(props) {
  return (
    <header className={styles.header}>
      <Logo />
      <CartBadge />
      <RSelect handleLangChange={props.handleLangChange} />
    </header>
  )
}

export default Header
