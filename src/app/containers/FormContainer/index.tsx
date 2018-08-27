import * as React from 'react';
import { Form } from '@app/src/app/components/Form';

interface IFormContainerProps {
}

export class FormContainer extends React.Component<IFormContainerProps, {}> {

  constructor(props: any) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values: any) {
    console.log(values);
  }

  render() {
    return(
      <Form onSubmit={this.onSubmit}/>
    );
  }
}
