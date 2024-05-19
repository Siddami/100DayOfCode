# Day 19 100DaysCode

Review Day for the team, we went through our challenges in the past week and tackled hackerrank challenges.

# CamelCase Word Count Exercise

## Overview

This exercise involves analyzing a sequence of words in CamelCase format to determine the number of words present in the string. The string follows specific properties where the first word is entirely in lowercase and each subsequent word starts with an uppercase letter followed by lowercase letters.

## Properties of CamelCase String

- The string is a concatenation of one or more English words.
- All letters in the first word are lowercase.
- For each of the subsequent words, the first letter is uppercase, and the rest of the letters are lowercase.

## Example

Consider the string: `oneTwoThree`.

This string consists of the following words:
- `one`
- `Two`
- `Three`

Thus, there are 3 words in the string.

## Function Description

Implement the `camelcase` function to determine the number of words in the given CamelCase string.

### Function Signature

```python
def camelcase(s: str) -> int:
```

### Parameters

- `string s`: The CamelCase string to analyze.

### Returns

- `int`: The number of words in the string.

### Input Format

- A single line containing a CamelCase string.

### Constraints

- The string will contain only English letters.

## Sample Input

```plaintext
saveChangesInTheEditor
```

## Sample Output

```plaintext
5
```

## Explanation

The input string `saveChangesInTheEditor` contains five words:
1. `save`
2. `Changes`
3. `In`
4. `The`
5. `Editor`

## Implementation

Here is a possible implementation of the `camelcase` function:

```python
def camelcase(s: str) -> int:
    # Start with counting the first word
    count = 1
    
    # Iterate through the string to count uppercase letters
    for char in s:
        if char.isupper():
            count += 1
    
    return count
```

### Explanation of the Implementation

1. **Initialization**: Start with a count of 1 because the first word is always in lowercase.
2. **Iteration**: Loop through each character in the string.
3. **Uppercase Check**: Increment the count each time an uppercase letter is encountered, as it signifies the start of a new word.
4. **Return the Count**: Finally, return the total count of words.

## Conclusion

This exercise helps in understanding how to process and analyze CamelCase strings. By counting the number of uppercase letters, we can determine the number of words in the string effectively. This is a common problem in text processing and helps build skills in string manipulation and iteration.