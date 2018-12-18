import { hasKeys } from "src";

test("hasKeys return true if value object contains keys", () => {
  expect(
    hasKeys(["zeus", "ouranos"], { zeus: "Zeus", ouranos: "Ouranos" })
  ).toBe(true);
});

test("hasKeys return true if value object not contains one or several keys", () => {
  expect(hasKeys(["zeus", "ouranos"], { zeus: "Zeus" })).toBe(false);
});
