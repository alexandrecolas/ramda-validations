import purdy from "purdy";
import { isString, isRequired, isInteger } from "src/validators";
import { validates, checkValidations } from "src/validates";
import { reverse } from "ramda";

test("test", () => {
  const user = {
    firstname: "",
    lastname: "",
    address: {
      street: "246 rue de charenton",
      zipcode: "75012",
      city: ""
    }
  };

  const validations = [
    validates(
      ["firstname", "lastname", "address.street", "address.city"],
      [isString, isRequired]
    ),
    validates(["address.zipcode"], [isInteger, isRequired])
  ];

  const result = checkValidations(validations, user);
  purdy(result);
  expect(true).toBe(true);
});
