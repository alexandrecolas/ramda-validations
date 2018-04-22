import { isNil, isEmpty } from "ramda";

const isBlank = value => isNil(value) || isEmpty(value);
export default isBlank;
