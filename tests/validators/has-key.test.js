import { hasKey } from "src/validators";

test("hasKey return true if value has key", () => {
  expect(hasKey("hello", { hello: "world" })).toBe(true);
});

test("hasKey return true if value has not key", () => {
  expect(hasKey("hello", { world: "hello" })).toBe(false);
});
