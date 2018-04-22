import { is, curry, isEmpty, flatten } from "ramda";

/**
 * runValidators
 * @private
 */
const runValidators = (validators, value) => {
  let errors = [];
  validators.forEach(validator => {
    if (is(Array, validator)) {
      errors.push(runValidators(validator, value));
    } else if (validator.name === "condition") {
      validator(value);
    } else {
      if (validator(value) === false) errors.push(`${validator.name}Failed`);
    }
  });
  return errors;
};

/**
 * Validate
 */
export const validate = curry((validators, value) => {
  const errors = flatten(runValidators(validators, value));
  return { isValid: isEmpty(errors), errors };
});

export const conditions = (condition, validator) => {
  if (condition()) return validator;
};
