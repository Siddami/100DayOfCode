# Country Display Exercise

## Summary

This exercise involves displaying a list of countries using JavaScript and CSS. The goal is to style various HTML elements dynamically and present the countries in a visually appealing layout.

## Thought Process

1. **Targeting and Styling Container**:
   - The container div is selected using `querySelector` and styled to create a flexible, centered layout. Properties such as `display: flex`, `flexWrap: wrap`, and `justifyContent: center` ensure a responsive grid-like structure.

2. **Configuring Countries Div**:
   - The countries div is also targeted and styled with `display: flex` and `justifyContent: flexstart` to align the content appropriately.

3. **Styling Headers and Paragraphs**:
   - The header elements (`h1`, `h4`) and paragraph tags (`p`) are selected and styled to set their font size, family, and margins. This ensures consistent typography across the elements.

4. **Styling Intro Div**:
   - The intro div is styled with centered text alignment and adjusted line spacing for better readability.

5. **Creating and Styling Country Elements**:
   - For each country, a new `span` element is created, styled, and appended to the container div. Styles include setting font size, background color, dimensions, margins, padding, box shadow, and borders to make each country name distinct and visually appealing.

6. **Updating Total Number of Countries**:
   - The total number of countries is counted and displayed in the `h4` element by updating its inner HTML.

## Code Implementation

```javascript
// Get the container div element using its class and style
const containerDiv = document.querySelector('.container');
containerDiv.style.display = 'flex';
containerDiv.style.flexWrap = 'wrap';
containerDiv.style.maxWidth = '1100px';
containerDiv.style.margin = '10px auto';
containerDiv.style.padding = '10px';
containerDiv.style.justifyContent = 'center';
containerDiv.style.overflow = 'scroll';

// Get countries div and style
const countriesDiv = document.querySelector('.countries');
countriesDiv.style.display = 'flex';
countriesDiv.style.justifyContent = 'flexstart';
containerDiv.style.height = '100vh';

// Get the elements in the intro div and style
const theH1 = document.querySelector('h1');
theH1.style.fontSize = '40px';
theH1.style.fontFamily = 'serif';
theH1.style.marginBottom = '0';

const theH4 = document.querySelector('h4');
theH4.style.marginTop = '0';
theH4.style.marginBottom = '5px';

const pTags = document.querySelectorAll('p');
pTags.forEach(p => {
    p.style.fontSize = '12px';
    p.style.fontFamily = 'serif';
});

// Get intro div using class and style
const introDiv = document.querySelector('.intro');
introDiv.style.textAlign = 'center';
introDiv.style.lineSpacing = '1.5';

// Display all countries
let count = 0;
countries.forEach(element => {
    const span = document.createElement('span');
    span.textContent = element.toUpperCase();
    count++; // Counts the number of countries
    containerDiv.appendChild(span);

    // Style each span
    span.style.fontSize = '16px';
    span.style.backgroundColor = 'white';
    span.style.display = 'block';
    span.style.textAlign = 'center';
    span.style.width = '13%';
    span.style.margin = '8px';
    span.style.padding = '10px';
    span.style.height = '10%';
    span.style.flexBasis = '120px';
    span.style.boxShadow = '2px 2px 2px grey';
    span.style.border = '1px solid grey';
    span.style.borderRadius = '5px';
});

// Change the total number element string
const string = `Total Number of Countries: ${count}`;
theH4.innerHTML = string;
