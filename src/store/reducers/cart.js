import {ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART} from '../common'

const initialState = {}

export const cartReducer = (cartState = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const {id} = action.payload
      return {
        ...cartState,
        [id]: cartState[id] ? cartState[id] + 1 : 1,
      }
    }
    case REMOVE_FROM_CART: {
      const {id} = action.payload
      if (!cartState[id]) {
        return cartState
      }
      return {
        ...cartState,
        [id]: cartState[id] - 1,
      }
    }
    case EMPTY_CART: {
      return initialState
    }
    default: {
      return cartState
    }
  }
}
