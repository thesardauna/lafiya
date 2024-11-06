// script.js

// Function to scroll to a specific section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Dummy search function for 'Quick Search'
function performSearch() {
    const query = document.querySelector('#quick-search input').value;
    alert('Searching for: ' + query);
}

// Event listeners for buttons
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#quick-search button').addEventListener('click', performSearch);
});
