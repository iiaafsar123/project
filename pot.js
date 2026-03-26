// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Navbar Background Change on Scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(15, 23, 42, 0.95)';
            nav.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)';
        } else {
            nav.style.background = 'rgba(15, 23, 42, 0.9)';
            nav.style.boxShadow = 'none';
        }
    });

    // 3. Simple Form Handling & Validation
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;

            // Basic validation check
            if (name && email && message) {
                // Here you would typically send data to a backend
                // For now, let's show a success state
                const submitBtn = contactForm.querySelector('button');
                const originalText = submitBtn.innerText;
                
                submitBtn.innerText = "Sending...";
                submitBtn.style.opacity = "0.7";
                submitBtn.disabled = true;

                setTimeout(() => {
                    alert(`Thanks ${name}! Your message has been sent successfully.`);
                    contactForm.reset();
                    submitBtn.innerText = originalText;
                    submitBtn.style.opacity = "1";
                    submitBtn.disabled = false;
                }, 1500);
            } else {
                alert("Please fill in all fields.");
            }
        });
    }

    // 4. Reveal Animations on Scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Apply basic fade-in to sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "all 0.6s ease-out";
        observer.observe(section);
    });
});