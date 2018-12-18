import { isOtherThan } from "src";

describe("isOtherThan", () => {
  test("is true if values aren't equals", () => {
    expect(isOtherThan("b", "a")).toBe(true);
  });

  test("is false if values are equals", () => {
    expect(isOtherThan("d", "d")).toBe(false);
  });
});
