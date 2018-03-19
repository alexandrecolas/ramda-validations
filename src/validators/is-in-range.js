import { curry, range, contains } from "ramda";

const isInRange = curry((from, to, value) => contains(value, range(from, to)));
export default isInRange;
