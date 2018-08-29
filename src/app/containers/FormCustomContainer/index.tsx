import * as React from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValues } from 'redux-form';
import { FormCustom } from '@app/src/app/components/FormCustom';
import { schema } from '@app/src/app/containers/FormCustomContainer/schema';
import { validationConfig, getFieldValidation } from '@app/src/utils/configValidation';
import { setForm } from '@app/src/actions/form';

const fields = getFieldValidation(schema);
const asyncValidate = validationConfig(schema);

interface IFormContainerProps {
  handleSubmit(): any;
  pristine: any;
  reset: any;
  submitting: any;
  setFormData(values: object): void;
}

export class FormCustomContainer extends React.Component<IFormContainerProps, {}> {

  constructor(props: any) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values: any) {
    console.log('values', values);
  }

  componentDidMount() {
    const data = {
      firstName: 'Juan Carlos',
      salaryMin: 123,
      salaryMax: ''
    }
    this.props.setFormData(data);
  }

  render() {
    console.log(this.props);
    return(
      <FormCustom
        onSubmit={this.onSubmit}
        handleSubmit={this.props.handleSubmit}
        pristine={this.props.pristine}
        reset={this.props.reset}
        submitting={this.props.submitting}
      />
    );
  }
}

export let FormCustomContainerConnect = reduxForm({
  form: 'formCustom',
  fields,
  asyncValidate,
  enableReinitialize: true
})(FormCustomContainer);

const mapStateToProps = ({ formData }) => ({ initialValues: formData });

const mapDispatchToProps = (dispatch: any) => ({
  setFormData: (value: object) => dispatch(setForm(value))
});

FormCustomContainerConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormCustomContainerConnect);
