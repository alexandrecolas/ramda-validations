import { isNil, isEmpty } from "ramda";

/**
 * Checks that input value is present
 * @param {number} input
 * @return {boolean}
 *
 * isPresent("Hello"); //=> true
 * isPresent([]); //=> false
 * isPresent({}); //=> false
 * isPresent(""); //=> false
 * isPresent(null); //=> false
 * isPresent(undefined); //=> false
 */
const isPresent = (input: any): boolean => !(isNil(input) || isEmpty(input));

export default isPresent;
