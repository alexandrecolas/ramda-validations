import { equals } from "ramda";

/**
 * Checks that input value is false
 * @param {any} input
 * @return {boolean}
 * @exemple
 *
 * isFalse(false) //=> true
 * isFalse(Boolean(false)) //=> true
 * isFalse(true) //=> false
 * isFalse(Boolean(true)) //=> false
 * isFalse(0) //=> false
 * isFalse("hello world") //=> false
 * isFalse(123456) //=> false
 * isFalse(["Hello", "World"]) //=> false
 */
const isFalse: { (input: any): boolean } = equals(false);

export default isFalse;
