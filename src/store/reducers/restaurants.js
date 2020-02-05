import {normalizedRestaurants} from '../../fixtures'
import {UPDATE_RESTAURANT} from '../common'

export const restaurantsReducer = (
  restaurantsState = normalizedRestaurants,
  action
) => {
  switch (action.type) {
    case UPDATE_RESTAURANT: {
      const {id, restaurantId} = action.payload
      const updatedRest = {
        ...restaurantsState.find(rest => rest.id === restaurantId),
      }
      updatedRest.reviews = [...updatedRest.reviews, id]

      return restaurantsState.map(item => {
        if (item.id !== restaurantId) {
          return item
        }
        return {
          ...item,
          ...updatedRest,
        }
      })
    }
    default: {
      return restaurantsState
    }
  }
}
