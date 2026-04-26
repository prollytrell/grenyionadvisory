// =========================
// GRENYION ADVISORY — MODERN INTERACTIONS
// Subtle consulting-site motion: sticky nav, reveal on scroll,
// CTA polish, cards, and lightweight visual depth.
// =========================

(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // =========================
  // STICKY HEADER STATE
  // =========================
  const header = document.querySelector('header');

  function updateHeader() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 12);
  }

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  // =========================
  // ACTIVE NAV BASED ON CURRENT PAGE
  // =========================
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  // =========================
  // AUTO-ENHANCE EXISTING PAGE SECTIONS
  // Adds reveal animation without requiring every HTML page to be rewritten.
  // =========================
  const sections = document.querySelectorAll('section:not(.hero):not(.banner), footer');
  sections.forEach((section, index) => {
    section.classList.add('reveal');
    section.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
  });

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -70px 0px'
    });

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
  }

  // =========================
  // TURN SIMPLE SERVICE/HELP LISTS INTO CARD-LIKE BLOCKS
  // Works with your current HTML without forcing a rewrite.
  // =========================
  document.querySelectorAll('section').forEach((section) => {
    const heading = section.querySelector('h3, h2');
    const list = section.querySelector(':scope > ul');

    if (!heading || !list) return;

    const headingText = heading.textContent.toLowerCase();
    const shouldCardify =
      headingText.includes('help') ||
      headingText.includes('for') ||
      headingText.includes('included') ||
      headingText.includes('services') ||
      headingText.includes('start with');

    if (shouldCardify) {
      list.classList.add('service-grid');
      list.querySelectorAll('li').forEach((item, index) => {
        item.classList.add('service-card');
        item.style.transitionDelay = `${index * 45}ms`;
      });
    }
  });

  // =========================
  // CTA BUTTON RIPPLE EFFECT
  // =========================
  document.querySelectorAll('.cta, button').forEach((btn) => {
    btn.addEventListener('pointerdown', function (event) {
      if (prefersReducedMotion) return;

      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);

      ripple.style.position = 'absolute';
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'rgba(255, 255, 255, 0.38)';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'gaRipple 600ms ease-out';
      ripple.style.pointerEvents = 'none';

      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 650);
    });
  });

  const rippleStyle = document.createElement('style');
  rippleStyle.textContent = `
    @keyframes gaRipple {
      to { transform: scale(2.4); opacity: 0; }
    }
  `;
  document.head.appendChild(rippleStyle);

  // =========================
  // SUBTLE CARD TILT / DEPTH
  // =========================
  if (!prefersReducedMotion) {
    document.querySelectorAll('.card, .service-card').forEach((card) => {
      card.classList.add('tilt-glow');

      card.addEventListener('mousemove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 5;
        const rotateX = ((y / rect.height) - 0.5) * -5;

        card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // =========================
  // FORM QUALITY-OF-LIFE
  // Keeps inquiry prompt helpful without trapping the user.
  // =========================
  const messageField = document.getElementById('message');
  if (messageField) {
    messageField.addEventListener('focus', function () {
      this.dataset.touched = 'true';
    });
  }

  // =========================
  // SMALL HERO PARALLAX GLOW
  // =========================
  const hero = document.querySelector('.hero');
  if (hero && !prefersReducedMotion) {
    window.addEventListener('scroll', () => {
      const offset = Math.min(window.scrollY * 0.12, 60);
      hero.style.backgroundPosition = `center ${offset}px`;
    }, { passive: true });
  }
})();
