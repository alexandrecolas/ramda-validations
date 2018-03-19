import { is } from "ramda";

const isInteger = value => is(Number, value) && value % 1 === 0;
export default isInteger;
