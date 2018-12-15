import { isMultiple } from "src/validators";

describe("isMultiple", () => {
  test("return true if multiple ", () => {
    const test = Math.pow(3, 105);
    expect(isMultiple(test, 3)).toBe(true);
  });
});
