import {ADD_REVIEW, FETCH_RESTAURANTS} from '../common'
import {produce} from 'immer'

export const restaurantsReducer = (restaurantsState = [], action) =>
  produce(restaurantsState, draft => {
    switch (action.type) {
      case FETCH_RESTAURANTS: {
        return action.response
      }
      case ADD_REVIEW: {
        const targetRestaurant = draft.find(
          restaurant => restaurant.id === action.payload.restaurantId
        )
        targetRestaurant.reviews.push(action.generatedId)
        break
      }
      default:
        return
    }
  })
