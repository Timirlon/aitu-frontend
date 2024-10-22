document.getElementById('myForm').addEventListener('submit', function (e) {
  e.preventDefault();
  let isValid = true;
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirmPassword').value;

  if (!name) {
      document.getElementById('nameError').textContent = ' Name is required.';
      isValid = false;
  } else {
      document.getElementById('nameError').textContent = '';
  }

  if (!email) {
      document.getElementById('emailError').textContent = ' Email is required.';
      isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
      document.getElementById('emailError').textContent = ' Invalid email format.';
      isValid = false;
  } else {
      document.getElementById('emailError').textContent = '';
  }

  if (password.length < 6) {
      document.getElementById('passwordError').textContent = ' Password must be at least 6 characters long.';
      isValid = false;
  } else {
      document.getElementById('passwordError').textContent = '';
  }

  if (password !== confirmPassword) {
      document.getElementById('confirmPasswordError').textContent = ' Passwords do not match.';
      isValid = false;
  } else {
      document.getElementById('confirmPasswordError').textContent = '';
  }

  if (isValid) {
      alert('Form submitted successfully!');
  }
});