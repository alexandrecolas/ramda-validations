(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ramda')) :
  typeof define === 'function' && define.amd ? define(['exports', 'ramda'], factory) :
  (factory((global.ReactValidations = {}),global.ramda));
}(this, (function (exports,ramda) { 'use strict';

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  /**
   * isHash
   */
  var isHash = function isHash(value) {
    return value.constructor == Object;
  };

  /**
   * getErrorMessage
   */
  var getErrorMessage = function getErrorMessage(validatorName) {
    if (validatorName.substring(0, 2) === "is") {
      return validatorName.replace("is", "isNot");
    } else if (validatorName.substring(0, 3) === "has") {
      return validatorName.replace("has", "hasNot");
    } else {
      return "".concat(validatorName, "Failed");
    }
  };

  /**
   * Validate
   */

  var validate = function validate() {
    for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
      validators[_key] = arguments[_key];
    }

    return function (value) {
      var result = {
        errors: [],
        isValid: true
      }; // For all validators of valide, check

      validators.forEach(function (validator) {
        if (ramda.is(Array, validator)) {
          result = validate.apply(void 0, _toConsumableArray(validator))(value);
        } else if (isHash(validator)) {
          result = validateObject(validator)(value);
        } else if (ramda.isNil(validator)) {
          throw "Validator need to be a function";
        } else if (validator.name === "validateObjectKey") {
          result = validator(value);
        } else if (validator.name === "validateCondition") {
          result = validator()(value);
        } else {
          if (validator(value) === false) {
            result.errors.push(getErrorMessage(validator.name));
            result.isValid = false;
          }
        }
      });
      return result;
    };
  };
  /**
   * Validates Object Keys
   */

  var validateObject = function validateObject(objectValidators) {
    var validateObjectKey = function validateObjectKey(value) {
      if (!isHash(objectValidators)) {
        return {
          isValid: false,
          errors: ["isHashFailed"]
        };
      }

      var objectKeys = {};
      var isHashValid = true; // For Each key

      ramda.forEachObjIndexed(function (validateForKey, key) {
        var result = validate(validateForKey)(value[key]);

        if (!result.isValid) {
          objectKeys[key] = result;
          isHashValid = false;
        }
      })(objectValidators);

      if (!isHashValid) {
        return {
          keys: objectKeys,
          isValid: isHashValid,
          errors: ["validateKeysFailed"]
        };
      } else {
        return {
          errors: [],
          isValid: true
        };
      }
    };

    return validateObjectKey;
  };
  var when = function when(condition, validator) {
    var validateCondition = function validateCondition() {
      return ramda.is(Array, validator) ? validate.apply(void 0, _toConsumableArray(validator)) : validator;
    };

    return condition() ? validateCondition : function () {
      return true;
    };
  };

  exports.validate = validate;
  exports.validateObject = validateObject;
  exports.when = when;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
