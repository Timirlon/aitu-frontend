document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  const greeting = document.getElementById("greeting");
  const topText = document.getElementById("top-text");
  const nameInput = document.getElementById("name");
  const logoutButton = document.getElementById("logoutButton");

  // Check if the user is already logged in
  const savedUser = localStorage.getItem("username");
  if (savedUser) {
      form.style.display = "none";
      topText.innerText = `Welcome back, ${savedUser}!`;
      logoutButton.style.display = "inline-block"; // Show logout button
  }

  // Handle form submission for registration
  form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Get form values
      const username = nameInput.value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      // Validate form inputs
      if (!username || !email || password !== confirmPassword) {
          alert("Please ensure all fields are filled correctly.");
          return;
      }

      // Save user info in local storage
      localStorage.setItem("username", username);

      // Display welcome message, hide form, and show logout button
      form.style.display = "none";
      topText.innerText = `Welcome, ${username}!`;
      logoutButton.style.display = "inline-block";
  });

  // Logout functionality
  logoutButton.addEventListener("click", () => {
      localStorage.removeItem("username");
      location.reload(); // Reload page to reset form and logout button visibility
  });
});


