import { isHash } from "src";

test("isHash return true if value is an object", () => {
  expect(isHash({})).toBe(true);
});

test("isHash return false if value is an array", () => {
  expect(isHash([])).toBe(false);
});

test("isHash return false if value is a function", () => {
  const func = () => "Hello World !";
  expect(isHash(func)).toBe(false);
});

test("isHash return false if value is not an hash", () => {
  expect(isHash(1)).toBe(false);
});
