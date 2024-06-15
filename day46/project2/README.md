# Keypress Info Project DAY46 100DaysOfCode 

## Project Overview
This project was created as part of my #100DaysOfCode challenge, specifically focusing on DOM manipulation and JavaScript event handling. The goal was to build a dynamic interface that identifies and displays the key pressed on the keyboard and its ASCII code.

## Thought Process and Approach

### Initial Setup
1. **Selecting and Styling Elements**:
   - Selected the main container and paragraph elements using `querySelector`.
   - Set the initial text content for the `info` paragraph to guide the user.

2. **Styling the Container**:
   - Applied flexbox styles to center the content both vertically and horizontally, making it responsive and visually appealing.

3. **Styling the Intro Paragraph (`info`)**:
   - Styled the `info` paragraph with flex properties, border, box shadow, font size, and padding to make it stand out and be user-friendly.

### Functionality
1. **Event Listener for Keypress**:
   - Added an event listener for the `keydown` event on the `document.body`.
   - Updated the `info` paragraph to display the key pressed using `innerHTML` to include a styled `span`.
   - Displayed the ASCII code of the key pressed in the `ascii` paragraph.

2. **Styling the ASCII Display**:
   - Styled the `ascii` paragraph to match the `info` paragraph, ensuring consistency in design.

### Key Learning Points
- Enhanced my understanding of DOM manipulation and how to dynamically change content based on user interactions.
- Improved my skills in using event listeners to create interactive web pages.
- Learned to style elements dynamically to enhance user experience.

### Summary
On day 46 of my #100DaysOfCode challenge, I created a keypress info tool that uses JavaScript event listeners to update the UI based on the key pressed. This project helped me better understand DOM manipulation and event handling, showcasing the dynamic capabilities of JavaScript.
