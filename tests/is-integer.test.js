import { isInteger } from "src";

describe("isInteger", () => {
  test("return true if input value is an integer number", () => {
    expect(isInteger(5)).toBe(true);
  });

  test("return true if input value is an integer number", () => {
    expect(isInteger(10.0)).toBe(true);
  });

  test("return false if input value is a float number", () => {
    expect(isInteger(10.2)).toBe(false);
  });

  test("return false if input value is a string", () => {
    expect(isInteger("Hello World")).toBe(false);
  });

  test("return false if input value is a boolean", () => {
    expect(isInteger(true)).toBe(false);
  });

  test("return false if input value is an array", () => {
    expect(isInteger([])).toBe(false);
  });
});
