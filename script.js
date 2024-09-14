document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // If it's the resume link, scroll to the resume section
            if (targetId === '#resume') {
                const resumeSection = document.getElementById('resume');
                resumeSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Form submission (you can add your own logic here)
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });

    const viewResumeBtn = document.getElementById('view-resume-btn');
    const resumePopup = document.getElementById('resume-popup');
    const closePopup = document.querySelector('.close-popup');
    const resumeSection = document.getElementById('resume');

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
});
