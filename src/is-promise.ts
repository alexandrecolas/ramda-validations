import { is } from "ramda";

/**
 * Checks that input value is a promise
 * @param {number} input
 * @return {boolean}
 *
 * const promise = new Promise((resolve, reject) => {});
 * isPromise(promise); //=> true
 */
const isPromise: { (input: any): boolean } = is(Promise);

export default isPromise;
