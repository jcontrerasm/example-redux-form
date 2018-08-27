import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { counter } from './counter';

export const reducers = combineReducers ({
  form: formReducer,
  counter
});
