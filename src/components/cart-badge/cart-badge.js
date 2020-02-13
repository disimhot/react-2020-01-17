import React from 'react'
import PropTypes from 'prop-types'
import {Badge, Button} from 'antd'
import './cart-badge.css'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {selectCart} from '../../store/selectors'

function CartBadge(props) {
  const isEmpty = !props.totalAmount
  return (
    <NavLink to={`/cart`} disabled={isEmpty}>
      <Badge count={props.totalAmount} className={'cart-button-container'}>
        <Button
          icon="shopping-cart"
          size="large"
          type="primary"
          className="cart-button"
        />
      </Badge>
    </NavLink>
  )
}

CartBadge.defaultProps = {
  totalAmount: 0,
}

CartBadge.propTypes = {
  totalAmount: PropTypes.number.isRequired,
}

export default connect(state => {
  return {
    totalAmount: Object.values(selectCart(state)).reduce(
      (acc, amount) => acc + amount,
      0
    ),
  }
})(CartBadge)
