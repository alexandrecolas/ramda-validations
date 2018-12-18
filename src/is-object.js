import { is } from "ramda";

/**
 * isObject
 */
const isObject = value => is(Object, value);
export default isObject;
