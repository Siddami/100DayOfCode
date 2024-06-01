## Day 30: #100DaysOfCode - Local Storage Exercises and Key Takeaways

**Level 1:**

* **Storing User Data:**
    * Used `localStorage.setItem()` to store individual user information (first name, last name, age, country, city) in the browser's localStorage.
    * Verified the stored data using `console.log(localStorage)`.

**Level 2:**

* **Storing Objects:**
    * Created a student object containing various properties (first name, last name, age, skills, country, enrolled).
    * Stringified the student object using `JSON.stringify()`.
    * Stored the JSON string in localStorage using `localStorage.setItem()`.
    * Verified the stored data using `console.log(localStorage)`.

**Level 3:**

* **Complex Objects and Methods:**
    * Created a `PersonAccount` object with properties for income, expenses, and methods for calculations and account information.
        * `totalIncome` and `totalExpense` methods calculate the total income and expenses, respectively.
        * `accountInfo` method creates a formatted string containing account details.
        * `addIncome` and `addExpense` methods allow adding new income and expense entries.
        * `accountBalance` method calculates the remaining balance.
    * Stringified the `PersonAccount` object using `JSON.stringify()`.
    * Stored the JSON string in localStorage using `localStorage.setItem()`.

**Key Takeaways:**

* Local storage is a convenient way to store data persisting between browser sessions.
* We can store simple data types and complex objects (after stringifying them).
* Local storage is often used to store user preferences and application data.

**Remember:**

* Local storage data is specific to the browser and device.
* Consider security implications when storing sensitive data.

**Looking Forward:**

* Explore other browser storage options like session storage.
* Learn how to retrieve and manipulate data stored in local storage.

**This is just the beginning of my #100DaysOfCode journey!**

