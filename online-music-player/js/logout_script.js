const logoutButton = document.getElementById("logoutButton");

if (logoutButton) {
  logoutButton.addEventListener("click", () => {
      localStorage.removeItem("username");
      alert('You have been logged out.');
      window.location.href = '../registration.html';
  });
}