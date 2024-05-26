## 100 Days of Code - Day 26: Strong Password Detection

This document reports our progress on Day 26 of the 100 Days of Code challenge. The task involved creating a function to determine the minimum number of characters needed to make a password strong according to a set of criteria.

### Challenge Description

Louise joined a social networking site and needs to create a strong password. The website defines a strong password as one that meets the following criteria:

- Minimum length of 6 characters
- Contains at least one digit (0-9)
- Contains at least one lowercase English letter (a-z)
- Contains at least one uppercase English letter (A-Z)
- Contains at least one special character (!@#$%^&*()-+)

Given a password string, the challenge is to write a function that calculates the minimum number of characters Louise needs to add to make her password strong.

### Solution Approach

We implemented a JavaScript function named `minimumNumber` that takes two arguments:

- `n`: The length of the password string
- `password`: The password string itself

Here's a breakdown of the solution:

1. **Define Character Sets:** We define constants representing the different character sets (numbers, lowercase letters, uppercase letters, and special characters).
2. **Initialize Counters:** We create variables to track the number of missing characters for each type, initially assuming all are missing (counters set to 1).
3. **Iterate Through Password:** We loop through each character in the password string.
4. **Check Character Type:** Inside the loop, we check if the current character belongs to any of the defined character sets using the `includes` method. If a match is found, we reset the corresponding missing character counter to 0.
5. **Calculate Minimum:** After iterating through the password, we use the `Math.max` function to identify the highest missing character count. This represents the character type requiring the most additions.
6. **Return Minimum Additions:** The function returns the value from `Math.max`, indicating the minimum number of characters Louise needs to add to satisfy all password criteria.

### Example Usage

```javascript
const passwordLength = 3;
const password = "Ab1";
const minCharsToAdd = minimumNumber(passwordLength, password);
console.log(minCharsToAdd); // Output: 3
```

In this example, the password "Ab1" is missing lowercase letters, uppercase letters, and special characters. The function correctly identifies that 3 characters need to be added to make the password strong.

### Learnings

This challenge helped us solidify our understanding of:

- String manipulation techniques in JavaScript (using `for...of` loop and `includes` method).
- Utilizing conditional statements to identify character types.
- Employing `Math.max` to determine the highest value among variables.

We successfully tackled this problem by implementing a clear and efficient solution. As we progress through the 100 Days of Code challenge, we aim to encounter more complex problems that further enhance our coding abilities.
