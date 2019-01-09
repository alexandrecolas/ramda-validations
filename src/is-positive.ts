/**
 * Checks that input value is a positive number
 * @param {number} input
 * @return {boolean}
 */
const isPositive = (input: number): boolean =>
  Math.sign(input) === 1 ? true : false;

export default isPositive;
