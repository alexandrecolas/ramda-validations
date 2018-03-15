import { curry, equals } from "ramda";

const isOtherThan = curry((a, b) => !equals(a, b));
export default isOtherThan;
