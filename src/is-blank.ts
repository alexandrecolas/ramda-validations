import { isNil, isEmpty, trim, is } from "ramda";

/**
 * Checks that input is nil or empty
 * @param {any} input
 * @return {boolean}
 * @exemple
 *
 * isBlank(""); //=> true
 * isBlank(" "); //=> true
 * isBlank(null); //=> true
 * isBlank(undefined); //=> true
 * isBlank([]); //=> true
 * isBlank({}); //=> true
 * isBlank(0); //=> false
 * isBlank(false); //=> false
 */
const isBlank = (input: any): boolean => {
  input = is(String, input) ? trim(input) : input;
  return isNil(input) || isEmpty(input);
};

export default isBlank;
