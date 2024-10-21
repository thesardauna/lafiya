// main.js

// DOMContentLoaded Event to ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    /* Mobile Navigation Toggle */
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function () {
            navLinks.classList.toggle('nav-open');
            mobileNavToggle.classList.toggle('toggle-open');
        });
    }

    /* Smooth Scrolling for Anchor Links */
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjusts for the header height
                    behavior: 'smooth'
                });
            }
        });
    });

    /* Form Validation for Contact Form */
    const contactForm = document.querySelector('#contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            const name = document.querySelector('#name').value.trim();
            const email = document.querySelector('#email').value.trim();
            const message = document.querySelector('#message').value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (name === '' || !emailPattern.test(email) || message === '') {
                event.preventDefault();
                alert('Please fill out all required fields with valid information.');
            }
        });
    }

    /* Modal Handling for Telemedicine */
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const modalCloseBtns = document.querySelectorAll('.modal-close');
    const modals = document.querySelectorAll('.modal');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            const modalId = trigger.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('modal-open');
            }
        });
    });

    modalCloseBtns.forEach(button => {
        button.addEventListener('click', function () {
            const modal = button.closest('.modal');
            modal.classList.remove('modal-open');
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.classList.remove('modal-open');
            }
        });
    });
});

/* Utility Function for Opening and Closing Modals */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('modal-open');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('modal-open');
    }
}

/* Sticky Header on Scroll */
window.onscroll = function () {
    const header = document.querySelector('.header');
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
};

/* Back to Top Button */
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
