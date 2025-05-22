// Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    if (entry.target.classList.contains('feature')) {
                        entry.target.classList.add('animate');
                    }
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.fade-in, .feature').forEach(el => {
            observer.observe(el);
        });

        // Add subtle mouse movement effect
        document.addEventListener('mousemove', (e) => {
            const shapes = document.querySelectorAll('.shape');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.5;
                const translateX = (x - 0.5) * speed * 20;
                const translateY = (y - 0.5) * speed * 20;
                shape.style.transform = `translate(${translateX}px, ${translateY}px)`;
            });
        });

        // Modal Functions
        function openModal(modalId) {
            const modal = document.getElementById(modalId);
            modal.style.display = 'flex';
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        }

        function closeModal(modalId) {
            const modal = document.getElementById(modalId);
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
                // Reset forms and messages
                const form = modal.querySelector('form');
                if (form) form.reset();
                hideMessages(modalId);
            }, 300);
        }

        function switchModal(fromModal, toModal) {
            closeModal(fromModal);
            setTimeout(() => {
                openModal(toModal);
            }, 300);
        }

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                const modalId = e.target.id;
                closeModal(modalId);
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const openModals = document.querySelectorAll('.modal.show');
                openModals.forEach(modal => {
                    closeModal(modal.id);
                });
            }
        });

        // Form Handlers
        function handleLogin(event) {
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;

            // Simulate login process
            setTimeout(() => {
                // For demo purposes, accept any email/password combination
                if (email && password) {
                    showMessage('loginSuccess');
                    setTimeout(() => {
                        closeModal('loginModal');
                        // You would typically redirect or update UI here
                        alert('Login successful! Welcome back.');
                    }, 1500);
                } else {
                    showMessage('loginError');
                }
            }, 500);
        }

        function handleRegister(event) {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            const confirmPassword = form.confirmPassword.value;

            // Validate passwords match
            if (password !== confirmPassword) {
                showMessage('registerError');
                document.getElementById('registerError').textContent = 'Passwords do not match.';
                return;
            }

            // Simulate registration process
            setTimeout(() => {
                if (name && email && password) {
                    showMessage('registerSuccess');
                    setTimeout(() => {
                        closeModal('registerModal');
                        // You would typically redirect or auto-login here
                        alert('Registration successful! Welcome to Zen.');
                    }, 1500);
                } else {
                    showMessage('registerError');
                    document.getElementById('registerError').textContent = 'Please fill in all fields.';
                }
            }, 500);
        }

        function socialLogin(provider) {
            // Simulate social login
            alert(`Social login with ${provider} - This would redirect to ${provider}'s OAuth flow in a real application.`);
        }

        function showMessage(messageId) {
            // Hide all messages first
            const modal = document.getElementById(messageId).closest('.modal');
            const messages = modal.querySelectorAll('.success-message, .error-message');
            messages.forEach(msg => msg.style.display = 'none');
            
            // Show the specific message
            document.getElementById(messageId).style.display = 'block';
        }

        function hideMessages(modalId) {
            const modal = document.getElementById(modalId);
            const messages = modal.querySelectorAll('.success-message, .error-message');
            messages.forEach(msg => msg.style.display = 'none');
        }
