/**
 * getErrorMessage
 */
export const getErrorMessage = validatorName => {
  if (validatorName.substring(0, 2) === "is") {
    return validatorName.replace("is", "isNot");
  } else if (validatorName.substring(0, 3) === "has") {
    return validatorName.replace("has", "hasNot");
  } else {
    return `${validatorName}Failed`;
  }
};
