import * as Yup from 'yup';
import { ERROR_MESSAGES, REGEX_VALIDATION } from '@app/src/utils/configValidation';

export const schema = Yup.object().shape({
  firstName: Yup.string()
    .matches(REGEX_VALIDATION.string, ERROR_MESSAGES.common)
    .required(ERROR_MESSAGES.required),
  salaryMin: Yup.string()
    .max(2, ERROR_MESSAGES.max(2))
    .matches(REGEX_VALIDATION.number, ERROR_MESSAGES.integer),
  salaryMax: Yup.string()
    .max(2, ERROR_MESSAGES.max(2))
    .matches(REGEX_VALIDATION.number, ERROR_MESSAGES.integer)
    .when(['salaryMin'], (value: any, schema: any) => (
      (value && schema.required(ERROR_MESSAGES.required))
    )),
});
