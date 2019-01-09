/**
 * Checks that input value is an integer number
 * @param {any} input
 * @return {boolean}
 *
 * isInteger(10) //=> true
 * isInteger(10.0) //=> true
 * isInteger(5.12) //=> false
 * isInteger("Hello World") //=> false
 * isInteger(true) //=> false
 * isInteger([]) //=> false
 */
const isInteger: { (input: any): boolean } = Number.isInteger;

export default isInteger;
