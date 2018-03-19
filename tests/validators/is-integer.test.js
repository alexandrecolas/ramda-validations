import { isInteger } from "src/validators";

test("isInteger return true if value is an integer", () => {
  expect(isInteger(5)).toBe(true);
});

test("isInteger return true if value is not an integer", () => {
  expect(isInteger(10.123)).toBe(false);
  expect(isInteger("Hello World")).toBe(false);
  expect(isInteger(true)).toBe(false);
  expect(isInteger([])).toBe(false);
});
