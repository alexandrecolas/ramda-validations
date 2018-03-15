import { isRequired } from "src/validators";

describe("isRequired", () => {
  test("is true if values are present", () => {
    expect(isRequired("a")).toBe(true);
  });

  test("is true if 0", () => {
    expect(isRequired(0)).toBe(true);
  });

  test("is false if null", () => {
    expect(isRequired(null)).toBe(false);
  });

  test("is false if undefined", () => {
    expect(isRequired(undefined)).toBe(false);
  });

  test("is false if []", () => {
    expect(isRequired([])).toBe(false);
  });

  test("is false if {}", () => {
    expect(isRequired({})).toBe(false);
  });

  test("is false if empty", () => {
    expect(isRequired("")).toBe(false);
  });
});
