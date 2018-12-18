import { isInRange } from "src";

test("isInRange return true if value is in range", () => {
  const from = 1;
  const to = 8;
  expect(isInRange(from, to, 5)).toBe(true);
});

test("isInRange return true if value is in range", () => {
  const from = 1;
  const to = 8;
  expect(isInRange(from, to, 10)).toBe(false);
});
