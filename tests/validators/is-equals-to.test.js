import { isEqualsTo } from "src/validators";

describe("isEqualsTo", () => {
  test("is true if nums equals", () => {
    expect(isEqualsTo(2, 2)).toBe(true);
  });

  test("is true if strings equals", () => {
    expect(isEqualsTo("2", "2")).toBe(true);
  });

  test("is false if not equals", () => {
    expect(isEqualsTo("3", 2)).toBe(false);
  });
});
