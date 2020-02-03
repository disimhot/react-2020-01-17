import {createStore, applyMiddleware} from 'redux'
import {reducer} from './reducers'
//import {logging} from './middlewares/logging'
import {generatingID} from './middlewares/generatingID'

const enhancer = applyMiddleware(generatingID)

export const store = createStore(reducer, enhancer)

// ONLY FOR DEV
window.store = store
