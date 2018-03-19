import { isFloat } from "src/validators";

test("isFloat return true if value is an integer", () => {
  expect(isFloat(5.12)).toBe(true);
});

test("isFloat return true if value is not an integer", () => {
  expect(isFloat(10.0)).toBe(false);
  expect(isFloat(10)).toBe(false);
  expect(isFloat("Hello World")).toBe(false);
  expect(isFloat(true)).toBe(false);
  expect(isFloat([])).toBe(false);
});
