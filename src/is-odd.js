import { complement, both } from "ramda";
import isInteger from "./is-integer";
import isEven from "./is-even";

/**
 * Checks if input is odd number.
 * @param {number} input
 * @return {boolean}
 * @exemple
 *
 * isOdd(1) //=> true
 * isOdd(Infinity) //=> false
 * isOdd(2) //=> false
 * isOdd(1.1) //=> false
 */
const isOdd = both(isInteger, complement(isEven));
export default isOdd;
