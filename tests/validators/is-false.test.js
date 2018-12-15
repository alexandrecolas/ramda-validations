import { isFalse } from "src/validators";

test("isFalse return true if value is false", () => {
  expect(isFalse(false)).toBe(true);
});

test("isFalse return true if value is false", () => {
  expect(isFalse(Boolean(false))).toBe(true);
});

test("isFalse return false if value is true", () => {
  expect(isFalse(true)).toBe(false);
});

test("isFalse return true if value is false", () => {
  expect(isFalse(Boolean(true))).toBe(false);
});

test("isFalse return false if value is true", () => {
  expect(isFalse(0)).toBe(false);
});

test("isFalse return false if value is not boolean", () => {
  expect(isFalse("hello world")).toBe(false);
  expect(isFalse(123456)).toBe(false);
  expect(isFalse(["Hello", "World"])).toBe(false);
});
