import { isAlphanum } from "src";

describe("isAlphanum", () => {
  test("is true if only integer", () => {
    expect(isAlphanum("123456789")).toBe(true);
  });

  test("is true if only string", () => {
    expect(isAlphanum("abcd")).toBe(true);
  });

  test("is true if only string and integer", () => {
    expect(isAlphanum("abcd123456789")).toBe(true);
  });

  test("is false if not alphanum", () => {
    expect(isAlphanum("abcd1234567,89")).toBe(false);
  });
});
