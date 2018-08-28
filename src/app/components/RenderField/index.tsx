import * as React from 'react';

interface IRenderFieldProps {
  input: object,
  label: string,
  type: string,
  content: JSX.Element
  meta: {
    touched: boolean,
    error: boolean
  }
}

export const RenderField: React.SFC<IRenderFieldProps> = ({
  input,
  label,
  type,
  meta: {touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
