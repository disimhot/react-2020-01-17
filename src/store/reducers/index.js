import {combineReducers} from 'redux'
import {restaurantsReducer} from './restaurants'
import {cartReducer} from './cart'

export const reducer = combineReducers({
  counter: (counterState = 10, action) => {
    console.log('Action', action)
    return action.type === 'INCREASE' ? counterState + 1 : counterState
  },
  restaurants: restaurantsReducer,
  cart: cartReducer,
})
