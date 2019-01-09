import { is } from "ramda";

/**
 * Checks that input value is a string value
 * @param {number} input
 * @return {boolean}
 *
 * isString("hello") //=> true
 * isString(0) //=> false
 */
const isString: { (input: any): boolean } = is(String);

export default isString;
