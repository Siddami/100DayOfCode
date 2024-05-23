# Day 23 100DaysOfCode

# Error Handling in JavaScript

JavaScript is a loosely-typed language, often leading to runtime errors when accessing undefined variables or calling undefined functions. To manage these errors, JavaScript provides the `try-catch-finally` block, similar to Python or Java.

```javascript
try {
  // code that may throw an error
} catch (err) {
  // code executed if an error occurs
} finally {
  // code executed regardless of error occurrence
}
```

- **try:** Wrap code that may throw an error. This block tests the code for errors.
- **catch:** Executes if an error occurs in the try block. It takes a parameter, often named `err`, to log or display error details.
- **finally:** Executes regardless of whether an error occurred. It can be used to complete tasks or reset variables.

**Example:**

```javascript
try {
  let lastName = 'Yetayeh';
  let fullName = firstName + ' ' + lastName;
} catch (err) {
  console.error(err); // log the error
} finally {
  console.log('In any case, I will be executed');
}
// Output: ReferenceError: firstName is not defined
//         In any case, I will be executed
```

The catch block's parameter, `err`, is an object with `name` and `message` properties.

**Custom Errors:**

The `throw` statement allows creating custom errors.

```javascript
throw 'Error2'; // string value
throw 42; // number value
throw true; // boolean value
throw new Error('Required'); // error object with a message
```

**Example Function:**

```javascript
const throwErrorExampleFun = () => {
  try {
    let x = prompt('Enter a number: ');
    if (x == '') throw 'empty';
    if (isNaN(x)) throw 'not a number';
    x = Number(x);
    if (x < 5) throw 'too low';
    if (x > 10) throw 'too high';
  } catch (err) {
    console.log(err);
  }
};
throwErrorExampleFun();
```

**Common Error Types:**

- **ReferenceError:** Using an undeclared variable.
- **SyntaxError:** Syntax issues in the code.
- **TypeError:** Performing an operation on the wrong data type.

Understanding these errors helps in debugging and writing robust applications. 🌕
```