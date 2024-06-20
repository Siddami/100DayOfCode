# Portfolio Project - Day 51 of #100DaysOfCode

## Overview
Welcome to my portfolio project! This exercise is part of my #100DaysOfCode challenge, where I aim to enhance my frontend development skills. On Day 44, I continued my deep dive into the Document Object Model (DOM) and practiced manipulating the UI using JavaScript.

## Thought Process
### Objective
- Dynamically change the user interface using JavaScript.
- Create an interactive website with no hardcoded HTML content.

### Approach
1. **DOM Manipulation**: Utilized JavaScript to dynamically update the content and styles of the webpage.
2. **Interactive Elements**: Implemented event listeners to add interactivity to the page elements.
3. **OOP Practice**: Managed data using objects to practice Object-Oriented Programming concepts.

### Implementation
- **Dynamic Content Update**: Created an array of icons and descriptions. Updated the content of `.myDescription` and `.icons` every second using `setInterval`.
- **Interactive Styling**: Added `mouseenter` and `mouseout` events to elements with the class `.c` to change their background color and cursor style on hover.
- **Tech List Update**: Rotated through a list of technologies, changing the displayed text and color of the `.tech` element every second.

### Code Explanation
```javascript
const myDescription = document.querySelector('.myDescription');
const spanContent = document.querySelector('.icons');
const box = document.querySelectorAll('.c');

let current = 0;
function changeContent() {
    const iconsArray = ['💻', '🔥', '📚'];
    const contentArray = ['FrontEnd Developer', 'Passionate Individual', 'Constant Learner'];
    myDescription.textContent = contentArray[current];
    spanContent.textContent = iconsArray[current];
    current = (current + 1) % iconsArray.length;
}
setInterval(changeContent, 1000);

box.forEach(b => {
    b.addEventListener('mouseenter', () => {
        b.style.backgroundColor = 'rgb(194, 145, 131)';
        b.style.cursor = 'pointer';
    });
    b.addEventListener('mouseout', () => {
        b.style.backgroundColor = '';
        b.style.cursor = '';
    });
});

const tech = document.querySelector('.tech');
tech.style.fontSize = '2rem';
tech.style.fontWeight = 'bold';
const tenCourses = asabenehChallenges2020.keywords.slice(0, 11);

const colors = ['red', 'green', 'blue', 'purple', 'orange'];
let currentIndex = 0;
let currentStyleIndex = 0;
function changeStyle() {
    currentStyleIndex = (currentStyleIndex + 1) % colors.length;
    tech.textContent = tenCourses[currentIndex];
    currentIndex = (currentIndex + 1) % tenCourses.length;
    tech.style.color = colors[currentStyleIndex];
}
setInterval(changeStyle, 1000);