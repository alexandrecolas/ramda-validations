import { is } from "ramda";

/**
 * isObject
 */
const isObject = (value: any): boolean => is(Object, value);
export default isObject;
