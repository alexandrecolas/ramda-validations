import { isOdd } from "src/validators";

test("isOdd return true if num is odd", () => {
  expect(isOdd(1)).toBe(true);
});

test("isOdd return false if num is even", () => {
  expect(isOdd(2)).toBe(false);
});
