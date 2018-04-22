import { validate, conditions } from "src/index";
import { isInteger, isPositive } from "src/validators";

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

describe("object with conditionals validations", () => {
  test("return errors object when invalid", () => {
    const checkValidations = validate(
      conditions(() => true, [isInteger, isPositive])
    );
    const { isValid, errors } = checkValidations("test");

    expect(isValid).toBe(false);
    expect(errors).toContainEqual("isIntegerFailed");
    expect(errors).toContainEqual("isPositiveFailed");
  });
});

describe.only("complex object", () => {
  test("return errors object when invalid", () => {
    const userValidations = {
      title: validate(isString, isRequired);
      firstname: validate(isString, isRequired);
      lastname: validate(isString, isRequired);
      age: validate(isNumber, isPositive, isRequired);
    }

    const checkValidations = validate(
      conditions(() => true, [isInteger, isPositive])
    );

    const { isValid, errors } = checkValidations("test");

    expect(isValid).toBe(false);
    expect(errors).toContainEqual("isIntegerFailed");
    expect(errors).toContainEqual("isPositiveFailed");
  });
});
