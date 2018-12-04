import { is, curry, isEmpty, flatten, mapObjIndexed } from "ramda";
import purdy from "purdy";

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
export const validate = (...validators) => value => {
  const errors = flatten(runValidators(validators, value));
  return { isValid: isEmpty(errors), errors };
};

/**
 * Validates Object
 */
export const validates = curry((validators, value) => {
  let objectIsValid = true;

  const errors = mapObjIndexed((validate, key) => {
    const { isValid, errors } = validate(value[key]);
    !isValid && (objectIsValid = false);
    return errors;
  })(validators);

  return { isValid: objectIsValid, errors };
});

export const conditions = (condition, validator) => {
  if (condition()) return validator;
};
