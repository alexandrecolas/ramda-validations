import { curry, includes, map, has, __ } from "ramda";

/**
 * Checks that input object has keys
 * @param {Array<string>} keys
 * @param {Object} input
 * @return {boolean}
 * @exemple
 *
 * hasKeys(["a", "b"], {a: 1, b: 2}) // => true
 * hasKeys(["a", "b"], {a: 1}) // => false
 */
const hasKeys: { (keys: string[], input: object): boolean } = curry(
  (keys: string[], input: object) => !includes(false, map(has(__, input))(keys))
);

export default hasKeys;
