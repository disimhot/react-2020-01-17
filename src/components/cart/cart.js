import Button from 'antd/es/button'
import cx from 'classnames'
import React from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import styles from './cart.module.css'
import CartRow from './cart-row'
import CartItem from './cart-item'
import {connect} from 'react-redux'
import './cart.css'
import {selectOrderedDishes} from '../../store/selectors'
import {emptyCart} from '../../store/action-creators'

function Cart({className, orderedDishes}) {
  const {dishes, totalPrice} = orderedDishes

  const history = useHistory()
  const dispatch = useDispatch()

  const submitOrder = event => {
    event.preventDefault()
    dispatch(emptyCart())
    history.push('/thankyou')
  }

  if (dishes.length === 0) {
    return null
  }

  return (
    <div className={cx(styles.cart, className)}>
      <TransitionGroup>
        {dishes.map(({dish, amount, restaurant}) => (
          <CSSTransition
            timeout={500}
            classNames="cart-item-animation"
            key={dish.id}
          >
            <CartItem
              dish={dish}
              amount={amount}
              restaurant={restaurant}
              key={dish.id}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr />

      <CartRow leftContent={'Sub-total'} rightContent={`${totalPrice} $`} />
      <CartRow leftContent={'Delivery costs'} rightContent="FREE" />
      <CartRow leftContent={'Total'} rightContent={`${totalPrice} $`} />
      <Button type="primary" size="large" onClick={submitOrder} block>
        Order
      </Button>
    </div>
  )
}

export default connect(state => {
  return {
    orderedDishes: selectOrderedDishes(state),
  }
})(Cart)
