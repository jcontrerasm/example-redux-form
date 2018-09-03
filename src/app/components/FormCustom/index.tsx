import * as React from 'react';
import { Field } from 'redux-form';
import { FormWrapper, FormRow } from './index.style';
import { RenderField } from '@app/src/app/components/RenderField';

export const FormCustom = (props: any) => {
  const { onSubmit, handleSubmit, pristine, reset, submitting, initialValues } = props;
  console.log('------>', initialValues);
  return(
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <h2>Formulario con validaciones</h2>
      <FormRow>
        <div>
          <Field name="firstName" type="text" component={RenderField} label="Nombre: "/>
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
