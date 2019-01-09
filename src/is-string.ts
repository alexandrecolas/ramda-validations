import { is } from "ramda";

const isString: { (input: any): boolean } = is(String);
export default isString;
