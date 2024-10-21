// analytics.js

// Function to track page views
function trackPageView(page) {
    console.log(`Page viewed: ${page}`);
    // Replace with actual tracking code (e.g., Google Analytics)
    // Example: gtag('config', 'GA_MEASUREMENT_ID', {'page_path': page});
}

// Function to track button clicks
function trackButtonClick(buttonId) {
    console.log(`Button clicked: ${buttonId}`);
    // Replace with actual tracking code
    // Example: gtag('event', 'click', {'event_category': 'button', 'event_label': buttonId});
}

// Function to track form submissions
function trackFormSubmission(formId) {
    console.log(`Form submitted: ${formId}`);
    // Replace with actual tracking code
    // Example: gtag('event', 'submit', {'event_category': 'form', 'event_label': formId});
}

// Function to initialize analytics tracking
function initAnalytics() {
    // Track the initial page view
    const page = window.location.pathname;
    trackPageView(page);

    // Add event listeners to buttons (example)
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            trackButtonClick(this.id);
        });
    });

    // Add event listener to forms (example)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent actual submission for tracking
            trackFormSubmission(this.id);
            // Proceed with form submission if needed
            // this.submit();
        });
    });
}

// Initialize analytics on page load
document.addEventListener('DOMContentLoaded', initAnalytics);
