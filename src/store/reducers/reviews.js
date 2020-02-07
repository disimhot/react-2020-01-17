import {normalizedReviews} from '../../fixtures'
import {arrayToMap} from '../utils'
import {ADD_REVIEW} from '../common'
import {Map} from 'immutable'

export const reviewsReducer = (
  reviewsState = new Map(arrayToMap(normalizedReviews)),
  action
) => {
  switch (action.type) {
    case ADD_REVIEW: {
      return reviewsState.set(action.generatedId, {
        id: action.generatedId,
        userId: action.userId,
        text: action.payload.text,
        rating: action.payload.rating,
      })
    }
    default:
      return reviewsState
  }
}
