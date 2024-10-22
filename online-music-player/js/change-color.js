document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('color-switcher');
  const mainBar = document.querySelector('.main-bar');
  const sideBar = document.querySelector('.side-bar');
  const optionListText = document.querySelector('.option-list a');
  const header = document.header;
  const footer = document.footer;

  toggleButton.addEventListener('click', () => {
      mainBar.classList.toggle('dark-mode');
      sideBar.classList.toggle('dark-mode');
      optionListText.classList.toggle('dark-mode');
      
      if (mainBar.classList.contains('dark-mode') && sideBar.classList.contains('dark-mode')) {
          toggleButton.textContent = 'Switch to Light Mode';
      } else {
          toggleButton.textContent = 'Switch to Dark Mode';
      }
  });
});
