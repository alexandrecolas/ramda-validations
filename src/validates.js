import purdy from "purdy";
import { curry, mergeAll, compose, mergeWith, concat } from "ramda";
import { validate } from "./index";
import { compact, convertDotStringToObject } from "./utils";

export const validates = curry((props, validators, value) => {
  let result = {};
  props.forEach(prop => {
    const { isValid, errors } = validate(validators, getValue(prop, value));
    if (!isValid) {
      result = mergeWith(
        concat,
        result,
        convertDotStringToObject(prop, errors)
      );
    }
  });
  return result;
});

const getValue = (key, obj) => {
  if (key.includes(".")) {
    let arr = key.split(".");
    while (arr.length && (obj = obj[arr.shift()]));
    return obj;
  } else {
    return obj[key];
  }
};

export const checkValidations = curry((validatesList, value) => {
  const result = validatesList.map(validateFunc => validateFunc(value));
  return compose(mergeAll, compact)(result);
});
