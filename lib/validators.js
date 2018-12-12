(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ramda')) :
  typeof define === 'function' && define.amd ? define(['exports', 'ramda'], factory) :
  (factory((global.Validator = {}),global.ramda));
}(this, (function (exports,ramda) { 'use strict';

  /**
   * isAlphanum
   */

  var isAlphanum = ramda.test(/^[a-zA-Z0-9]*$/);

  /**
   * equals
   */

  var isEqualsTo = ramda.equals;

  /**
   * isEven
   */
  var isEven = function isEven(num) {
    return num % 2 === 1 ? false : true;
  };

  var isString = function isString(value) {
    return ramda.is(String, value);
  };

  var isIn = ramda.curry(function (list, value) {
    return ramda.contains(value, list);
  });

  /**
   * isOdd
   */
  var isOdd = function isOdd(num) {
    return num % 2 === 1 ? true : false;
  };

  var isOtherThan = ramda.curry(function (a, b) {
    return !ramda.equals(a, b);
  });

  var isPresent = function isPresent(value) {
    return !(ramda.isNil(value) || ramda.isEmpty(value));
  };

  var isBlank = function isBlank(value) {
    return ramda.isNil(value) || ramda.isEmpty(value);
  };

  /**
   * isGreaterThan
   */

  var isGreaterThan = ramda.curry(function (a, b) {
    if (ramda.is(Date, a)) {
      return ramda.gt(b.getTime(), a.getTime());
    } else {
      return ramda.gt(b, a);
    }

    return true;
  });

  var isNegative = function isNegative(num) {
    return Math.sign(num) === -1 ? true : false;
  };

  var isPositive = function isPositive(num) {
    return Math.sign(num) === 1 ? true : false;
  };

  /**
   * isTrue
   */
  var isTrue = function isTrue(value) {
    return value === true;
  };

  /**
   * isFalse
   */
  var isFalse = function isFalse(value) {
    return value === false;
  };

  var isInRange = ramda.curry(function (from, to, value) {
    return ramda.contains(value, ramda.range(from, to));
  });

  var isInteger = function isInteger(value) {
    return ramda.is(Number, value) && value % 1 === 0;
  };

  var isFloat = function isFloat(value) {
    return ramda.is(Number, value) && value % 1 !== 0;
  };

  var hasKey = ramda.curry(function (key, value) {
    return ramda.is(Object, value) && ramda.contains(key, ramda.keys(value));
  });

  var hasKeys = ramda.curry(function () {
    var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var value = arguments.length > 1 ? arguments[1] : undefined;
    if (!ramda.is(Object, value)) return false;
    return !ramda.contains(false, keys.map(function (key) {
      return hasKey(key, value);
    }));
  });

  /**
   * isObject
   */

  var isObject = function isObject(value) {
    return ramda.is(Object, value);
  };

  /**
   * isHash
   */
  var isHash = function isHash(value) {
    return value.constructor == Object;
  };

  exports.isAlphanum = isAlphanum;
  exports.isEqualsTo = isEqualsTo;
  exports.isEven = isEven;
  exports.isString = isString;
  exports.isIn = isIn;
  exports.isOdd = isOdd;
  exports.isOtherThan = isOtherThan;
  exports.isPresent = isPresent;
  exports.isBlank = isBlank;
  exports.isGreaterThan = isGreaterThan;
  exports.isNegative = isNegative;
  exports.isPositive = isPositive;
  exports.isTrue = isTrue;
  exports.isFalse = isFalse;
  exports.isInRange = isInRange;
  exports.isInteger = isInteger;
  exports.isFloat = isFloat;
  exports.hasKey = hasKey;
  exports.hasKeys = hasKeys;
  exports.isObject = isObject;
  exports.isHash = isHash;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
