## Day 30: #100DaysOfCode - JSON Exercises and Key Takeaways

**Level 1:**

* **Stringifying:**
    * Converted an array of skills (`['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']`) to JSON using `JSON.stringify(skills, null, 2)`.
    * Stringified a number (`250`) and a boolean (`true`) using the same method.
    * Stringified an object (`{firstName:'Asabeneh', lastName:'Yetayehe', age:250, isMarried:true, skills:['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']}`) with a custom replacer function to uppercase all string values.
* **Key Takeaways:**
    * `JSON.stringify()` converts JavaScript objects into JSON format.
    * The second argument (`null`) is used to avoid circular references.
    * The third argument (`2`) is used for indentation.
    * Custom replacer functions can be used to modify values during stringification.

**Level 2:**

* **Stringifying with Specific Properties:**
    * Stringified the same object (`student`) again, but only including the `firstName`, `lastName`, and `skills` properties.
* **Key Takeaways:**
    * You can specify which properties to include during stringification using an array of property names.

**Level 3:**

* **Parsing JSON:**
    * Parsed a JSON string (`txt`) containing an object with user information.
* **Finding User with Most Skills:**
    * Iterated through the parsed object and found the user with the most skills.
* **Key Takeaways:**
    * `JSON.parse()` converts JSON strings back into JavaScript objects.
    * You can iterate through object properties and perform calculations or comparisons.

**Overall Takeaways:**

* JSON is a fundamental data format for exchanging information between web applications and servers.
* Understanding how to work with JSON is essential for frontend developers.
* Continuous practice and exploration are key to mastering JSON manipulation.
