# Day 68 100DaysOfCode
 Today my friends and i hopped on our usual call and tackled an hackkerrank challenge called plusMinus

## Project Description

The project involves writing a function that processes an array of integers to determine the proportions of positive, negative, and zero elements within the array. These proportions are then printed with a precision of six decimal places. This challenge is interesting because it introduces precision problems, requiring careful handling of floating-point arithmetic to ensure accuracy.

### Problem Statement

Given an array of integers, the task is to calculate the ratios of its elements that are positive, negative, and zero. The results must be printed as decimal values with six decimal places on separate lines.

### Thought Process

1. **Understanding the Problem**: The first step is to understand the problem requirements and constraints. The goal is to count the positive, negative, and zero values in the array and then calculate their respective ratios.
  
2. **Input Reading**: Read the input values which include the size of the array and the array elements themselves. Ensure the input is correctly parsed.

3. **Counting Elements**: Iterate through the array to count the number of positive, negative, and zero elements.

4. **Calculating Ratios**: Calculate the ratio of positive, negative, and zero elements by dividing the counts by the total number of elements in the array. 

5. **Precision Handling**: Ensure that the output is formatted to six decimal places. This might involve using formatting functions to control the precision.

6. **Output**: Print the calculated ratios on separate lines.

### Key Takeaways

- **Precision**: Handling precision in floating-point arithmetic is crucial to meet the requirement of six decimal places.
- **Efficiency**: The algorithm needs to efficiently count and calculate ratios in a single pass through the array.
- **Edge Cases**: Consider edge cases such as all elements being positive, negative, or zero, and arrays with minimal size.
- **Formatting**: Properly format the output to ensure it adheres to the specified decimal precision.