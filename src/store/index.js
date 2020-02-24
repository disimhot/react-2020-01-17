import {createStore, applyMiddleware} from 'redux'
import {reducer} from './reducers'
import {logging} from './middlewares/logging'
import generateId from './middlewares/generate-id'
import provideUserId from './middlewares/provide-user-id'
import api from './middlewares/api'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'connected-react-router'
import {history} from './history'

const enhancer = composeWithDevTools(
  applyMiddleware(
    thunk,
    routerMiddleware(history),
    api,
    generateId,
    provideUserId,
    logging
  )
)

export const store = createStore(reducer, enhancer)

// ONLY FOR DEV
window.store = store
