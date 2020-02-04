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
      const {id, review, userId, rating} = action.payload
      console.log('Reducer action.payload', action.payload)
      return {
        ...reviewsState,
        [id]: {
          id: id,
          userId: userId,
          text: review,
          rating: rating,
        },
      }
    }
    default: {
      return reviewsState
    }
  }
}
