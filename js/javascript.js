document.addEventListener('DOMContentLoaded', function() {
    // --- Script untuk Pergantian Background Hero ---
    const heroSection = document.querySelector('.hero-section');

    const images = [
        '/images/1.jpg',
        '/images/2.jpg',
    ];

    let currentIndex = 0;
    const intervalTime = 5000;

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;
        const imageUrl = images[currentIndex];
        heroSection.style.backgroundImage = `
            linear-gradient(var(--dark-overlay-color), var(--dark-overlay-color)),
            url('${imageUrl}')
        `;
    }

    setInterval(changeBackground, intervalTime);

    // --- Script untuk Navigasi Responsif (Hamburger Menu) ---
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav ul li a'); // Ambil semua link nav

    navToggle.addEventListener('click', () => {
        mainNav.classList.toggle('nav-open');
    });

    // Tutup navigasi saat link diklik (untuk smooth scroll)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('nav-open')) {
                mainNav.classList.remove('nav-open');
            }
        });
    });

    // --- Script untuk Efek Header saat Scroll ---
    const mainHeader = document.querySelector('.main-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Jika scroll lebih dari 50px
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });
});