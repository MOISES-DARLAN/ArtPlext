// Scroll Reveal Animations
ScrollReveal().reveal('.hero-content', { delay: 300, distance: '50px', origin: 'bottom' });
ScrollReveal().reveal('.art-item', { delay: 200, interval: 200, distance: '20px', origin: 'bottom' });
ScrollReveal().reveal('.category-button', { delay: 200, interval: 100, distance: '20px', origin: 'top' });
ScrollReveal().reveal('#about p', { delay: 300, distance: '30px', origin: 'left' });
ScrollReveal().reveal('.artist-image', { delay: 400, distance: '30px', origin: 'right' });
ScrollReveal().reveal('.testimonial-item', { delay: 200, interval: 200, distance: '20px', origin: 'bottom' });

// Parallax Effect for Hero Section
window.addEventListener('scroll', function() {
  const parallax = document.querySelector('.hero-bg');
  let scrollPosition = window.pageYOffset;
  parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});

// Sticky Header
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

// GSAP Animations
gsap.from(".gallery-grid", {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".gallery-grid",
    start: "top bottom-=100",
  }
});

gsap.from(".category-button", {
  opacity: 0,
  y: 50,
  duration: 0.5,
  stagger: 0.1,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: "#categories",
    start: "top center+=100",
  }
});
