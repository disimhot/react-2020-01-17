import {normalizedReviews} from '../../fixtures'
import {ADD_REVIEW} from '../common'

const initialState = normalizedReviews.reduce((reviews, review) => {
  return {
    ...reviews,
    [review.id]: review,
  }
}, {})

export const reviewsReducer = (reviewsState = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      const {id, text, userId, rating} = action.payload
      return {
        ...reviewsState,
        [id]: {
          id: id,
          userId: userId,
          text: text,
          rating: rating,
        },
      }
    }
    default: {
      return reviewsState
    }
  }
}
