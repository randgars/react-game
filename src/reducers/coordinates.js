import {
  SET_CURSOR_COORDINATES,
  SET_CIRCLE_COORDINATES,
  SET_AREA_SIZE
} from '../actions/const';

const initialState = {
  cursor: null,
  circle: null,
  area: null
};

export default function coordinatesReducers(state = initialState, action) {
  switch (action.type) {
    case SET_CURSOR_COORDINATES:
      return {...state, cursor: { x: action.x , y: action.y }};
    case SET_CIRCLE_COORDINATES:
      return {...state, circle: { top: action.top, right: action.right, bottom: action.bottom, left: action.left }};
    case SET_AREA_SIZE:
      return {...state, area: { width: action.width, height: action.height }};
    default:
      return state;
  }
}