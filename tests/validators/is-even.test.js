import { isEven } from "src/validators";

test("isEven return true if num is even", () => {
  expect(isEven(2)).toBe(true);
});

test("isEven return false if num is odd", () => {
  expect(isEven(1)).toBe(false);
});
