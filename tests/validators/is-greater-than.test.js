import { isGreaterThan } from "src/validators";

describe("isGreaterThan", () => {
  describe("when date", () => {
    test("is true if array contains value", () => {
      const a = new Date("2013-05-23");
      const b = new Date();
      expect(isGreaterThan(a, b)).toBe(true);
    });
  });

  describe("when number", () => {
    test("true if is greater than", () => {
      const a = 12;
      const b = 13;
      expect(isGreaterThan(a, b)).toBe(true);
    });
  });

  describe("when float", () => {
    test("is true if array contains value", () => {
      const a = 12.456;
      const b = 13.5465;
      expect(isGreaterThan(a, b)).toBe(true);
    });
  });
});
