import { validate, when } from "src/index";
import {
  isInteger,
  isPositive,
  isString,
  isRequired,
  isObject,
  isTrue
} from "src/validators";
import purdy from "purdy";

test("test", () => {
  const { isValid, errors } = validate(isInteger, isPositive)(1);
  expect(isValid).toBe(true);
  expect(errors).toHaveLength(0);
});

test("return errors object when invalid", () => {
  const { isValid, errors } = validate(isInteger, isPositive)("test");
  expect(isValid).toBe(false);
  expect(errors).toContainEqual("isIntegerFailed");
  expect(errors).toContainEqual("isPositiveFailed");
});

describe("with conditionals validations", () => {
  test("return errors when invalid", () => {
    const checkValidations = validate(
      when(() => true, [isInteger, isPositive])
    );

    const { isValid, errors } = checkValidations("test");

    expect(isValid).toBe(false);
    expect(errors).toContainEqual("isIntegerFailed");
    expect(errors).toContainEqual("isPositiveFailed");
  });
});

describe("with object", () => {
  test("return errors object when invalid", () => {
    const checkValidations = validate({
      title: [isString, isRequired],
      name: {
        first: [isString, isRequired],
        last: [isString, isRequired]
      },
      age: [isInteger, isPositive, isRequired]
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
    expect(result.keys.name.keys.first.errors).toContainEqual("isStringFailed");
  });
});

describe("with object and conditional", () => {
  test("return errors object when invalid", () => {
    const checkValidations = user => {
      return validate({
        title: [isString, isRequired],
        name: {
          first: [isString, isRequired],
          last: [isString, isRequired]
        },
        age: [isInteger, isPositive, isRequired],
        parentalConsent: when(() => user.age < 18, [isRequired, isTrue])
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
    expect(result.keys.parentalConsent.errors).toContainEqual("isTrueFailed");
  });
});
