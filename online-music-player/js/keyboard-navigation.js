document.addEventListener('DOMContentLoaded', () => {
  const inputFields = document.querySelectorAll('#myForm input[type="text"], #myForm input[type="email"], #myForm input[type="password"]');

  inputFields.forEach((input, index) => {
      input.addEventListener('keydown', (event) => {
          if (event.key === 'ArrowDown') {
              event.preventDefault();
              const nextIndex = (index + 1) % inputFields.length;
              inputFields[nextIndex].focus();
          } else if (event.key === 'ArrowUp') {
              event.preventDefault();
              const prevIndex = (index - 1 + inputFields.length) % inputFields.length;
              inputFields[prevIndex].focus();
          }
      });
  });
});