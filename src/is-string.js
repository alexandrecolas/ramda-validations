import { is } from "ramda";

const isString = value => is(String, value);
export default isString;
