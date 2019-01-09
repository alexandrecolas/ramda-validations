import { curry } from "ramda";

/**
 * Checks that a value is a multiple of b value
 * @param {number} a
 * @param {number} b
 * @return {boolean}
 */
const isMultiple: { (a: number, b: number): boolean } = curry(
  (a: number, b: number) => a % b === 0
);

export default isMultiple;
