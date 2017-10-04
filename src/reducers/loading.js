import {
  LOADING_START, LOADING_FINISH
} from '../actions/const';

const initialState = {
  loading: false
};

export default function loadingReducers(state = initialState, action) {
  switch (action.type) {
    case LOADING_START:
      document.body.setAttribute('data-loader', String(true));
      return {...state, loading: true};
    case LOADING_FINISH:
      document.body.setAttribute('data-loader', String(false));
      return {...state, loading: false};
    default:
      return state;
  }
}