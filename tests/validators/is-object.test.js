import { isObject } from "src/validators";

test("isObject return true if value is an object", () => {
  expect(isObject({})).toBe(true);
});

test("isObject return false if value is not an object", () => {
  expect(isObject(1)).toBe(false);
});
