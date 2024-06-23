    function playSound(e){
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

      console.log(audio);
      if(!audio) return;//stop the function from running all together.
      audio.currentTime = 0.5; //rewind to the start
      audio.play();
      key.classList.add('playing');
    }

    function removeTransition(e){
      if(e.propertyName !== 'transform') return; //skip it if its not a transform
      this.classList.remove('playing');
    };

    const keys = document.querySelectorAll('.key')
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))
    window.addEventListener('keydown',playSound);

    document.addEventListener('DOMContentLoaded', (event) => {
  // Create a hidden input field
  const hiddenInput = document.createElement('input');
  hiddenInput.type = 'text';
  hiddenInput.style.position = 'absolute';
  hiddenInput.style.opacity = 0;
  hiddenInput.style.height = '0px';
  hiddenInput.style.width = '0px';
  hiddenInput.style.border = 'none';
  hiddenInput.style.outline = 'none';

  // Append the hidden input field to the body
  document.body.appendChild(hiddenInput);

  // Focus on the hidden input field to bring up the keyboard
  hiddenInput.focus();

  // Optionally, handle input and blur events
  hiddenInput.addEventListener('focus', () => {
    console.log('Keyboard is up');
  });

  hiddenInput.addEventListener('blur', () => {
    console.log('Keyboard is down');
    // Optionally, remove the hidden input after use
    document.body.removeChild(hiddenInput);
  });
});
