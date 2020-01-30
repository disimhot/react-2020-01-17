const initialState = {
  title: 'Your order',
  visible: false,
  footer: null,
  order: {},
}

export const orderReducer = (orderState = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL': {
      return {
        ...orderState,
        visible: true,
      }
    }
    case 'CLOSE_MODAL': {
      return {
        ...orderState,
        visible: false,
      }
    }
    default:
      return orderState
  }
}
