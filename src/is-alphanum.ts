import { test } from "ramda";

/**
 * Check that characters of a string are alphanumerics
 * @param {string} input
 * @return {boolean}
 * @exemple
 *
 * isAlphanum("123456789") //=> true
 * isAlphanum("abcd") //=> true
 * isAlphanum("abcd123456789") //=> true
 * isAlphanum("abcd1234567,89") //=> false
 */
const isAlphanum: { (input: string): boolean } = test(/^[a-zA-Z0-9]*$/);
export default isAlphanum;
