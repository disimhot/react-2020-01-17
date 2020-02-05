import {
  ADD_TO_CART,
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_CART,
  ADD_REVIEW,
  ADD_USER,
  UPDATE_RESTAURANT,
} from '../common'

export const increment = () => {
  return {
    type: INCREMENT,
  }
}

export const decrement = () => {
  return {
    type: DECREMENT,
  }
}

export const addToCart = dishId => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: dishId,
    },
  }
}

export const removeFromCart = dishId => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: dishId,
    },
  }
}

export const addReview = payload => {
  return {
    type: ADD_REVIEW,
    payload: payload,
  }
}

export const addUser = payload => {
  return {
    type: ADD_USER,
    payload: payload,
  }
}

export const updateRestaurant = payload => {
  return {
    type: UPDATE_RESTAURANT,
    payload: payload,
  }
}
