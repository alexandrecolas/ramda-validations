import { isOdd } from "src/validators";

describe("isOdd", () => {
  test("return true if num is odd", () => {
    expect(isOdd(1)).toBe(true);
  });

  test("return false if input is Infinity", () => {
    expect(isOdd(Infinity)).toBe(false);
  });

  test("return false if num is even", () => {
    expect(isOdd(2)).toBe(false);
  });

  test("return false if input is not integer", () => {
    expect(isOdd(1.1)).toBe(false);
  });
});
