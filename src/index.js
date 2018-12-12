import { is, curry, isEmpty, flatten, forEachObjIndexed, isNil } from "ramda";
import { isHash } from "./validators";
import { getErrorMessage } from "./utils";

/**
 * Validate
 */
export const validate = (...validators) => value => {
  let result = { errors: [], isValid: true };

  // For all validators of valide, check
  validators.forEach(validator => {
    if (is(Array, validator)) {
      result = validate(...validator)(value);
    } else if (isHash(validator)) {
      result = validateObject(validator)(value);
    } else if (isNil(validator)) {
      throw "Validator need to be a function";
    } else if (validator.name === "validateObjectKey") {
      result = validator(value);
    } else if (validator.name === "validateCondition") {
      result = validator()(value);
    } else {
      if (validator(value) === false) {
        result.errors.push(getErrorMessage(validator.name));
        result.isValid = false;
      }
    }
  });

  return result;
};

/**
 * Validates Object Keys
 */
export const validateObject = objectValidators => {
  const validateObjectKey = value => {
    if (!isHash(objectValidators)) {
      return { isValid: false, errors: ["isHashFailed"] };
    }

    let objectKeys = {};
    let isHashValid = true;
    // For Each key
    forEachObjIndexed((validateForKey, key) => {
      const result = validate(validateForKey)(value[key]);
      if (!result.isValid) {
        objectKeys[key] = result;
        isHashValid = false;
      }
    })(objectValidators);

    if (!isHashValid) {
      return {
        keys: objectKeys,
        isValid: isHashValid,
        errors: ["validateKeysFailed"]
      };
    } else {
      return { errors: [], isValid: true };
    }
  };
  return validateObjectKey;
};

export const when = (condition, validator) => {
  let validateCondition = () =>
    is(Array, validator) ? validate(...validator) : validator;
  return condition() ? validateCondition : () => true;
};
