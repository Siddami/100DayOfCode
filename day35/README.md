## Day 35: #100DaysOfCode - Fetching and Processing APIs with JavaScript

**Level 1: Exploring the Countries API**

* **Fetching Data:**
  * Used `fetch` API to retrieve data from the Countries API (`https://restcountries.com/v2/all`).
  * Processed the response using `then` and parsed the JSON data.
* **Extracting Information:**
  * Iterated through each country object in the response data.
  * Extracted and printed relevant information like name, capital, languages, population, and area.

**Level 2: Cat Facts and Fun**

* **Async/Await for Cats API:**
  * Utilized `async/await` syntax for a cleaner approach to fetching cat data.
* **Cat Names:**
  * Fetched data from the Cats API (`https://api.thecatapi.com/v1/breeds`).
  * Extracted and printed the name of each cat breed.
* **Average Weight:**
  * Fetched cat data again and extracted the average weight in metric units for each breed.

**Level 3: Advanced API Processing**

* **Finding Largest Countries:**
  * Fetched data from the Countries API and sorted countries based on area (descending).
  * Sliced the sorted data to retrieve the top 10 largest countries by area.
  * Printed the names of the 10 largest countries.
* **Counting Official Languages:**
  * Fetched data from the Countries API and processed each country's official languages.
  * Used `filter` to extract languages with valid names.
  * Used `concat` to combine languages from all countries into a single list.
  * Removed duplicates using `Set` and counted the total number of unique official languages.

**Key Takeaways:**

* The `fetch` API provides a powerful way to retrieve data from external sources.
* JSON parsing is essential for working with data retrieved from APIs.
* Asynchronous programming with `async/await` improves code readability and flow.
* Data manipulation techniques like sorting, filtering, and counting are valuable for processing API responses.

**Looking Forward:**

* Explore working with different APIs and data formats.
* Practice building user interfaces to display fetched data.
* Experiment with more advanced data manipulation techniques.

**This is just the beginning of my #100DaysOfCode journey!**
