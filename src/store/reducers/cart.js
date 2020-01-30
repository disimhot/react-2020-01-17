export const cartReducer = (cartState = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const {id, name, price} = action.payload.id
      return {
        ...cartState,
        [id]: {
          ...cartState[id],
          amount: (cartState[id] || {}).amount ? cartState[id].amount + 1 : 1,
          name: name,
          price: price,
        },
      }
    }
    case 'REMOVE_FROM_CARD': {
      const {id, name, price} = action.payload.id
      return {
        ...cartState,
        [id]: {
          ...cartState[id],
          amount: (cartState[id] || {}).amount ? cartState[id].amount - 1 : 0,
          name: name,
          price: price,
        },
      }
    }
    default:
      return cartState
  }
}
