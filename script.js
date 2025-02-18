document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Skill Animation
    const skillItems = document.querySelectorAll('.skill-item');
    
    const animateSkills = () => {
        skillItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight - 50) {
                item.style.animation = 'skillFade 0.5s ease forwards';
            }
        });
    };

    window.addEventListener('scroll', animateSkills);

    // Project Hover Effect
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Typing Animation for Hero Section
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero h2');
    
    const typeWriter = (element, text, speed) => {
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, speed);
    };

    typeWriter(heroTitle, "I'm Priyank Patel", 100);
    setTimeout(() => {
        typeWriter(heroSubtitle, 'Transforming ideas into innovative technology', 80);
    }, 2000);
});

 