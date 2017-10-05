import { SET_CIRCLE_COORDINATES } from './const';

export default function setCircleCoordinates(top, right, bottom, left) {
  return {
    type: SET_CIRCLE_COORDINATES,
    top: top,
    right: right,
    bottom: bottom,
    left: left,
  }
}