import * as React from 'react';
import { CounterContainerConnected } from '@app/src/app/containers/CounterContainer';

export class App extends React.Component<{}, {}> {
  render() {
    return(
      <React.Fragment>
        <CounterContainerConnected />
      </React.Fragment>
    );
  }
}
