import { LOADING_START, LOADING_FINISH } from './const';

export function loadingStart() {
  return {
    type: LOADING_START
  }
}
export function loadingFinish() {
  return {
    type: LOADING_FINISH
  }
}