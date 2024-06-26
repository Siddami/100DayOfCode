### Documentation: Day 57 100DaysOfCode

#### Overview
This project is a simple web page that demonstrates how to use JavaScript to update CSS variables dynamically. It allows users to interact with a set of controls (range inputs and a color picker) to adjust the spacing, blur, and base color of an image. The web page features responsive design elements to adapt to different screen sizes.

#### HTML Structure
The HTML file sets up the basic structure and content of the web page.

1. **HTML Declaration and Language Attribute**:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    ```
    - Declares the document type and sets the language to English.

2. **Head Section**:
    ```html
    <head>
      <meta charset="UTF-8">
      <title>Scoped CSS Variables and JS</title>
      <link rel="icon" href="https://fav.farm/✅" />
      <link rel="stylesheet" href="style.css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    ```
    - Includes metadata, a title, a favicon, and a link to the external CSS file. The viewport meta tag ensures the page is responsive on mobile devices.

3. **Body Section**:
    ```html
    <body>
      <h2>Update CSS Variables with <span class='hl'>JS</span></h2>
      <div class="controls">
        <label for="spacing">Spacing:</label>
        <input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">
        <label for="blur">Blur:</label>
        <input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px">
        <label for="base">Base Color</label>
        <input id="base" type="color" name="base" value="#ffc600">
      </div>
      <img src="./day57img.jpg" alt="Responsive Image">
      <script>
        const inputs = document.querySelectorAll('.controls input');
        function handleUpdate() {
          const suffix = this.dataset.sizing || '';
          document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
        }
        inputs.forEach(input => input.addEventListener('change', handleUpdate));
        inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
      </script>
    </body>
    ```
    - Contains the main content, including a heading, a set of input controls, and an image. The script section at the bottom handles the dynamic updating of CSS variables.

#### JavaScript Functionality
The JavaScript code dynamically updates CSS variables based on user input.

1. **Selecting Inputs**:
    ```javascript
    const inputs = document.querySelectorAll('.controls input');
    ```
    - Selects all input elements within the controls div.

2. **Handle Update Function**:
    ```javascript
    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }
    ```
    - Updates the corresponding CSS variable with the new value from the input. If a data-sizing attribute is present, it appends the unit (e.g., 'px').

3. **Event Listeners**:
    ```javascript
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
    ```
    - Adds event listeners to update the CSS variables on both change and mousemove events, ensuring real-time updates as the user interacts with the inputs.

#### CSS Styling
The CSS file defines the styles and CSS variables used in the project.

1. **Root Variables**:
    ```css
    :root {
      --base: #ffc600;
      --spacing: 10px;
      --blur: 10px;
    }
    ```
    - Defines three CSS variables for base color, spacing, and blur.

2. **Body and Element Styles**:
    ```css
    body {
      text-align: center;
      background: #193549;
      color: white;
      font-family: 'helvetica neue', sans-serif;
      font-weight: 100;
      font-size: 20px;
      margin: 0;
      padding: 0;
    }
    h2 {
      font-size: 2em;
    }
    .hl {
      color: var(--base);
    }
    .controls {
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .controls label {
      margin-top: 10px;
    }
    input[type="range"] {
      width: 80%;
      max-width: 300px;
    }
    input[type="color"] {
      width: 50px;
      height: 50px;
      border: none;
      margin-top: 10px;
    }
    img {
      padding: var(--spacing);
      background: var(--base);
      filter: blur(var(--blur));
      max-width: 90%;
      height: auto;
    }
    ```

3. **Responsive Design**:
    ```css
    @media (min-width: 600px) {
      body {
        font-size: 30px;
      }
      .controls {
        flex-direction: row;
        justify-content: space-around;
      }
      .controls label {
        margin: 0 20px;
      }
      input[type="range"] {
        width: 150px;
      }
      input[type="color"] {
        width: 50px;
        height: 50px;
      }
      img {
        width: 220px;
      }
    }
    @media (min-width: 1024px) {
      body {
        font-size: 40px;
      }
      img {
        width: 300px;
      }
    }
    ```
    - Adjusts styles for larger screens, changing font sizes, input widths, and image sizes to ensure a consistent and responsive design.

### Key Features and Functionalities
1. **Dynamic CSS Variable Updates**: 
   - Users can adjust the spacing, blur, and base color of an image using range inputs and a color picker.
   
2. **Real-Time Updates**:
   - Changes to input values immediately reflect on the image due to event listeners for both change and mousemove events.

3. **Responsive Design**:
   - The layout and styles adapt to different screen sizes, ensuring usability across devices.

4. **Interactive User Interface**:
   - The combination of HTML, CSS, and JavaScript provides an interactive experience, demonstrating the power of scoped CSS variables controlled via JavaScript.

5. **Clean and Organized Code**:
   - Separation of concerns is maintained with HTML for structure, CSS for styling, and JavaScript for behavior, making the code easier to manage and understand.

By following this thought process, the code effectively demonstrates the interplay between HTML, CSS, and JavaScript to create a dynamic and responsive web page.