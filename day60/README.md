# Day 60 100DaysOfCode Flex Panels Exercise

## Overview

This project implements an interactive flex panel gallery using HTML, CSS, and JavaScript. The main goal was to create panels that expand and reveal text on click, providing a visually engaging user experience.

## Approach

### HTML Structure
I began by defining the HTML structure, which consists of a container `div` with a class of "panels" that holds multiple "panel" `div`s. Each panel contains three `p` elements with motivational coding phrases.

### CSS Styling
In the CSS, I set up the base styles for the HTML and body, then focused on styling the panels. Key elements include:
- Flexbox for layout (`display: flex;`) to arrange the panels horizontally.
- Transition effects on font size, flex, and background for smooth animations.
- Specific background images for each panel.

### JavaScript Interactivity
The JavaScript adds interactivity:
1. **Selecting Panels:** I used `document.querySelectorAll` to select all elements with the class "panel".
2. **Toggle Open:** Defined a function `toggleOpen` to toggle the 'open' class on panels, expanding them.
3. **Toggle Active:** Defined a function `toggleActive` to toggle the 'open-active' class after the transition ends, which animates the text within the panels.
4. **Event Listeners:** Added click and transitionend event listeners to each panel, triggering the respective functions.

## Thought Process

The main challenge was ensuring smooth transitions and responsive interaction. I used flexbox for layout simplicity and transitions for animations. By separating the open and active states, I achieved a multi-stage animation, making the experience more dynamic and visually appealing.
