import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import {Modal} from 'antd'
import {connect} from 'react-redux'
import {closeModal} from '../../store/action-creators'
import styles from './order.module.css'

function Order(props) {
  const {title, visible, footer, orderDishes, hideModal} = props

  const total = useMemo(
    () =>
      Object.values(orderDishes).reduce(
        (accum, orderItem) => (accum += orderItem.amount * orderItem.price),
        0
      ),
    [orderDishes]
  )

  return visible ? (
    <div>
      <Modal
        title={title}
        visible={visible}
        onCancel={() => hideModal()}
        footer={footer}
      >
        {Object.keys(orderDishes).length > 0 ? (
          <div>
            {Object.keys(orderDishes).map(id => (
              <p key={id} className={styles.orderItem}>
                {orderDishes[id].name}
                <span>{orderDishes[id].amount}</span>
              </p>
            ))}

            <h6 className={styles.orderItem}>
              TOTAL PRICE:
              <span>{total}</span>
            </h6>
          </div>
        ) : (
          <p>Oops! Nothing is ordered</p>
        )}
      </Modal>
    </div>
  ) : null
}

export const OrderProps = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  footer: PropTypes.oneOf([null]),
  order: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
}

Order.propTypes = OrderProps

const mapStateToProps = state => {
  return {
    title: state.order.title,
    visible: state.order.visible,
    footer: state.order.footer,
    orderDishes: state.cart,
  }
}

const mapDispatchToProps = dispatch => ({
  hideModal: id => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)
