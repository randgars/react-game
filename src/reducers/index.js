import {combineReducers} from 'redux';

import loading from './loading';
import clicks from './clicks';
import coordinates from './coordinates';

const reducers = {
  loading,
  clicks,
  coordinates
};

const combined = combineReducers(reducers);

export default combined;