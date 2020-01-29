import {createStore} from 'redux'
import {reducer} from './reducers'

const store = createStore(reducer)

// only for experimenting!!!
window.store = store

export {store}
