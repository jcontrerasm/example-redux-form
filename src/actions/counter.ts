import { Action } from './interface';

export const SET_COUNTER = 'SET_COUNTER';

// ActionCreator
export const setCounter = (counter: number): Action => ({
  type: SET_COUNTER,
  payload: counter
});
