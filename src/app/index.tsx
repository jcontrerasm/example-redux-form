import * as React from 'react';
import { CounterContainerConnected } from '@app/src/app/containers/CounterContainer';
// import { FormContainer } from '@app/src/app/containers/FormContainer';
import { FormCustomContainerConnect } from '@app/src/app/containers/FormCustomContainer';

export class App extends React.Component<{}, {}> {
  render() {
    return(
      <React.Fragment>
        <CounterContainerConnected />
        {/* <FormContainer /> */}
        <FormCustomContainerConnect />
      </React.Fragment>
    );
  }
}
