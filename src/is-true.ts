import { equals } from "ramda";

/**
 * Checks that input value is equals true
 * @param {any} input
 * @return {boolean}
 */
const isTrue: { (input: any): boolean } = equals(true);

export default isTrue;
