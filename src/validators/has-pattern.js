import { curry, test } from "ramda";

/**
 * hasPattern
 */
const hasPattern = curry((pattern, value) => test(pattern, value));
export default hasPattern;
