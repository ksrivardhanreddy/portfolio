document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                
                // Close mobile menu after clicking a link
                const navLinks = document.getElementById("navLinks");
                if (window.innerWidth <= 768) {
                    navLinks.style.display = "none";
                }
            }
        });
    });

    // Mobile menu toggle
    window.toggleMenu = function() {
        var navLinks = document.getElementById("navLinks");
        if (navLinks.style.display === "block") {
            navLinks.style.display = "none";
        } else {
            navLinks.style.display = "block";
        }
    };
    
    // Form submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // Resume popup functionality
    const viewResumeBtn = document.getElementById('view-resume-btn');
    const resumePopup = document.getElementById('resume-popup');
    const closePopup = document.querySelector('.close-popup');
    
    if (viewResumeBtn && resumePopup && closePopup) {
        viewResumeBtn.addEventListener('click', function() {
            resumePopup.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
        });

        closePopup.addEventListener('click', function() {
            resumePopup.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        });

        window.addEventListener('click', function(event) {
            if (event.target === resumePopup) {
                resumePopup.style.display = 'none';
                document.body.style.overflow = 'auto'; // Re-enable scrolling
            }
        });
    }
    
    // Handle window resize for responsiveness
    window.addEventListener('resize', function() {
        const navLinks = document.getElementById("navLinks");
        if (window.innerWidth > 768) {
            navLinks.style.display = "flex";
        } else {
            navLinks.style.display = "none";
        }
    });
    
    // Initialize mobile menu state
    if (window.innerWidth > 768) {
        document.getElementById("navLinks").style.display = "flex";
    }
});
