import { has } from "ramda";

/**
 * Check if input objject has key
 * @param {string} key
 * @param {Object} input
 * @return {boolean}
 * @deprecated Use ramda `has` instead
 * @exemple
 *
 * hasKey("a", {a: 1}) // => true
 * hasKey("b", {a: 1}) // => false
 */
const hasKey: { (key: string, input: Object): boolean } = has;

export default hasKey;
