import { is } from "ramda";

/**
 * Checks that input value is an object
 * @param {any} input
 * @return {boolean}
 *
 * isObject({}) //=> true
 * isObject({ hello: "World" }) //=> true
 * isObject([]) //=> true
 * isObject(Function) //=> true
 * isObject(1) //=> false
 */
const isObject: { (input: any): boolean } = is(Object);

export default isObject;
