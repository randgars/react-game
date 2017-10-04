import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

import reducers from '../reducers';

export default function reduxStore(initialState) {
  const store = createStore(reducers, initialState, compose(
    applyMiddleware(thunk),
    applyMiddleware(reduxLogger)
  ))

  return store
}