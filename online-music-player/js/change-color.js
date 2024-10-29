document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const toggleButton = document.getElementById('color-switcher');
    const mainBar = document.querySelector('.main-bar');
    const sideBar = document.querySelector('.side-bar');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    // Function to apply dark mode based on local storage
    function applyDarkMode() {
        const isDarkMode = localStorage.getItem('dark-mode') === 'true';
        if (isDarkMode) {
            body.classList.add('dark-mode');
            mainBar.classList.add('dark-mode');
            sideBar.classList.add('dark-mode');
            header.classList.add('dark-mode');
            footer.classList.add('dark-mode');
            toggleButton.textContent = 'Light Mode';
        } else {
            toggleButton.textContent = 'Dark Mode';
        }
    }

    // Apply dark mode on page load
    applyDarkMode();

    toggleButton.addEventListener('click', () => {
        // Toggle dark mode classes
        const isCurrentlyDarkMode = body.classList.toggle('dark-mode');
        mainBar.classList.toggle('dark-mode');
        sideBar.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        footer.classList.toggle('dark-mode');

        // Update local storage based on the new state
        localStorage.setItem('dark-mode', isCurrentlyDarkMode);

        // Update button text
        toggleButton.textContent = isCurrentlyDarkMode ? 'Light Mode' : 'Dark Mode';
    });
});


