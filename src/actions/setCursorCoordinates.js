import { SET_CURSOR_COORDINATES } from './const';

export default function setCursorCoordinates(x, y) {
  return {
    type: SET_CURSOR_COORDINATES,
    x: x,
    y: y
  }
}