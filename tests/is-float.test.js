import { isFloat } from "src";

describe("isFloat", () => {
  test("return true if input value is a float number", () => {
    expect(isFloat(5.12)).toBe(true);
  });

  test("return false if input value is an integer number", () => {
    expect(isFloat(10.0)).toBe(false);
  });

  test("return false if input value is an integer number", () => {
    expect(isFloat(10)).toBe(false);
  });

  test("return false if input value is a string", () => {
    expect(isFloat("Hello World")).toBe(false);
  });

  test("return false if input value is a boolean", () => {
    expect(isFloat(true)).toBe(false);
  });

  test("return false if input value is an array", () => {
    expect(isFloat([])).toBe(false);
  });
});
