import { both, complement } from "ramda";
import isFinite from "./is-finite";
import isInteger from "./is-integer";

/**
 * Checks if input value is a float number
 * @param {any} input
 * @return {boolean}
 * @exemple
 *
 * isFloat(5.12) //=> true
 * isFloat(10.0) //=> false
 * isFloat(10) //=> false
 * isFloat("Hello World") //=> false
 * isFloat(true) //=> false
 * isFloat([]) //=> false
 */
const isFloat: (input: any) => boolean = both(isFinite, complement(isInteger));

export default isFloat;
