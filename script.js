// Hamburger Menu Toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

hamburgerBtn.addEventListener('click', function() {
    hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu li a').forEach(link => {
    link.addEventListener('click', function() {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.navbar-container')) {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Sticky Navigation Bar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const navbarCTA = document.querySelector('.nav-cta');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        // navbarCTA.classList.remove('hide-item');
    } else {
        navbar.classList.remove('scrolled');
        // navbarCTA.classList.add('hide-item');
    }
    if (window.scrollY > screen.height-(screen.height*0.4)) {
        // navbar.classList.add('scrolled');
        navbarCTA.classList.remove('hide-item');
    } else {
        // navbar.classList.remove('scrolled');
        navbarCTA.classList.add('hide-item');
    }
});

// Video Modal
const playBtn = document.getElementById('playBtn');
const videoModal = document.getElementById('videoModal');
const videoGerik = document.getElementById('gerik-video');
const closeBtn = document.querySelector('.close');

// Open modal when play button is clicked
playBtn.addEventListener('click', function() {
    videoModal.classList.add('show');
    videoGerik.src = "https://www.youtube.com/embed/K0CHU78rrbk?si=xHG0Jssmq4T9fpW0;start=0"
    document.body.style.overflow = 'hidden';
});

// Close modal when close button is clicked
closeBtn.addEventListener('click', function() {
    videoModal.classList.remove('show');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside the video
videoModal.addEventListener('click', function(e) {
    if (e.target === videoModal) {
        videoModal.classList.remove('show');
        videoGerik.src = ""
        document.body.style.overflow = 'auto';
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && videoModal.classList.contains('show')) {
        videoModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Gesture card interaction
document.querySelectorAll('.gesture-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections for fade-in animation
document.querySelectorAll('.gesture-card, .integration-card, .value-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Parallax effect on hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Responsive Navigation Toggle (for mobile)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Log app info
// console.log('🎯 Gerik - Control Everything with Gestures');
// console.log('WebSocket API: ws://127.0.0.1:2014');
// console.log('Livestream API: http://127.0.0.1:2015');
