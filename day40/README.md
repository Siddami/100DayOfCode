## Day 40 of 100DaysOfCode: HackerRank Challenge in JavaScript

### Challenge: Birthday Cake Candles

#### Problem Statement

You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

**Function Description**

Complete the function `birthdayCakeCandles` in the editor below.

`birthdayCakeCandles` has the following parameter(s):
- `int candles[n]`: the candle heights

**Returns**
- `int`: the number of candles that are tallest

**Input Format**
- The first line contains a single integer, `n`, the size of `candles`.
- The second line contains `n` space-separated integers, where each integer `i` describes the height of `candles[i]`.

**Constraints**
- 1 <= n <= 10^5
- 1 <= candles[i] <= 10^7

**Sample Input 0**
```
4
3 2 1 3
```

**Sample Output 0**
```
2
```

**Explanation 0**
Candle heights are `[3, 2, 1, 3]`. The tallest candles are `3` units, and there are `2` of them.

### Thought Process

1. **Understand the Problem**:
   - We need to find the tallest candle height.
   - We then count how many candles have that height.

2. **Plan**:
   - Iterate through the array of candle heights to find the maximum height.
   - Iterate again to count how many candles have that maximum height.

3. **Write the Code**:
   - Use a `for` loop to find the tallest candle.
   - Use another `for` loop to count the tallest candles.

### JavaScript Implementation

```javascript
function birthdayCakeCandles(candles) {
    let maxHeight = 0;
    let maxCount = 0;

    // Find the maximum height
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] > maxHeight) {
            maxHeight = candles[i];
        }
    }

    // Count how many times the maximum height appears
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === maxHeight) {
            maxCount++;
        }
    }

    return maxCount;
}

// Sample Input
const candles = [3, 2, 1, 3];
console.log(birthdayCakeCandles(candles)); // Output: 2
```

### Takeaways

1. **Iteration**:
   - Looping through an array multiple times can be necessary for different operations.
   - Using `for` loops allows more control over the iteration process compared to array methods.

2. **Optimization**:
   - The solution involves two iterations through the array. Although this is efficient for our constraints, in larger datasets, we could explore combining these steps to improve performance.

3. **Code Readability**:
   - Clear variable names like `maxHeight` and `maxCount` make the code easier to understand.
   - Comments help explain the steps, which is useful for future reference or for other developers reading the code.

By following this structured approach, I was able to solve the problem effectively and learn valuable coding practices.
