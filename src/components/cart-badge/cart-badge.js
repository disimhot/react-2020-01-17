import React from 'react'
import PropTypes from 'prop-types'
import {Badge, Button} from 'antd'
import styles from './cart-badge.module.css'
import {useSelector} from 'react-redux'

function CartBadge() {
  const amount = useSelector(state =>
    Object.values(state.cart).reduce((acc, count) => acc + count, 0)
  )
  return (
    <Badge count={amount} className={styles.cartButtonContainer}>
      <Button
        icon="shopping-cart"
        size="large"
        type="primary"
        className={styles.cartButton}
      />
    </Badge>
  )
}

CartBadge.defaultProps = {
  amount: 0,
}

CartBadge.propTypes = {
  amount: PropTypes.number.isRequired,
}

export default CartBadge
