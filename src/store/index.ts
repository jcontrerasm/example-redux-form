import { createStore } from 'redux';
import { reducers } from '@app/src/reducers';

const CONFIG_REDUX_EXTENSION = (
  window.devToolsExtension && window.devToolsExtension()
);

const initialState = {};

export const store = createStore(
  reducers,
  initialState,
  CONFIG_REDUX_EXTENSION
);
