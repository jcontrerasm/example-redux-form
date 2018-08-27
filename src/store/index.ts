import { createStore } from 'redux';
import { reducers } from '@app/src/reducers';

const CONFIG_REDUX_EXTENSION = (
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const initialState = {};

export const store = createStore(
  reducers,
  initialState,
  CONFIG_REDUX_EXTENSION
);