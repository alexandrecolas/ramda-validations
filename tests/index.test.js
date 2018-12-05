import { validate, conditions, validateKeys } from "src/index";
import {
  isInteger,
  isPositive,
  isString,
  isRequired,
  isObject
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
  test.only("return errors object when invalid", () => {
    // const userValidator = validates({
    //   title: validate(isString, isRequired),
    //   name: validates({
    //     first: validate(isString, isRequired),
    //     last: validate(isString, isRequired)
    //   }),
    //   age: validate(isInteger, isPositive, isRequired)
    // });

    const userValidator = validate(
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

    const { isValid, errors } = userValidator(user);
    expect(isValid).toBe(false);
    expect(errors[0].name[0].first).toContainEqual("isStringFailed");
  });
});
