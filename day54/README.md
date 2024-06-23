# Project README

## Overview
On Day 54 of my #100DaysOfCode challenge, I continued my study of the Document Object Model (DOM) and JavaScript to enhance my User Interface (UI) skills. I created a project where I built an interactive website entirely through JavaScript, dynamically generating HTML elements and styling. This project also allowed me to practice Object-Oriented Programming (OOP) concepts by managing page data with an object.

## Thought Process

### JavaScript Code Explanation
1. **Event Handling**: 
    - `playSound(e)`: This function is triggered when a key is pressed. It selects the corresponding audio element and key element based on the pressed key's code (`e.keyCode`).
    - Checks if the audio element exists. If not, the function stops (`if(!audio) return;`).
    - Rewinds the audio to `0.5` seconds and plays it.
    - Adds a 'playing' class to the key element for visual feedback.

2. **Transition Handling**: 
    - `removeTransition(e)`: This function removes the 'playing' class once the transition ends. It ensures it only acts on 'transform' transitions.

3. **Event Listeners**: 
    - `keys.forEach(...)`: Adds an event listener to each key element to handle the end of transitions.
    - `window.addEventListener('keydown', playSound)`: Listens for keydown events to trigger the `playSound` function.

4. **DOM Content Loaded**: 
    - Creates a hidden input field to bring up the keyboard on page load, enhancing user interaction on mobile devices.

### HTML Structure
- **Keys Layout**: A series of div elements with `data-key` attributes, containing `kbd` elements for the key labels and `span` elements for the sound labels.
- **Audio Elements**: Audio elements linked to specific keys via `data-key` attributes.

### CSS Styling
- **Layout and Styling**: Uses flexbox for layout, with styles for key elements including transitions and visual feedback for the 'playing' state.
- **Visual Effects**: Adds scale transformation and shadow effects to enhance the user interface.
