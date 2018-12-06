import { is, curry, isEmpty, flatten, forEachObjIndexed, isNil } from "ramda";
import purdy from "purdy";

/**
 * Validate
 */
export const validate = (...validators) => value => {
  let result = { errors: [], isValid: true };

  // For all validators of valide, check
  validators.forEach(validator => {
    if (isNil(validator)) {
      throw "Validator need to be a function";
    } else if (validator.name === "validateObjectKey") {
      const { keys, isValid } = validator(value);
      if (!isValid) {
        result.errors.push("validateKeysFailed");
        result.isValid = false;
        result.keys = keys;
      }
    } else if (validator.name === "validateCondition") {
      result = validator()(value);
    } else {
      if (validator(value) === false) {
        result.errors.push(`${validator.name}Failed`);
        result.isValid = false;
      }
    }
  });

  return result;
};

/**
 * Validates Object Keys
 */
export const validateKeys = objectValidators => {
  const validateObjectKey = value => {
    let objectKeys = {};
    let isObjectValid = true;
    // For Each key
    forEachObjIndexed((validateForKey, key) => {
      const result = validateForKey(value[key]);
      if (!result.isValid) {
        objectKeys[key] = result;
        isObjectValid = false;
      }
    })(objectValidators);

    return { keys: objectKeys, isValid: isObjectValid };
  };
  return validateObjectKey;
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
  let validateCondition = () =>
    is(Array, validator) ? validate(...validator) : validator;

  return condition() ? validateCondition : () => true;
};
