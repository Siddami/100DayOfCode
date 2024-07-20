# DAY 8 100 Days of Code

## Table of Contents
- [DAY 8 100 Days of Code](#day-8-100-days-of-code)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Key Takeaways](#key-takeaways)
  - [Things I Did](#things-i-did)
  - [Things I Need to Do](#things-i-need-to-do)

## Overview
On day 8 of the 100 Days of Code challenge, I focused on learning and practicing various types of functions in JavaScript, including standard functions, anonymous functions, arrow functions, and function parameters.

## Key Takeaways
- Gained understanding of different types of functions: standard, anonymous, and arrow functions.
- Learned how to define and use function parameters effectively.

## Things I Did
1. **Standard Functions**
   - Declared a function `fullName` that prints my full name.
   ```javascript
   function fullName() {
       console.log('Abdulkareem Yetunde Siddiqat');
   }
   fullName();
   ```
   - Modified `fullName` to take `firstName` and `lastName` as parameters and return the full name.
   ```javascript
   function FullName(firstName, lastName) {
       return `${firstName} ${lastName}`;
   }
   console.log(FullName('Yetunde', 'Abdulkareem'));
   ```

2. **Arrow Functions**
   - Created an arrow function `addNumbers` that returns the sum of two numbers.
   ```javascript
   const addNumbers = (num1, num2) => num1 + num2;
   console.log(addNumbers(2, 3));
   ```

3. **Anonymous Functions**
   - Calculated the area of a rectangle using an anonymous function.
   ```javascript
   (function areaOfRectangle(length, width) {
       console.log(length * width);
   })(4, 5);
   ```

4. **Function Parameters**
   - Calculated the perimeter of a rectangle.
   ```javascript
   const perimeter = (function (length, width) {
       console.log(2 * (length + width));
   })(2, 4);
   ```

5. **Various Calculations**
   - Volume of a rectangular prism.
   ```javascript
   const volumeOfRectPrism = (length = 5, width = 10, height = 3) => {
       let volume = length * width * height;
       return volume;
   }
   console.log(volumeOfRectPrism());
   console.log(volumeOfRectPrism(3, 6, 10));
   ```

   - Area and circumference of a circle.
   ```javascript
   const areaOfCircle = (r = 2) => Math.PI * r * r;
   console.log(areaOfCircle());

   function circumOfCircle(r = 5) {
       return 2 * Math.PI * r;
   }
   console.log(circumOfCircle());
   ```

   - Density of a substance.
   ```javascript
   const density = (mass = 10, volume = 5) => mass / volume;
   console.log(density());
   ```

   - Speed of a moving object.
   ```javascript
   function speed(distance, time) {
       return distance / time;
   }
   console.log(speed(3, 2));
   ```

   - Weight of a substance.
   ```javascript
   const weight = (function (mass = 5, gravity = 9.8) {
       console.log(mass * gravity);
   })();
   ```

   - Temperature conversion from Celsius to Fahrenheit.
   ```javascript
   function convertCelsiusToFahrenheit(oC) {
       oF = (oC * 9/5) + 32;
       return oF;
   }
   console.log(convertCelsiusToFahrenheit(5));
   ```

   - BMI calculation.
   ```javascript
   const bmiCalculator = ((age, weight, height) => {
       heightInMeters = height / 100; 
       let bmi = weight / (heightInMeters * heightInMeters);
       let category;
       
       if (age >= 20) {
           if (bmi < 18.5) {
               category = 'underweight';
           } else if (bmi >= 18.5 && bmi < 25) {
               category = 'normal';
           } else if (bmi >= 25.0 && bmi < 30) {
               category = 'overweight';
           } else {
               category = 'Obese';
           }
       } else {
           console.log('Cannot check BMI for age below 20');
       }
       console.log(`BMI: ${bmi}, Category: ${category}`);
   })(30, 50, 160);
   ```

   - Season check based on the month.
   ```javascript
   function checkSeason(month) {
       let season;
       switch (month) {
           case "December":
           case "January":
           case "February":
               season = "Winter";
               break;
           case "March":
           case "April":
           case "May":
               season = "Spring";
               break;
           case "June":
           case "July":
           case "August":
               season = "Summer";
               break;
           case "September":
           case "October":
           case "November":
               season = "Autumn";
               break;
       }
       return `The season for ${month} is ${season}`;
   }
   console.log(checkSeason('January'));
   ```

   - Find the maximum of three numbers without using `Math.max`.
   ```javascript
   const findMax = (function (a, b, c) {
       let maxNum = a;
       if (b > maxNum) maxNum = b;
       if (c > maxNum) maxNum = c;
       console.log(maxNum);
   })(2, 5, 6);
   ```

## Things I Need to Do
- Continue practicing different types of functions and their applications.
- Explore more complex use cases for anonymous and arrow functions.
- Work on more exercises involving function parameters.
- Deepen understanding of function scopes and closures.
- Review and practice more mathematical functions and their implementations.