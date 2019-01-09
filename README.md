# Ramda Validations

JavaScript type testing library with `ramda`

## Validators List

### General

- **isPresent**: Checks that input value is present.

```typescript
isPresent(input: any): boolean;

// Exemple
isPresent("Hello"); //=> true
isPresent([]); //=> false
isPresent({}); //=> false
isPresent(""); //=> false
isPresent(null); //=> false
isPresent(undefined); //=> false
```

- **isBlank**: Checks that input is nil or empty.

```typescript
isBlank(input: any): boolean;

// Exemple
isBlank(""); //=> true
isBlank(" "); //=> true
isBlank(null); //=> true
isBlank(undefined); //=> true
isBlank([]); //=> true
isBlank({}); //=> true
isBlank(0); //=> false
isBlank(false); //=> false
```

- **isOtherThan**: Checks that a value is other than b value.

```typescript
isOtherThan(a: any, b: any): boolean;

// Exemple
isOtherThan(1, 2); //=> true
isOtherThan([1, 2], [1, 2]); //=> false
```

### Number

- **isEven**: Checks that input is even number.

```typescript
isEven(input: number): boolean;

// Exemple
isEven(2); //=> true
isEven(Infinity); //=> false
isEven(1); //=> false
isEven(2.2); //=> false
```

- **isOdd**: Checks that input is odd number.

```typescript
isOdd(input: number): boolean;

// Exemple
isOdd(1); //=> true
isOdd(Infinity); //=> false
isOdd(2); //=> false
isOdd(1.1); //=> false
```

- **isNegative**: Checks that input value is a negative number.

```typescript
isNegative(input: number): boolean;

// Exemple
isNegative(-3); //=> true
isNegative(3); //=> false
```

- **isPositive**: Checks that input value is a positive number.

```typescript
isPositive(input: number): boolean;

// Exemple
isPositive(3); //=> true
isPositive(-3); //=> false
```

- **isInteger**: Checks that input value is an integer number.

```typescript
isInteger(input: any): boolean;

// Exemple
isInteger(10); //=> true
isInteger(10.0); //=> true
isInteger(5.12); //=> false
isInteger("Hello World"); //=> false
isInteger(true); //=> false
isInteger([]); //=> false
```

- **isFloat**: Checks that input value is a float number.

```typescript
isFloat(input: any): boolean;

// Exemple
isFloat(5.12); //=> true
isFloat(10.0); //=> false
isFloat(10); //=> false
isFloat("Hello World"); //=> false
isFloat(true); //=> false
isFloat([]); //=> false
```

- **isFinite**: Checks that input value is a finite number.

```typescript
isFinite(input: any): boolean;

// Exemple
isFinite(12); //=> true
isFinite(Infinity); //=> false
isFinite(-Infinity); //=> false
```

- **isMultiple**: Checks that a value is a multiple of b value.

```typescript
isMultiple(a: number, b: number): boolean;

// Exemple
isMultiple(3, 105); //=> true
isMultiple(3, 106); //=> false
```

- **isInRange**: Checks that input value is between from and to value.

```typescript
isInRange(from: number, to: number): boolean;

//Exemple
isInRange(1, 8, 5); //=> true
isInRange(1, 8, 10); //=> false
```

## String

- **isAlphanum**: Checks that characters of a string are alphanumerics.

```typescript
isAlphanum(input: any): boolean;

//Exemple
isAlphanum("123456789"); //=> true
isAlphanum("abcd"); //=> true
isAlphanum("abcd123456789"); //=> true
isAlphanum("abcd1234567,89"); //=> false
```

- **isString**: Checks that input value is a string value.

```typescript
isString(input: any): boolean;

//Exemple
isString("hello"); //=> true
isString(0); //=> false
```

## Boolean

- **isTrue**: Checks that input value is equals true.

```typescript
isTrue(input: any): boolean;

//Exemple
isTrue(true); //=> true
isTrue(Boolean(true)); //=> true
isTrue(false); //=> false
isTrue(Boolean(false)); //=> false
isTrue(1); //=> false
isTrue("hello world"); //=> false
isTrue(123456); //=> false
isTrue(["Hello", "World"]); //=> false
```

- **isFalse**: Checks that input value is false.

```typescript
isFalse(input: any): boolean;

//Exemple
isFalse(false); //=> true
isFalse(Boolean(false)); //=> true
isFalse(true); //=> false
isFalse(Boolean(true)); //=> false
isFalse(0); //=> false
isFalse("hello world"); //=> false
isFalse(123456); //=> false
isFalse(["Hello", "World"]); //=> false
```

### Object

- **hasKeys**: Checks that input object has keys.

```typescript
hasKeys(keys: string[], input: object): boolean;

//Exemple
hasKeys(["a", "b"], {a: 1, b: 2}) // => true
hasKeys(["a", "b"], {a: 1}) // => false
```

- **isObject**: Checks that input value is an object.

```typescript
isObject(input: any): boolean;

//Exemple
isObject({}); //=> true
isObject({ hello: "World" }); //=> true
isObject([]); //=> true
isObject(Function); //=> true
isObject(1); //=> false
```

- **isHash**: Checks that input value is an object hash.

```typescript
isHash(input: any): boolean;

//Exemple
isHash({}); //=> true
isHash({ hello: "World" }); //=> true
isHash([]); //=> false
isHash(Function); //=> false
isHash(1); //=> false
```

### Promise

- **isPromise**: Checks that input value is a promise.

```typescript
isPromise(input: any): boolean;

//Exemple
const promise = new Promise((resolve, reject) => {});
isPromise(promise); //=> true
```
