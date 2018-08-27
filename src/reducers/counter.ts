import { SET_COUNTER } from '@app/src/actions/counter';

export const counter = (state = 0, action) => {
  switch (action.type) {
    case SET_COUNTER:
      return action.payload;
    default:
      return state;
  }
};