import { SET_AREA_SIZE } from './const';

export default function setAreaSize(width, height) {
  return {
    type: SET_AREA_SIZE,
    width: width,
    height: height
  }
}