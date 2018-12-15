import { isEven } from "src/validators";

describe("isEven", () => {
  test("return true if input is even", () => {
    expect(isEven(2)).toBe(true);
  });

  test("return false if input is Infinity", () => {
    expect(isEven(Infinity)).toBe(false);
  });

  test("return false if num is odd", () => {
    expect(isEven(1)).toBe(false);
  });

  test("return false if input is not integer", () => {
    expect(isEven(2.2)).toBe(false);
  });
});
