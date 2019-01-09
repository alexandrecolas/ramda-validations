import { equals } from "ramda";

/**
 * Checks that input value is equals true
 * @param {any} input
 * @return {boolean}
 *
 * isTrue(true) //=> true
 * isTrue(Boolean(true)) //=> true
 * isTrue(false) //=> false
 * isTrue(Boolean(false)) //=> false
 * isTrue(1) //=> false
 * isTrue("hello world") //=> false
 * isTrue(123456) //=> false
 * isTrue(["Hello", "World"]) //=> false
 */
const isTrue: { (input: any): boolean } = equals(true);

export default isTrue;
