document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.gallery button');
    const images = document.querySelectorAll('.gallery .background img');
    const lightModeButton = document.querySelector('.light-mode-button'); // Make sure to update these class names to match your actual button class names
    const darkModeButton = document.querySelector('.dark-mode-button');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            alert(`تم تحميل الخلفية ${index + 1}!`);
        });
    });

    if (lightModeButton) {
        lightModeButton.addEventListener('click', () => toggleTheme('light'));
    }

    if (darkModeButton) {
        darkModeButton.addEventListener('click', () => toggleTheme('dark'));
    }
});

function toggleTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}
