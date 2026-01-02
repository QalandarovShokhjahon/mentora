document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    // Toggle mobile menu
    function toggleMenu() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        // Toggle hamburger to X animation
        const spans = hamburger.querySelectorAll('span');
        if (hamburger.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    }

    // Close menu when clicking on a nav link
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) { // Only for mobile
                toggleMenu();
            }
        });
    });

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', toggleMenu);

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar .container') && navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Add active class to current page in navigation
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    navLinksItems.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add shadow to navbar on scroll (height fixed in CSS)
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.6)';
            } else {
                navbar.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.5)';
            }
        });
    }

    // Animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.course-card, .feature');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animation
    document.querySelectorAll('.course-card, .feature').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Run animation on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    // Add loading animation to buttons (except test buttons)
    const buttons = document.querySelectorAll('.btn:not(#start-test):not(#retake-test):not(#download-certificate):not(.test-card .btn)');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Only add loading effect to buttons that don't have a disabled class
            if (!this.classList.contains('disabled')) {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                this.classList.add('disabled');
                
                // Reset button after animation (simulated loading)
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.classList.remove('disabled');
                }, 1500);
            }
        });
    });
});