import {
  ADD_CLICK, DELETE_CLICK
} from '../actions/const';

const initialState = {
  clicks: 0
};

export default function clicksReducers(state = initialState, action) {
  let clicks;
  switch (action.type) {
    case ADD_CLICK:
      clicks = state.clicks + 1;
      return {...state, clicks: clicks};
    case DELETE_CLICK:
      clicks = state.clicks > 0 ? state.clicks - 1 : 0;
      return {...state, clicks: clicks};
    default:
      return state;
  }
}