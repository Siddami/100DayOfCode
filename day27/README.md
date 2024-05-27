## 100 Days of Code Challenge: Day 27 Report

This report documents the code written on Day 27 of the 100 Days of Code Challenge. The focus for this day was on object-oriented programming concepts, including classes, inheritance, and methods.

### Animal Class and Inheritance

The code begins by defining an `Animal` class. This class serves as a base class with properties like `name`, `age`, `color`, and `legs`. It also includes methods for retrieving full and basic information about the animal.

Two child classes, `Dog` and `Cat`, are then created that inherit from the `Animal` class. The `Dog` class adds properties for `type` and `sound`, while the `Cat` class only adds a `sound` property. Both child classes have methods for accessing the sound of the animal.

This demonstrates the concept of inheritance, where child classes can inherit properties and methods from a parent class and potentially add their own unique features.

### Overriding Methods

Level 2 of the challenge involved overriding a method defined in the `Animal` class. The `getBasicInfo` method is overridden in the `Cat` class to provide a more specific description for cats. This showcases how overriding allows child classes to customize inherited behavior.

### Statistical Analysis Class

Level 3 involved creating a `Statistics` class to calculate various statistical measures for a sample data set (an array of ages in this case). The class includes methods to calculate:

* Count: Total number of elements in the data set.
* Sum: The sum of all elements.
* Min: The minimum value in the data set.
* Max: The maximum value in the data set.
* Mean: The average of all elements.
* Median: The middle value when the data is sorted (or the mean of the two middle values for even-sized data sets).
* Mode: The most frequent value(s) in the data set.
* Range: The difference between the minimum and maximum values.
* Variance: The average squared deviation from the mean.
* Standard Deviation: The square root of the variance.
* Percentile: A specific percentile value based on a given percentage.
* Frequency Distribution: A dictionary showing the frequency of each unique value in the data set.

This demonstrates the use of classes and methods to encapsulate functionalities related to statistical calculations.

### Person Account Class

The final section introduces a `PersonAccount` class that manages a person's financial information. The class has properties for first name, last name, incomes (as an array with descriptions), and expenses (also as an array with descriptions). It includes methods for:

* Calculating total income
* Calculating total expense
* Generating account information
* Adding income and expense entries
* Accessing the account balance

This code demonstrates creating a class to model a real-world entity (a person's account) and manage its associated data and functionalities.

### Conclusion

This code demonstrates a solid understanding of object-oriented programming concepts like classes, inheritance, methods, and overriding. It also showcases the application of these concepts to solve practical problems like statistical analysis and managing financial data.
