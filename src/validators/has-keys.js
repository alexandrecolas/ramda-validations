import { curry, contains, is } from "ramda";
import hasKey from "./has-key";

const hasKeys = curry((keys = [], value) => {
  if (!is(Object, value)) return false;
  return !contains(false, keys.map(key => hasKey(key, value)));
});
export default hasKeys;
