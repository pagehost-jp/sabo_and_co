/**
 * SABO & Co Corporate Site - JavaScript
 * =====================================
 * Features:
 * - Scroll animations (IntersectionObserver)
 * - Smooth scroll navigation
 * - Mobile menu toggle
 * - Header scroll effect
 */

document.addEventListener('DOMContentLoaded', () => {
  // ========================================
  // Scroll Animation (IntersectionObserver)
  // ========================================
  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add stagger delay for elements in the same section
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  animatedElements.forEach((el, index) => {
    // Add stagger delay for credo cards and service items
    if (el.closest('.credo-cards') || el.closest('.service-list')) {
      const siblings = el.parentElement.querySelectorAll('.fade-in-up');
      const siblingIndex = Array.from(siblings).indexOf(el);
      el.dataset.delay = siblingIndex * 150;
    }
    observer.observe(el);
  });

  // ========================================
  // Smooth Scroll Navigation
  // ========================================
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        const mobileMenu = document.querySelector('.mobile-menu-overlay');
        if (mobileMenu && mobileMenu.classList.contains('is-open')) {
          mobileMenu.classList.remove('is-open');
          document.body.style.overflow = '';
        }
      }
    });
  });

  // ========================================
  // Mobile Menu Toggle (新しいオーバーレイメニュー)
  // ========================================
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileCloseBtn = document.querySelector('.mobile-close-btn');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-list a');

  // ハンバーガーボタンでメニューを開く
  if (navToggle && mobileMenuOverlay) {
    navToggle.addEventListener('click', () => {
      mobileMenuOverlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
  }

  // 閉じるボタンでメニューを閉じる
  if (mobileCloseBtn && mobileMenuOverlay) {
    mobileCloseBtn.addEventListener('click', () => {
      mobileMenuOverlay.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  }

  // メニューリンクをクリックしたら閉じる
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuOverlay.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });

  // ========================================
  // Header Scroll Effect
  // ========================================
  const header = document.querySelector('.header');
  let lastScroll = 0;

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    // Add/remove scrolled class for styling
    if (currentScroll > 100) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }

    lastScroll = currentScroll;
  };

  // Throttle scroll event
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // ========================================
  // Active Navigation Highlight
  // ========================================
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-list a');

  const highlightNav = () => {
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navItems.forEach(item => {
          item.classList.remove('is-active');
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('is-active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        highlightNav();
      });
    }
  });

  // Initial highlight
  highlightNav();

  // ========================================
  // Persona Tags Animation
  // ========================================
  const personaTags = document.querySelectorAll('.persona-tag');

  personaTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.1}s`;
  });

  // ========================================
  // Console Welcome Message
  // ========================================
  console.log(
    '%c SABO & Co %c https://sabo-and.co ',
    'background: linear-gradient(135deg, #3B82F6, #A855F7); color: white; padding: 8px 12px; border-radius: 4px 0 0 4px; font-weight: bold;',
    'background: #1E293B; color: #94A3B8; padding: 8px 12px; border-radius: 0 4px 4px 0;'
  );
});

/**
 * Utility: Debounce function
 * Limits how often a function can be called
 */
function debounce(func, wait = 100) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Utility: Throttle function
 * Ensures a function is called at most once in a specified time period
 */
function throttle(func, limit = 100) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
