import { validate, conditions, validateKeys } from "src/index";
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
      conditions(() => true, [isInteger, isPositive])
    );

    const { isValid, errors } = checkValidations("test");

    expect(isValid).toBe(false);
    expect(errors).toContainEqual("isIntegerFailed");
    expect(errors).toContainEqual("isPositiveFailed");
  });
});

describe("with object", () => {
  test("return errors object when invalid", () => {
    const checkValidations = validate(
      isObject,
      validateKeys({
        title: validate(isString, isRequired),
        name: validate(
          isObject,
          validateKeys({
            first: validate(isString, isRequired),
            last: validate(isString, isRequired)
          })
        ),
        age: validate(isInteger, isPositive, isRequired)
      })
    );

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
      return validate(
        isObject,
        validateKeys({
          title: validate(isString, isRequired),
          name: validate(
            isObject,
            validateKeys({
              first: validate(isString, isRequired),
              last: validate(isString, isRequired)
            })
          ),
          age: validate(isInteger, isPositive, isRequired),
          parentalConsent: validate(
            conditions(() => user.age < 18, [isRequired, isTrue])
          )
        })
      )(user);
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
