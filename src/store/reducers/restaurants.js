import {normalizedRestaurants} from '../../fixtures'
import {ADD_REVIEW} from '../common'
import {produce} from 'immer'

export const restaurantsReducer = (
  restaurantsState = normalizedRestaurants,
  action
) =>
  produce(restaurantsState, draft => {
    switch (action.type) {
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
