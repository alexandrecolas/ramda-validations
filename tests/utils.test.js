import { getErrorMessage } from "src/utils";

describe("getErrorMessage", () => {
  test("return isNotValid when validator name is isValid", () => {
    expect(getErrorMessage("isValid")).toBe("isNotValid");
  });
  test("return hasNotError when validator name is hasError", () => {
    expect(getErrorMessage("hasError")).toBe("hasNotError");
  });
  test("return testFailed when validator name is test", () => {
    expect(getErrorMessage("test")).toBe("testFailed");
  });
});
