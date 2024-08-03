// Get the buttons and theme-related elements
const lightModeButton = document.getElementById('light-mode');
const darkModeButton = document.getElementById('dark-mode');
const body = document.body;

// Function to toggle between light and dark modes
function toggleTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}


// Add event listeners for the theme toggle buttons
lightModeButton.addEventListener('click', () => toggleTheme('light'));
darkModeButton.addEventListener('click', () => toggleTheme('dark'));

// Function to download the image
function downloadImage(imageUrl) {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = imageUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Add event listeners to all download buttons
document.querySelectorAll('button[data-image-url]').forEach(button => {
    button.addEventListener('click', function() {
        const imageUrl = this.getAttribute('data-image-url');
        if (imageUrl) {
            downloadImage(imageUrl);
        }
    });
});
