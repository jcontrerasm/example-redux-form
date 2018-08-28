import * as React from 'react';
import { FormCustom } from '@app/src/app/components/FormCustom';

interface IFormContainerProps {
}

export class FormCustomContainer extends React.Component<IFormContainerProps, {}> {

  constructor(props: any) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values: any) {
    console.log(values);
  }

  render() {
    return(
      <FormCustom onSubmit={this.onSubmit}/>
    );
  }
}
