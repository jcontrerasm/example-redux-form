import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormWrapper, FormRow } from './index.style';
import { RenderField } from '@app/src/app/components/RenderField';
import { schema } from '@app/src/app/components/FormCustom/schema';
import { validationConfig, getFieldValidation } from '@app/src/utils/configValidation';

const fields = getFieldValidation(schema);
const asyncValidate = validationConfig(schema);

export let FormCustom = (props: any) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return(
    <FormWrapper onSubmit={handleSubmit}>
      <h2>Formulario con validaciones</h2>
      <FormRow>
        <div>
          <Field name="firstName" type="text" component={RenderField} label="Nombre: "/>
        </div>
      </FormRow>
      <FormRow>
        <div>
          <Field name="salaryMin" type="text" component={RenderField} label="Salario minimo: "/>
        </div>
      </FormRow>
      <FormRow>
        <div>
          <Field name="salaryMax" type="text" component={RenderField} label="Salario máximo: "/>
        </div>
      </FormRow>
      <FormRow>
        <button type="submit">Enviar</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Limpiar
        </button>
      </FormRow>
    </FormWrapper>
  );
};

FormCustom = reduxForm({
  form: 'formCustom',
  fields,
  asyncValidate,
})(FormCustom);
