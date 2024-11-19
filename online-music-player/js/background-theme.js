document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const darkModeCheckbox = document.querySelector('.switch input[type="checkbox"]');
    const mainBar = document.querySelector('.main-bar');
    const sideBar = document.querySelector('.side-bar');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const searchButton = document.getElementById('search'); // Correct reference

    // Function to apply dark mode based on local storage
    function applyDarkMode() {
        const isDarkMode = localStorage.getItem('dark-mode') === 'true';
        darkModeCheckbox.checked = isDarkMode; // Sync checkbox with dark mode state

        if (isDarkMode) {
            body.classList.add('dark-mode');
            mainBar.classList.add('dark-mode');
            sideBar.classList.add('dark-mode');
            header.classList.add('dark-mode');
            footer.classList.add('dark-mode');

            if (searchButton) {
                searchButton.className = "btn btn-outline-light";
            }
        } else {
            body.classList.remove('dark-mode');
            mainBar.classList.remove('dark-mode');
            sideBar.classList.remove('dark-mode');
            header.classList.remove('dark-mode');
            footer.classList.remove('dark-mode');

            if (searchButton) {
                searchButton.className = "btn btn-outline-dark";
            }
        }
    }

    // Apply dark mode on page load
    applyDarkMode();

    // Toggle dark mode on checkbox change
    darkModeCheckbox.addEventListener('change', () => {
        const isDarkMode = darkModeCheckbox.checked;

        // Toggle dark mode classes
        body.classList.toggle('dark-mode', isDarkMode);
        mainBar.classList.toggle('dark-mode', isDarkMode);
        sideBar.classList.toggle('dark-mode', isDarkMode);
        header.classList.toggle('dark-mode', isDarkMode);
        footer.classList.toggle('dark-mode', isDarkMode);

        // Change class of search button
        if (searchButton) {
            searchButton.className = isDarkMode ? "btn btn-outline-light" : "btn btn-outline-dark";
        }

        // Update local storage based on the new state
        localStorage.setItem('dark-mode', isDarkMode);
    });
});



