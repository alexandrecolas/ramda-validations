import { reject, isNil, isEmpty, flatten } from "ramda";
import { isBlank } from "./validators";

export const compact = reject(isBlank);

export const convertDotStringToObject = (key, value) => {
  let obj;
  if (key.includes(".")) {
    let arr = key.split(".");
    obj = value;
    for (let i = arr.length - 1; i >= 0; i--) {
      obj = { [arr[i]]: obj };
    }
  } else {
    obj = { [key]: value };
  }
  return obj;
};
