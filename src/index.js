import { is, curry, isEmpty, flatten, forEachObjIndexed } from "ramda";
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
    } else if (validator.name === "validateObjectKey") {
      const result = validator(value);
      if (!result.isValid) errors.push(result.errors);
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
 * Validates
 * Use validate with validateKeys
 * @deprecated
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

/**
 * Validates Object Keys
 */
export const validateKeys = validators => {
  const validateObjectKey = value => {
    let objectIsValid = true;
    let objectErrors = {};

    const errors = forEachObjIndexed((validate, key) => {
      const { isValid, errors } = validate(value[key]);
      if (!isValid) {
        objectIsValid = false;
        objectErrors[key] = errors;
      }
    })(validators);

    return { isValid: objectIsValid, errors: objectErrors };
  };
  return validateObjectKey;
};
