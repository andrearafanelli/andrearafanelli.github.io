// Interactive UI Enhancements for Andrea Rafanelli's Website
// Adds smooth animations, scroll effects, and dynamic interactions

(function() {
  'use strict';

  // ============================================================================
  // SCROLL PROGRESS INDICATOR
  // ============================================================================
  
  function updateScrollProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    
    document.documentElement.style.setProperty('--scroll-progress', scrollProgress + '%');
    
    // Add 'scrolled' class to navbar after scrolling
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (scrollTop > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }

  // ============================================================================
  // INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
  // ============================================================================
  
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
          // Optional: stop observing after animation
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.interest-item, .talk-item, .pub-item, .card');
    animatedElements.forEach(el => observer.observe(el));
  }

  // ============================================================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================================================
  
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }

  // ============================================================================
  // PARALLAX EFFECT FOR HERO SECTION
  // ============================================================================
  
  function initParallax() {
    const hero = document.querySelector('.about-hero');
    if (!hero) return;

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.5;
      hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    });
  }

  // ============================================================================
  // INTERACTIVE CURSOR TRAIL (Optional - Subtle Effect)
  // ============================================================================
  
  function initCursorTrail() {
    let cursorTrail = [];
    const trailLength = 5;

    document.addEventListener('mousemove', (e) => {
      // Only on larger screens
      if (window.innerWidth < 768) return;

      cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
      
      if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
      }
    });

    // This is just for tracking - visual effect can be added via CSS
  }

  // ============================================================================
  // BUTTON RIPPLE EFFECT
  // ============================================================================
  
  function initRippleEffect() {
    const buttons = document.querySelectorAll('.btn, .talk-link, .badge');
    
    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple-effect');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
      });
    });
  }

  // ============================================================================
  // TYPING EFFECT FOR TAGLINE (Optional)
  // ============================================================================
  
  function initTypingEffect() {
    const tagline = document.querySelector('.tagline');
    if (!tagline) return;

    const text = tagline.textContent;
    const speed = 50; // ms per character
    
    // Only run once
    if (tagline.dataset.typed) return;
    tagline.dataset.typed = 'true';
    
    tagline.textContent = '';
    tagline.style.opacity = '1';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        tagline.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    };
    
    // Start after a small delay
    setTimeout(typeWriter, 500);
  }

  // ============================================================================
  // CARD TILT EFFECT (3D)
  // ============================================================================
  
  function initCardTilt() {
    const cards = document.querySelectorAll('.profile-card, .interest-item, .card');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -5; // Max 5 degrees
        const rotateY = ((x - centerX) / centerX) * 5;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
      });
    });
  }

  // ============================================================================
  // NAVBAR HIDE ON SCROLL DOWN, SHOW ON SCROLL UP
  // ============================================================================
  
  let lastScrollTop = 0;
  
  function initSmartNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
      } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
      }
      
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);
  }

  // ============================================================================
  // FLOATING ACTION BUTTON (Back to Top)
  // ============================================================================
  
  function initBackToTop() {
    // Create button if it doesn't exist
    let backToTopBtn = document.getElementById('back-to-top');
    
    if (!backToTopBtn) {
      backToTopBtn = document.createElement('button');
      backToTopBtn.id = 'back-to-top';
      backToTopBtn.innerHTML = '↑';
      backToTopBtn.setAttribute('aria-label', 'Back to top');
      document.body.appendChild(backToTopBtn);
    }
    
    // Show/hide based on scroll
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });
    
    // Smooth scroll to top
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ============================================================================
  // INITIALIZE ALL FEATURES
  // ============================================================================
  
  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }
    
    // Initialize all interactive features
    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress);
    
    initScrollAnimations();
    initSmoothScroll();
    // initParallax(); // Uncomment if you want parallax effect
    initRippleEffect();
    // initTypingEffect(); // Uncomment if you want typing effect
    initCardTilt();
    // initSmartNavbar(); // Uncomment if you want auto-hiding navbar
    initBackToTop();
    
    console.log('🎨 Interactive UI initialized');
  }
  
  // Start initialization
  init();

})();
