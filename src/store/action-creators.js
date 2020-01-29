export const addToCart = id => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      id,
    },
  }
}

export const removeFromCart = id => {
  return {
    type: 'REMOVE_FROM_CARD',
    payload: {
      id,
    },
  }
}

export const openModal = () => {
  return {
    type: 'OPEN_MODAL',
  }
}

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL',
  }
}
