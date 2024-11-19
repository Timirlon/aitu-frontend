// Function to set greeting based on time
function setGreeting(name = '') {
  const greetingElement = document.getElementById('greeting');
  const currentHour = new Date().getHours();
  let timeOfDay;

  if (currentHour < 12) {
      timeOfDay = 'Good morning';
  } else if (currentHour < 18) {
      timeOfDay = 'Good afternoon';
  } else {
      timeOfDay = 'Good evening';
  }

  greetingElement.textContent = `${timeOfDay}${name ? ', ' + name : ''}! Welcome to MuseBox.`;
}

setGreeting();

document.getElementById('name').addEventListener('input', (event) => {
  const nameInput = event.target.value.trim();

  if (nameInput.length > 0) {
      setGreeting(nameInput); 
  } else {
      setGreeting(); // Reset to general greeting if name is cleared
  }
});
