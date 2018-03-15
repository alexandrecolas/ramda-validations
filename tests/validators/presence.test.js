import { presence } from "src/validators";

test("presence return true if presence", () => {
  expect(presence(true, "test")).toBe(true);
});

test("presence return false if empty", () => {
  expect(presence(true, "")).toEqual("empty");
});

test("presence return false if undefined", () => {
  expect(presence(true)).toEqual("empty");
});

test("presence return false if ' '", () => {
  expect(presence(true, " ")).toEqual("empty");
});
