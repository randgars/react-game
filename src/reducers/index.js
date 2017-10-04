import {combineReducers} from 'redux';
import loading from './loading';

const reducers = {
  loading
};

const combined = combineReducers(reducers);

export default combined;