import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '@app/src/store';
import { App } from '@app/src/app';
import './index.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
