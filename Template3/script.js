function initNavigation() {
  const heroLinks = document.querySelectorAll('.nav-links a');
  heroLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const target = link.getAttribute('href');
      if (target && target.startsWith('#')) {
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initMarquee() {
  const marquee = document.querySelector('.brand-marquee-track');
  if (marquee) {
    // Duplicate the track HTML for infinite loop seamless scroll
    marquee.innerHTML += marquee.innerHTML;
  }
}

function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animElements = document.querySelectorAll('.scroll-animate');
  animElements.forEach(el => observer.observe(el));
}

function initCartCounter() {
  const cartBadge = document.querySelector('.cart-badge');
  const addButtons = document.querySelectorAll('.product-card:not(.view-more-card) .link');
  
  if (cartBadge && addButtons.length > 0) {
    let cartCount = 0;
    addButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        cartCount += 1;
        cartBadge.textContent = cartCount;
        
        // Cart badge pop animation
        cartBadge.style.transform = 'scale(1.4)';
        setTimeout(() => {
          cartBadge.style.transform = 'scale(1)';
        }, 300);

        // Click visual feedback on the button
        const originalText = btn.textContent;
        btn.textContent = 'Added! 👟';
        btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        btn.style.borderColor = 'transparent';
        
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.style.borderColor = '';
        }, 1200);
      });
    });
  }
}

// Ensure images are lazy-loaded and decoded async for faster mobile performance
function initImageLoading() {
  const imgs = document.querySelectorAll('img');
  imgs.forEach(img => {
    try {
      if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
      if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
    } catch (e) {
      // ignore read-only attributes in some environments
    }
  });
}

// Show/hide navbar on scroll up/down (highly robust, mobile-friendly detection)
function initHeaderScroll() {
  const header = document.querySelector('.topbar');
  if (!header) return;

  let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Avoid running on bounce/elastic scroll (negative values or values larger than max scroll)
    const maxScrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (currentScrollY < 0 || currentScrollY > maxScrollable) {
      return;
    }

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scroll down: hide
      header.classList.add('topbar--hidden');
    } else if (currentScrollY < lastScrollY) {
      // Scroll up: show
      header.classList.remove('topbar--hidden');
    }

    // Always show when near the very top of the page
    if (currentScrollY <= 20) {
      header.classList.remove('topbar--hidden');
    }

    lastScrollY = currentScrollY;
  }, { passive: true });
}

// Responsive mobile burger menu toggle
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isActive);
    });

    // Close menu when clicking a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

// Scroll Spy to highlight the active section in navigation capsule
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  if (sections.length === 0 || navLinks.length === 0) return;

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 160; // offset to trigger active state near top

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    // Fallback logic for when you scroll all the way to the bottom
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
      currentSectionId = 'more';
    }

    // Fallback logic for very top (Home)
    if (window.scrollY < 100) {
      currentSectionId = 'hero';
    }

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${currentSectionId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
}

// Master init function
function init() {
  initNavigation();
  initMarquee();
  initScrollAnimations();
  initCartCounter();
  initHeaderScroll();
  initMobileMenu();
  initImageLoading();
  initScrollSpy();
}

// Fallback checking readyState in case script is loaded dynamically
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
