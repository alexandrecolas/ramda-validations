import { isTrue } from "src/validators";

test("isTrue return true if value is true", () => {
  expect(isTrue(true)).toBe(true);
});

test("isTrue return false if value is false", () => {
  expect(isTrue(false)).toBe(false);
});

test("isTrue return false if value is not boolean", () => {
  expect(isTrue("hello world")).toBe(false);
  expect(isTrue(123456)).toBe(false);
  expect(isTrue(["Hello", "World"])).toBe(false);
});
