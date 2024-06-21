# Leaderboard Project - Day 51 of #100DaysOfCode

## Overview
Today, I continued my study of the Document Object Model (DOM) and implemented a project to practice what I learned. I created a fully interactive leaderboard using only JavaScript for the UI, allowing me to enhance my skills in DOM manipulation and Object-Oriented Programming (OOP).

## Thought Process
1. **DOM Manipulation**: I used `document.querySelector` to select various elements and `createElement` to dynamically create new elements.
2. **Event Handling**: I added event listeners for button clicks to handle user interactions such as adding a new player or modifying scores.
3. **Dynamic Sorting**: I implemented sorting of players based on their scores to keep the leaderboard updated in real-time.
4. **OOP Practice**: I managed the leaderboard data using objects, which helped me practice OOP concepts.
5. **Responsive Design**: The leaderboard adjusts to different screen sizes, ensuring a good user experience on both desktop and mobile devices.

## Code Explanation
- **Element Selection**: Retrieved elements from the DOM using `querySelector`.
- **Current Time Calculation**: Used `Date` object to format and display the current time.
- **Playboard Management**: Created player boards dynamically and appended them to the leaderboard.
- **Score Adjustment**: Added event listeners for score increment and decrement buttons, with real-time sorting of the leaderboard.
- **Validation**: Ensured all input fields are filled before adding a new player, displaying a warning if not.
