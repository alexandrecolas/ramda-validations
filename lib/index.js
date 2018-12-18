(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ramda')) :
  typeof define === 'function' && define.amd ? define(['exports', 'ramda'], factory) :
  (factory((global.RV = {}),global.R));
}(this, (function (exports,ramda) { 'use strict';

  /**
   * Check that characters of a string are alphanumerics
   * @param {string} input
   * @return {boolean}
   * @exemple
   *
   * isAlphanum("123456789") //=> true
   * isAlphanum("abcd") //=> true
   * isAlphanum("abcd123456789") //=> true
   * isAlphanum("abcd1234567,89") //=> false
   */

  var isAlphanum = ramda.test(/^[a-zA-Z0-9]*$/);

  /**
   * Checks if input value is an integer number
   * @param {any} input
   * @return {boolean}
   */
  var isInteger = Number.isInteger;

  /**
   * Checks if input is even number.
   * @param {number} input
   * @return {boolean}
   * @exemple
   *
   * isEven(2) //=> true
   * isEven(Infinity) //=> false
   * isEven(1) //=> false
   * isEven(2.2) //=> false
   */

  var isEven = function isEven(input) {
    return isInteger(input) && (input % 2 === 1 ? false : true);
  };

  var isString = function isString(value) {
    return ramda.is(String, value);
  };

  /**
   * Checks if input is odd number.
   * @param {number} input
   * @return {boolean}
   * @exemple
   *
   * isOdd(1) //=> true
   * isOdd(Infinity) //=> false
   * isOdd(2) //=> false
   * isOdd(1.1) //=> false
   */

  var isOdd = ramda.both(isInteger, ramda.complement(isEven));

  var isOtherThan = ramda.complement(ramda.equals);

  var isPresent = function isPresent(value) {
    return !(ramda.isNil(value) || ramda.isEmpty(value));
  };

  /**
   * Check that input is not nil or empty
   * @param {any} input
   * @return {boolean}
   * @exemple
   *
   * isBlank(""); //=> true
   * isBlank(" "); //=> true
   * isBlank(null); //=> true
   * isBlank(undefined); //=> true
   * isBlank([]); //=> true
   * isBlank({}); //=> true
   * isBlank(0); //=> false
   * isBlank(false); //=> false
   */

  var isBlank = function isBlank(input) {
    input = ramda.is(String, input) ? ramda.trim(input) : input;
    return ramda.isNil(input) || ramda.isEmpty(input);
  };

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
   * Checks if input value is false
   * @param {any} input
   * @return {boolean}
   * @exemple
   *
   * isFalse(false) //=> true
   * isFalse(Boolean(false)) //=> true
   * isFalse(true) //=> false
   * isFalse(Boolean(true)) //=> false
   * isFalse(0) //=> false
   * isFalse("hello world") //=> false
   * isFalse(123456) //=> false
   * isFalse(["Hello", "World"]) //=> false
   */
  var isFalse = function isFalse(input) {
    return input === false;
  };

  /**
   * Checks if input value is between from and to value
   * @param {number} from
   * @param {number} to
   * @param {number} input
   * @return {boolean}
   * @exemple
   *
   * isInRange(1, 8, 5) //=> true
   * isInRange(1, 8, 10) //=> false
   */

  var isInRange = ramda.curry(function (from, to, input) {
    return ramda.includes(input, ramda.range(from, to));
  });

  /**
   * Checks if input value is a finite number
   * @param {any} input
   * @return {boolean}
   */
  var isFinite = Number.isFinite;

  /**
   * Checks if input value is a float number
   * @param {any} input
   * @return {boolean}
   * @exemple
   *
   * isFloat(5.12) //=> true
   * isFloat(10.0) //=> false
   * isFloat(10) //=> false
   * isFloat("Hello World") //=> false
   * isFloat(true) //=> false
   * isFloat([]) //=> false
   */

  var isFloat = ramda.both(isFinite, ramda.complement(isInteger));

  /**
   * Check if input object has keys
   * @param {Array<string>} keys
   * @param {Object} input
   * @return {boolean}
   * @exemple
   *
   * hasKeys(["a", "b"], {a: 1, b: 2}) // => true
   * hasKeys(["a", "b"], {a: 1}) // => false
   */

  var hasKeys = ramda.curry(function (keys, input) {
    return !ramda.includes(false, ramda.map(ramda.has(ramda.__, input))(keys));
  });

  /**
   * isObject
   */

  var isObject = function isObject(value) {
    return ramda.is(Object, value);
  };

  /**
   * Checks if input value is an object hash
   * @param {any} input
   * @return {boolean}
   * @exemple
   *
   * isHash({}) //=> true
   * isHash([]) //=> false
   * isHash(func) //=> false
   * isHash(1) //=> false
   */
  var isHash = function isHash(input) {
    return input.constructor == Object;
  };

  var isMultiple = ramda.curry(function (a, b) {
    return a % b === 0;
  });

  exports.isAlphanum = isAlphanum;
  exports.isEven = isEven;
  exports.isString = isString;
  exports.isOdd = isOdd;
  exports.isOtherThan = isOtherThan;
  exports.isPresent = isPresent;
  exports.isBlank = isBlank;
  exports.isNegative = isNegative;
  exports.isPositive = isPositive;
  exports.isTrue = isTrue;
  exports.isFalse = isFalse;
  exports.isInRange = isInRange;
  exports.isInteger = isInteger;
  exports.isFloat = isFloat;
  exports.hasKeys = hasKeys;
  exports.isObject = isObject;
  exports.isHash = isHash;
  exports.isFinite = isFinite;
  exports.isMultiple = isMultiple;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
