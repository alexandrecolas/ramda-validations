import { curry, contains } from "ramda";

const isIn = curry((list, value) => contains(value, list));
export default isIn;
