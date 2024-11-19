document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");
    const nameInput = document.getElementById("name");

    // Check if the user is already logged in
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
        window.location.href = 'profile-page.html';
        return; // Stop further script execution
    }

    // Handle form submission for registration
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        const username = nameInput.value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Validate form inputs
        if (!username || !email || password !== confirmPassword) {
            alert("Please ensure all fields are filled correctly.");
            return;
        }

        // Retrieve users from localStorage or initialize an empty object
        const users = JSON.parse(localStorage.getItem('users')) || {};

        // Check if username is already registered
        if (users[username]) {
            alert('This username is already registered. Try logging in.');
            return;
        }

        // Save user info in localStorage
        users[username] = { email, password };
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem("username", username);

        alert('Registration successful! Redirecting to your profile page.');

        // Redirect to profile page
        window.location.href = 'profile-page.html';
    });
});



