import { curry, range, includes } from "ramda";

/**
 * Checks if input value is between from and to value
 * @param {number} from
 * @param {number} to
 * @param {number} input
 * @return {boolean}
 * @exemple
 *
 * isInRange(1, 8, 5) //=> true
 * isInRange(1, 8, 10) //=> false
 */
const isInRange: { (from: number, to: number, input: number): booean } = curry(
  (from, to, input) => includes(input, range(from, to))
);
export default isInRange;
