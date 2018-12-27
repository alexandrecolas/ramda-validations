import { isPromise } from "src";

test("isPromise return true if value is a promise", () => {
  const promise = new Promise((resolve, reject) => {});
  expect(isPromise(promise)).toBe(true);
});

test("isPromise return false if value is an object", () => {
  expect(isPromise({})).toBe(false);
});

test("isPromise return false if value is an array", () => {
  expect(isPromise([])).toBe(false);
});

test("isPromise return false if value is a function", () => {
  const func = () => "Hello World !";
  expect(isPromise(func)).toBe(false);
});

test("isPromise return false if value is not an object", () => {
  expect(isPromise(1)).toBe(false);
});
