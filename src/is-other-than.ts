import { complement, equals } from "ramda";

const isOtherThan: { (a: any, b: any): boolean } = complement(equals);
export default isOtherThan;
