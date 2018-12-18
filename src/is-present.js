import { isNil, isEmpty } from "ramda";

const isPresent = value => !(isNil(value) || isEmpty(value));
export default isPresent;
