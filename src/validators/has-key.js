import { curry, contains, is, keys } from "ramda";

const hasKey = curry(
  (key, value) => is(Object, value) && contains(key, keys(value))
);
export default hasKey;
