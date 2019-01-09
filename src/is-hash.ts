/**
 * Checks that input value is an object hash
 * @param {any} input
 * @return {boolean}
 * @exemple
 *
 * isHash({}) //=> true
 * isHash([]) //=> false
 * isHash(func) //=> false
 * isHash(1) //=> false
 */
const isHash = (input: any): boolean => input.constructor == Object;

export default isHash;
