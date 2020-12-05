import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Main from './main'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import allReducers from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'


const composeEnhancer = composeWithDevTools(applyMiddleware(thunk))

const store = createStore(allReducers, composeEnhancer);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
