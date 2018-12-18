import { curry, includes, map, has, __ } from "ramda";

/**
 * Check if input object has keys
 * @param {Array<string>} keys
 * @param {Object} input
 * @return {boolean}
 * @exemple
 *
 * hasKeys(["a", "b"], {a: 1, b: 2}) // => true
 * hasKeys(["a", "b"], {a: 1}) // => false
 */
const hasKeys: { (keys: Array<string>, input: Object): boolean } = curry(
  (keys, input) => !includes(false, map(has(__, input))(keys))
);

export default hasKeys;
