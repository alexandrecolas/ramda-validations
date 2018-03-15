import { test } from "ramda";

/**
 * isAlphanum
 */
const isAlphanum = test(/^[a-zA-Z0-9]*$/);
export default isAlphanum;
