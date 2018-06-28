// Libs
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Reducers
import countReducer from './module'

// Components
import App from './App'

const store = createStore(countReducer, window.devToolsExtension && window.devToolsExtension())
ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'))
