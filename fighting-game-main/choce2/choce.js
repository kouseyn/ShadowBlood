document.addEventListener('DOMContentLoaded', function() {
    const characters = document.querySelectorAll('.character');
    const startButton = document.getElementById('start-button');
  
    let selectedCharacter = null;
  
    // Add click event listeners to each character
    characters.forEach(function(character) {
      character.addEventListener('click', function() {
        // Remove the active class from all characters
        characters.forEach(function(character) {
          character.classList.remove('active');
        });
  
        // Add the active class to the clicked character
        character.classList.add('active');
  
        // Store the selected character
        selectedCharacter = character.querySelector('img').getAttribute('data-character');
      });
    });
  
    // Add click event listener to the start button
    startButton.addEventListener('click', function() {
      if (selectedCharacter !== null) {
        // Redirect to index.html with the selected character as a query parameter
        window.location.href = `index.html?character=${selectedCharacter}`;
      } else {
        alert('Please select a character before starting the battle.');
      }
    });
  });
  