import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import allReducers from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

const composeEnhancer = composeWithDevTools(applyMiddleware(thunk))
const store = createStore(allReducers, composeEnhancer);

export default store
