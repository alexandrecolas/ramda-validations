import { isIn } from "src/validators";

describe("isIn", () => {
  test("is true if array contains value", () => {
    expect(isIn(["a", "b", "c"], "a")).toBe(true);
  });

  test("is false if array doesn't contains value", () => {
    expect(isIn(["a", "b", "c"], "d")).toBe(false);
  });
});
