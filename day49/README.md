# Day 49 of #100DaysOfCode: DOM Manipulation and Dynamic UI

Today, I focused on mastering the Document Object Model (DOM) and applied what I learned to build a fully interactive web page using JavaScript. Below is the detailed explanation of my thought process and approach to the exercise.

## Thought Process

1. **Select Elements:** First, I selected the elements needed for dynamic content updates using `document.querySelector`.
    ```javascript
    const subtitle = document.querySelector('.subtitle')
    const feedback = document.querySelector('.feedback')
    const graphTitle = document.querySelector('.graph-title')
    const graphWrapper = document.querySelector('.graph-wrapper')
    const population = document.querySelector('.population')
    const languages = document.querySelector('.languages')
    ```

2. **Calculate Total Countries:** I looped through the `countries_data` to count the number of countries.
    ```javascript
    let count = 0
    countries_data.forEach(data => { count++; })
    feedback.textContent = `Currently, we have ${count} countries`
    ```

3. **World Population Calculation:** Summed up the population of all countries and calculated the maximum percentage for visualization.
    ```javascript
    let total = 0
    countries_data.forEach(data => { total += data.population; })
    const grandTotal = total.toLocaleString();
    const maxPercentage = (total - min) / (total - min) * 100;
    ```

4. **Top 10 Populated Countries:** Sorted the countries by population and selected the top 10.
    ```javascript
    countries_data.sort((a, b) => b.population - a.population);
    const top10PopulatedCountries = countries_data.slice(0, 10);
    ```

5. **Population Graph:** Created a dynamic graph representing the population data using JavaScript to manipulate the DOM.
    ```javascript
    function getPopulation() {
        graphTitle.textContent = '10 Most Populated Countries in the world';
        // DOM manipulation to create and style elements
        // Code omitted for brevity
    }
    ```

6. **Language Frequency:** Calculated the frequency of languages spoken across countries and identified the top 10.
    ```javascript
    const languageFrequency = {};
    countries_data.forEach(country => {
        country.languages.forEach(language => {
            if (languageFrequency[language]) {
                languageFrequency[language]++;
            } else {
                languageFrequency[language] = 1;
            }
        });
    });
    const sortedLanguages = Object.keys(languageFrequency).sort((a, b) => languageFrequency[b] - languageFrequency[a]);
    const mostSpokenLanguages = sortedLanguages.slice(0, 10).map(language => ({
        language: language,
        frequency: languageFrequency[language]
    }));
    ```

7. **Language Graph:** Similar to the population graph, created a dynamic graph for the top 10 languages.
    ```javascript
    function getLanguages() {
        graphTitle.textContent = '10 Most Spoken Languages in the world';
        // DOM manipulation to create and style elements
        // Code omitted for brevity
    }
    ```

8. **Event Listeners:** Added event listeners to buttons for interactive graph generation.
    ```javascript
    population.addEventListener('click', getPopulation)
    population.addEventListener('blur', () => {
        graphTitle.textContent = ''
        graphWrapper.innerHTML = ''
    })
    languages.addEventListener('click', getLanguages)
    languages.addEventListener('blur', () => {
        graphTitle.textContent = ''
        graphWrapper.innerHTML = ''
    })

This exercise helped me enhance my understanding of DOM manipulation and Object-Oriented Programming in JavaScript. Creating a fully dynamic website with JavaScript was an enlightening experience that showcased the power of front-end development.