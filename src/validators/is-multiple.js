import { curry } from "ramda";

const isMultiple = curry((a, b) => a % b === 0);

export default isMultiple;
