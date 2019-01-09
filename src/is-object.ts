import { is } from "ramda";

/**
 * Check that input value is an object
 * @param {any} input
 * @return {boolean}
 */
const isObject: { (input: any): boolean } = is(Object);

export default isObject;
