import { is } from "ramda";

const isFloat = value => is(Number, value) && value % 1 !== 0;
export default isFloat;
