document.getElementById('registration-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get input values
  const username = document.getElementById('name').value.trim();
  const password = document.getElementById('password').value.trim();

  // Retrieve stored users
  const users = JSON.parse(localStorage.getItem('users')) || {};

  // Validation
  if (!users[username] || users[username].password !== password) {
      alert('Invalid username or password. Please register first.');
      return;
  }

  // Store the username in localStorage
  localStorage.setItem('loggedInUser', username);

  alert('Login successful!');
  // Redirect to the profile page
  window.location.href = 'profile-page.html';
});

