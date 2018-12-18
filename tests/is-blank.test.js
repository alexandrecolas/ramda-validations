import { isBlank } from "src";

describe("isBlank", () => {
  test("return true if input is empty string", () => {
    expect(isBlank("")).toBe(true);
  });

  test("return true if input is string with only space", () => {
    expect(isBlank(" ")).toBe(true);
  });

  test("return true if input is null", () => {
    expect(isBlank(null)).toBe(true);
  });

  test("return true if input is undefined", () => {
    expect(isBlank(undefined)).toBe(true);
  });

  test("return true if input is an empty array", () => {
    expect(isBlank([])).toBe(true);
  });

  test("return true if input is an empty object", () => {
    expect(isBlank({})).toBe(true);
  });

  test("return false if input is 0", () => {
    expect(isBlank(0)).toBe(false);
  });

  test("return false if input is false boolean", () => {
    expect(isBlank(false)).toBe(false);
  });
});
