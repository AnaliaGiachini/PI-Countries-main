import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


// Connect with the browser extension => REDUX DEVTOOLS
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

const store = createStore(
  reducer,
  // Make requests to a server
  composeEnhancer(composeWithDevTools(applyMiddleware(thunkMiddleware)))
)

export default store