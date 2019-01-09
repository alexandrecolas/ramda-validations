import { curry } from "ramda";

const isMultiple: { (a: number, b: number): boolean } = curry(
  (a: number, b: number) => a % b === 0
);

export default isMultiple;
