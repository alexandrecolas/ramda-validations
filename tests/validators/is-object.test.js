import { isObject } from "src/validators";

test("test", () => {
  const object = {
    firstname: "Alexandre",
    lastname: "Colas",
    address: {
      street: "246 rue de charenton",
      zipcode: "75012",
      city: "Paris"
    }
  };

  const validation = isObject({
    street: validate(isString),
    zipcode: validate(isString),
    city: validate(isString)
  });
});
