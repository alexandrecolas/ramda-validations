import { isObject } from "src";

test("isObject return true if value is an object", () => {
  expect(isObject({})).toBe(true);
});

test("isObject return true if value is an object with props", () => {
  expect(isObject({ hello: "world" })).toBe(true);
});

test("isObject return true if value is an array", () => {
  expect(isObject([])).toBe(true);
});

test("isObject return true if value is a function", () => {
  const func = () => "Hello World !";
  expect(isObject(func)).toBe(true);
});

test("isObject return true if value is a function", () => {
  expect(isObject(Function)).toBe(true);
});

test("isObject return false if value is not an object", () => {
  expect(isObject(1)).toBe(false);
});
