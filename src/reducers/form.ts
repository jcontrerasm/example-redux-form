import { SET_FORM } from '@app/src/actions/form';
import { Action } from '@app/src/actions/interface';

export const form = (state = {}, action: Action) => {
  switch (action.type) {
    case SET_FORM:
      return action.payload;
    default:
      return state;
  }
};
