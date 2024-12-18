// Function to apply dark mode based on preference
function applyDarkMode(isDarkMode) {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        document.getElementById('darkModeToggle').checked = true;
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        document.getElementById('darkModeToggle').checked = false;
    }
}

// Check user preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    applyDarkMode(isDarkMode);

    // Add event listener to toggle button
    document.getElementById('darkModeToggle').addEventListener('change', (event) => {
        const isDark = event.target.checked;
        localStorage.setItem('darkMode', isDark);
        applyDarkMode(isDark);
    });
});
