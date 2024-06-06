# Day 37 100DaysOfCode

## Overview
A JavaScript style guide provides a set of standards for writing and organizing JavaScript code. This ensures code consistency, readability, and maintainability, especially when working in teams.

## Why We Need Style Guides
In a team setting, inconsistent coding styles can lead to messy and difficult-to-manage codebases. Adopting a style guide, whether self-developed or a popular one, helps maintain order and clarity in the code.

## Common JavaScript Style Guides
1. **Airbnb JavaScript Style Guide**: Highly popular and widely adopted, covering nearly every aspect of JavaScript.
2. **JavaScript Standard Style Guide**: Not as popular but notable for omitting semicolons.
3. **Google JavaScript Style Guide**: Comprehensive but less commonly discussed in the text.

## JavaScript Coding Conventions
Coding conventions improve code clarity, readability, reusability, and maintainability. Key conventions include:

- **Naming and Declaration Rules**:
  - Use camelCase for variables and functions.
  - Start variable names with a letter.
  - Use `const` for constants, arrays, objects, and functions.
  - Prefer single quotes or backticks over double quotes.
  - Remove semicolons (optional).
  - Space around operators and after commas.
  - Use arrow functions for single-line functions with explicit returns.
  - Avoid trailing commas in object literals.
  - Use shorthand operators like `+=` and `-=`.
  - Tag `console.log()` outputs for easier debugging.

## Example Code Conventions

### Variables
```javascript
let firstName = 'Asabeneh';
let lastName = 'Yetayeh';
let country = 'Finland';
let city = 'Helsinki';

const PI = Math.PI;
const gravity = 9.81;
```

### Arrays
Use plural names for arrays:
```javascript
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
```

### Functions
Prefer arrow functions and explicit returns for single-line functions:
```javascript
const printFullName = (firstName, lastName) => firstName + ' ' + lastName;
const square = (n) => n * n;
const hexaColor = () => {
  const str = '0123456789abcdef';
  let hexa = '#';
  for (let i = 0; i < 6; i++) {
    hexa += str[Math.floor(Math.random() * str.length)];
  }
  return hexa;
};
```

### Loops
Use various loop styles:
```javascript
for (let i = 0; i < n; i++) {
  console.log();
}
names.forEach(name => console.log(name.toUpperCase()));
for (const name of names) {
  console.log(name.toUpperCase());
}
```

### Objects
Declare objects with `const`:
```javascript
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node'],
  isMarried: true
};
for (const key in person) {
  console.log(key, person[key]);
}
```

### Conditionals
Utilize `if`, `else if`, `switch`, and ternary operators:
```javascript
if (condition) {
  // code for true condition
} else {
  // code for false condition
}
const isRaining = true;
isRaining ? console.log('You need a rain coat.') : console.log('No need for a rain coat.');
```

### Classes
Declare classes with capitalized names:
```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```

## Conclusion
Consistently following a style guide ensures that code is readable and maintainable, making collaboration more efficient. Clean code is not only a professional habit but also a courtesy to others who will read your code.
