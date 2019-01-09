import { isNil, isEmpty } from "ramda";

const isPresent = (input: any) => !(isNil(input) || isEmpty(input));
export default isPresent;
