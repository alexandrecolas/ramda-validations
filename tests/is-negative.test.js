import { isNegative } from "src";

test("isNegative return true if num is negative", () => {
  expect(isNegative(-1)).toBe(true);
});

test("isNegative return false if num is positive", () => {
  expect(isNegative(1)).toBe(false);
});
