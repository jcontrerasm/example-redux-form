export const SET_COUNTER = 'SET_COUNTER';

type Action = {
  type: string;
  payload?: any;
}

// ActionCreator
export const setCounter = (counter: number): Action => ({
  type: SET_COUNTER,
  payload: counter
});
