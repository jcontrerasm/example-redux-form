import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormWrapper, FormRow, Label } from './index.style';

export let Form = (props: any) => {

  const { handleSubmit, pristine, reset, submitting } = props;

  return(
    <FormWrapper onSubmit={handleSubmit}>
      <h2>Formulario</h2>
      <FormRow>
        <Label htmlFor="firstName">Nombre: </Label>
        <Field name="firstName" component="input" type="text" />
      </FormRow>
      <FormRow>
        <Label>Género: </Label>
        <span>
          <label>
            <Field name="sex" component="input" type="radio" value="male"/>
            <span>Masculino</span>
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female"/>
            <span>Femenino</span>
          </label>
        </span>
      </FormRow>
      <FormRow>
        <Label htmlFor="country">País: </Label>
        <Field name="country" component="select">
          <option value="">Seleccionar</option>
          <option value="peru">Perú</option>
          <option value="argentina">Argentina</option>
          <option value="colombia">Colombia</option>
        </Field>
      </FormRow>
      <FormRow>
        <Label>Decripción: </Label>
        <Field name="description" component="textarea" />
      </FormRow>
      <FormRow>
        <Field name="commitment" id="commitment" component="input" type="checkbox"/>
        <Label htmlFor="commitment">Acepto los Términos y condiciones</Label>
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

Form = reduxForm({
  form: 'mainForm'
})(Form);
