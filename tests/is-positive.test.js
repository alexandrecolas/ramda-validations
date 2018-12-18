import { isPositive } from "src";

test("isPositive return true if num is positive", () => {
  expect(isPositive(1)).toBe(true);
});

test("isPositive return false if num is negative", () => {
  expect(isPositive(-1)).toBe(false);
});
