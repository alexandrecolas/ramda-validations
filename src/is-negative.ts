/**
 * Checks that input value is a negative number
 * @param {number} input
 * @return {boolean}
 */
const isNegative = (input: number): boolean =>
  Math.sign(input) === -1 ? true : false;

export default isNegative;
