# Dynamic Number Styling Exercise

## Description

This project dynamically generates numbers from 1 to 100, appends them to a container div, and styles them based on whether they are even, odd, or prime.

## Thought Process

1. **Setup**:
   - Select and style the main elements: `h1`, `h4`, `p`, and `div` container.
   - Center-align the text of the headings and paragraph, and underline the paragraph text.

2. **Prime Number Function**:
   - Implement a function `isPrime` to check if a number is prime by iterating from 2 up to the square root of the number.

3. **Generating Numbers**:
   - Use a loop to create numbers from 1 to 100.
   - For each number, create a `span` element, style it, and set its text content.

4. **Styling Numbers**:
   - Apply different background colors based on the number type:
     - Green for even numbers.
     - Yellow for odd numbers.
     - Red for prime numbers.

5. **Appending to Container**:
   - Append each styled `span` to the container div.
   - Style the container to display flex, wrap items, and center them with appropriate margins and padding.

## Code Implementation

```javascript
// Get the div container and other elements then style
const container = document.querySelector('div')
const h1E = document.querySelector('h1')
const h4E = document.querySelector('h4')
const pE = document.querySelector('p')
const body = document.querySelector('body')

h1E.style.textAlign = 'center'
h4E.style.textAlign = 'center'
h4E.style.textDecoration = 'underline'
pE.style.textAlign = 'center'
pE.style.textDecoration = 'underline'

// Create a function to find prime numbers
function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Create numbers between 1 to 100 using a loop then append
for (let i = 1; i <= 100; i++) {
    const span = document.createElement('span');
    span.className = 'numbers'
    span.style.fontSize = '30px'
    span.style.color = 'white'
    span.style.display = 'block'
    span.style.textAlign = 'center'
    span.style.width = '12%'
    span.style.margin = '5px'
    span.style.padding = '10px'
    span.style.fontWeight = 'bold'

    if (i % 2 === 0) {
        span.style.backgroundColor = 'green'
    } else if (isPrime(i)) {
        span.style.backgroundColor = 'red'
    } else {
        span.style.backgroundColor = 'yellow'
    }

    span.textContent = i
    container.appendChild(span)
}

// Style div
container.style.display = 'flex'
container.style.flexWrap = 'wrap'
container.style.width = '80%'
container.style.margin = '8px auto'
container.style.padding = '10px'
container.style.justifyContent = 'space-evenly'
container.style.alignItems = 'center'
```

## Summary

This project demonstrates how to dynamically create and style HTML elements using JavaScript. The key steps include selecting and styling elements, defining a prime-checking function, creating and styling number elements, and appending them to a container div. This exercise helped reinforce understanding of DOM manipulation, conditional styling, and prime number logic.
