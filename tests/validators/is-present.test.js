import { isPresent } from "src/validators";

describe("isPresent", () => {
  test("is true if values are present", () => {
    expect(isPresent("a")).toBe(true);
  });

  test("is true if 0", () => {
    expect(isPresent(0)).toBe(true);
  });

  test("is false if null", () => {
    expect(isPresent(null)).toBe(false);
  });

  test("is false if undefined", () => {
    expect(isPresent(undefined)).toBe(false);
  });

  test("is false if []", () => {
    expect(isPresent([])).toBe(false);
  });

  test("is false if {}", () => {
    expect(isPresent({})).toBe(false);
  });

  test("is false if empty", () => {
    expect(isPresent("")).toBe(false);
  });
});
