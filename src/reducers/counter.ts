import { SET_COUNTER } from '@app/src/actions/counter';
import { Action } from '@app/src/actions/interface';

export const counter = (state = 0, action: Action) => {
  switch (action.type) {
    case SET_COUNTER:
      return action.payload;
    default:
      return state;
  }
};
