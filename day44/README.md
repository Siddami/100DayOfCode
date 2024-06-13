# Day 44 of #100DaysOfCode: DOM Manipulation Project

## Overview
On day 44 of my #100DaysOfCode challenge, I focused on deepening my understanding of the Document Object Model (DOM) and JavaScript. I created a project to dynamically build a website entirely from JavaScript, leveraging DOM manipulation techniques. This exercise allowed me to practice both DOM manipulation and Object-Oriented Programming (OOP).

## Thought Process

### Initial Setup
- **Container Selection**: I started by selecting the container div element using `document.querySelector('.wrapper')`.

### Dynamic Element Creation
- **Header Creation**: Created an `h1` element and set its content with a combination of text and a span element, then appended it to the container.
- **Styling the Span**: Styled the span element to change its color every second using an array of colors and `setInterval`.

### Adding Content
- **Paragraphs**: Added paragraphs with dynamic content, including the current date, styled accordingly.
- **Unordered List**: Created an unordered list to display challenges, each with nested details and topics, styled based on their status.

### Advanced Styling
- **Challenge Items**: Styled each challenge item conditionally based on its status (Done, Ongoing, Not Started).

### Author Information
- **Author Details**: Added author information including social links, bio, titles, skills, and qualifications, each styled for a consistent look.

### Keywords
- **Keywords**: Displayed keywords with dynamic background colors generated using a random hex code function.

