export const cartReducer = (cartState = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const {id} = action.payload
      return {
        ...cartState,
        [id]: cartState[id] ? cartState[id] + 1 : 1,
      }
    }
    default:
      return cartState
  }
}
