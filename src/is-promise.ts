import { is } from "ramda";

/**
 * isPromise
 */
const isPromise: { (input: any): boolean } = is(Promise);
export default isPromise;
