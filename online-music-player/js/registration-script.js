// Authentication script - auth.js

// Function to login
function login(username) {
    localStorage.setItem("username", username);
    displayGreeting();
}

// Function to logout
function logout() {
    localStorage.removeItem("username");
    displayGreeting();
}

// Check if user is already logged in
function displayGreeting() {
    const greeting = document.getElementById("greeting");
    const username = localStorage.getItem("username");

    if (username) {
        greeting.innerText = `Welcome, ${username}!`;
    } else {
        greeting.innerText = "Please log in";
    }
}

// Example Login Form Submission Handler
document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("name").value;
    if (username) {
        login(username);
    }
});

// Call displayGreeting() on page load
displayGreeting();
