# Higher Order Functions Exercises Documentation

This README documents the exercises solved using higher order functions learned in the course.

## Exercises: Level 2

### Total Price of Products
Find the total price of products by chaining two or more array iterators (e.g., `arr.map(callback).filter(callback).reduce(callback)`).

### Sum of Prices
Find the sum of prices of products using only reduce.

### Categorize Countries
Declare a function called `categorizeCountries` which returns an array of countries sharing a common pattern (e.g., 'land', 'ia', 'island', 'stan').

### Letter Frequency
Create a function that returns an array of objects containing the letter and the number of times the letter is used to start a country name.

### Get First Ten Countries
Declare a function called `getFirstTenCountries` and return an array of ten countries. Use different functional programming techniques on the countries.js array.

### Get Last Ten Countries
Declare a function called `getLastTenCountries` which returns the last ten countries in the countries array.

### Most Used Initial Letter
Find out which letter is used most frequently as the initial letter for a country name from the countries array.

## Exercises: Level 3

### Sort Countries
Sort countries by name, capital, and population.

### Most Spoken Languages
Find the 10 most spoken languages and return an array of objects containing the language and its count.

### Most Populated Countries
Create a function `mostPopulatedCountries` which returns an array of the ten most populated countries.

## Statistical Analysis Program

Try to develop a program which calculates measures of central tendency of a sample (mean, median, mode) and measures of variability (range, variance, standard deviation). In addition to those measures, find the min, max, count, percentile, and frequency distribution of the sample.

**Example:**

```javascript
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ', statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Frequency Distribution: ', statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
console.log(statistics.describe())
```

This documentation outlines the exercises and their solutions using higher order functions. Each exercise focuses on different aspects of functional programming, enhancing understanding and proficiency.