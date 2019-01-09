import { complement, equals } from "ramda";

/**
 * Checks that a value is other than b value.
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 * @exemple
 *
 * isOtherThan(1, 2) //=> true
 * isOtherThan([1, 2], [1, 2]) //=> false
 */
const isOtherThan: { (a: any, b: any): boolean } = complement(equals);

export default isOtherThan;
