import isInteger from "./is-integer";

/**
 * Checks that input is even number.
 * @param {number} input
 * @return {boolean}
 * @exemple
 *
 * isEven(2) //=> true
 * isEven(Infinity) //=> false
 * isEven(1) //=> false
 * isEven(2.2) //=> false
 */
const isEven = (input: number): boolean => {
  return isInteger(input) && (input % 2 === 1 ? false : true);
};

export default isEven;
