import { complement, equals } from "ramda";

const isOtherThan = complement(equals);
export default isOtherThan;
