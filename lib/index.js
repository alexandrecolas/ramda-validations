(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ramda')) :
  typeof define === 'function' && define.amd ? define(['exports', 'ramda'], factory) :
  (factory((global.RV = {}),global.R));
}(this, (function (exports,ramda) { 'use strict';

  /**
   * Checks that input value is present
   * @param {number} input
   * @return {boolean}
   *
   * isPresent("Hello"); //=> true
   * isPresent([]); //=> false
   * isPresent({}); //=> false
   * isPresent(""); //=> false
   * isPresent(null); //=> false
   * isPresent(undefined); //=> false
   */

  var isPresent = function isPresent(input) {
    return !(ramda.isNil(input) || ramda.isEmpty(input));
  };

  /**
   * Checks that input is nil or empty
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

  /**
   * Checks that a value is other than b value.
   * @param {any} a
   * @param {any} b
   * @return {boolean}
   * @exemple
   *
   * isOtherThan(1, 2) //=> true
   * isOtherThan([1, 2], [1, 2]) //=> false
   */

  var isOtherThan = ramda.complement(ramda.equals);

  /**
   * Checks that input value is an integer number
   * @param {any} input
   * @return {boolean}
   *
   * isInteger(10) //=> true
   * isInteger(10.0) //=> true
   * isInteger(5.12) //=> false
   * isInteger("Hello World") //=> false
   * isInteger(true) //=> false
   * isInteger([]) //=> false
   */
  var isInteger = Number.isInteger;

  /**
   * Checks that input is even number.
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

  /**
   * Checks that input is odd number.
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

  /**
   * Checks that input value is a negative number
   * @param {number} input
   * @return {boolean}
   */
  var isNegative = function isNegative(input) {
    return Math.sign(input) === -1 ? true : false;
  };

  /**
   * Checks that input value is a positive number
   * @param {number} input
   * @return {boolean}
   */
  var isPositive = function isPositive(input) {
    return Math.sign(input) === 1 ? true : false;
  };

  /**
   * Checks that input value is a finite number
   * @param {any} input
   * @return {boolean}
   */
  var isFinite = Number.isFinite;

  /**
   * Checks that input value is a float number
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
   * Checks that a value is a multiple of b value
   * @param {number} a
   * @param {number} b
   * @return {boolean}
   */

  var isMultiple = ramda.curry(function (a, b) {
    return a % b === 0;
  });

  /**
   * Checks that characters of a string are alphanumerics
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
   * Checks that input value is a string value
   * @param {any} input
   * @return {boolean}
   *
   * isString("hello") //=> true
   * isString(0) //=> false
   */

  var isString = ramda.is(String);

  /**
   * Checks that input value is equals true
   * @param {any} input
   * @return {boolean}
   *
   * isTrue(true) //=> true
   * isTrue(Boolean(true)) //=> true
   * isTrue(false) //=> false
   * isTrue(Boolean(false)) //=> false
   * isTrue(1) //=> false
   * isTrue("hello world") //=> false
   * isTrue(123456) //=> false
   * isTrue(["Hello", "World"]) //=> false
   */

  var isTrue = ramda.equals(true);

  /**
   * Checks that input value is false
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

  var isFalse = ramda.equals(false);

  /**
   * Checks that input value is between from and to value.
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
   * Checks that input object has keys
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
   * Checks that input value is an object
   * @param {any} input
   * @return {boolean}
   *
   * isObject({}) //=> true
   * isObject({ hello: "World" }) //=> true
   * isObject([]) //=> true
   * isObject(Function) //=> true
   * isObject(1) //=> false
   */

  var isObject = ramda.is(Object);

  /**
   * Checks that input value is an object hash
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

  /**
   * Checks that input value is a promise
   * @param {number} input
   * @return {boolean}
   *
   * const promise = new Promise((resolve, reject) => {});
   * isPromise(promise); //=> true
   */

  var isPromise = ramda.is(Promise);

  // General

  exports.isPresent = isPresent;
  exports.isBlank = isBlank;
  exports.isOtherThan = isOtherThan;
  exports.isEven = isEven;
  exports.isOdd = isOdd;
  exports.isNegative = isNegative;
  exports.isPositive = isPositive;
  exports.isInteger = isInteger;
  exports.isFloat = isFloat;
  exports.isFinite = isFinite;
  exports.isMultiple = isMultiple;
  exports.isAlphanum = isAlphanum;
  exports.isString = isString;
  exports.isTrue = isTrue;
  exports.isFalse = isFalse;
  exports.isInRange = isInRange;
  exports.hasKeys = hasKeys;
  exports.isObject = isObject;
  exports.isHash = isHash;
  exports.isPromise = isPromise;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
