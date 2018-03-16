import { is, equals, curry, gt } from "ramda";

/**
 * isGreaterThan
 */
const isGreaterThan = curry((a, b) => {
  if (is(Date, a)) {
    return gt(b.getTime(), a.getTime());
  } else {
    return gt(b, a);
  }
  return true;
});
export default isGreaterThan;
