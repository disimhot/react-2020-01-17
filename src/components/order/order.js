import React from 'react'
import PropTypes from 'prop-types'
import {Modal} from 'antd'
import {connect} from 'react-redux'
import {closeModal} from '../../store/action-creators'

function Order(props) {
  const {title, visible, footer, order, hideModal} = props

  return visible ? (
    <div>
      <Modal
        title={title}
        visible={visible}
        onCancel={() => hideModal()}
        footer={footer}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
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

const mapStateToProps = (state, ownProps) => {
  return {
    title: state.order.title,
    visible: state.order.visible,
    footer: state.order.footer,
  }
}

const mapDispatchToProps = dispatch => ({
  hideModal: id => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)
