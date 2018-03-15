import { isNil, isEmpty } from "ramda";

const isRequired = value => !(isNil(value) || isEmpty(value));
export default isRequired;
