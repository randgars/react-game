import { ADD_CLICK, DELETE_CLICK } from './const';

export function addClick() {
  return {
    type: ADD_CLICK
  }
}
export function deleteClick() {
  return {
    type: DELETE_CLICK
  }
}