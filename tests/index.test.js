import { validate, when } from "src/index";
import {
  isInteger,
  isPositive,
  isString,
  isPresent,
  isObject,
  isTrue
} from "src/validators";

test("test", () => {
  const { isValid, errors } = validate(isInteger, isPositive)(1);
  expect(isValid).toBe(true);
  expect(errors).toHaveLength(0);
});

test("return errors object when invalid", () => {
  const { isValid, errors } = validate(isInteger, isPositive)("test");
  expect(isValid).toBe(false);
  expect(errors).toContainEqual("isNotInteger");
  expect(errors).toContainEqual("isNotPositive");
});

describe("with conditionals validations", () => {
  test("return errors when invalid", () => {
    const checkValidations = validate(
      when(() => true, [isInteger, isPositive])
    );

    const { isValid, errors } = checkValidations("test");

    expect(isValid).toBe(false);
    expect(errors).toContainEqual("isNotInteger");
    expect(errors).toContainEqual("isNotPositive");
  });
});

describe("with object", () => {
  test("return errors object when invalid", () => {
    const checkValidations = validate({
      title: [isString, isPresent],
      name: {
        first: [isString, isPresent],
        last: [isString, isPresent]
      },
      age: [isInteger, isPositive, isPresent]
    });

    const user = {
      title: "Master",
      name: {
        first: 24,
        last: "Kenobi"
      },
      age: 42
    };

    const result = checkValidations(user);

    expect(result.isValid).toBe(false);
    expect(result.keys.name.keys.first.errors).toContainEqual("isNotString");
  });
});

describe("with object and conditional", () => {
  test("return errors object when invalid", () => {
    const checkValidations = user => {
      return validate({
        title: [isString, isPresent],
        name: {
          first: [isString, isPresent],
          last: [isString, isPresent]
        },
        age: [isInteger, isPositive, isPresent],
        parentalConsent: when(() => user.age < 18, [isPresent, isTrue])
      })(user);
    };

    const user = {
      title: "Master",
      name: {
        first: "Obi-Wan",
        last: "Kenobi"
      },
      age: 17,
      parentalConsent: false
    };

    const result = checkValidations(user);

    expect(result.isValid).toBe(false);
    expect(result.keys.parentalConsent.errors).toContainEqual("isNotTrue");
  });
});
