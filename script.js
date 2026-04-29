// Adds "scrolled" class to header on scroll (used by styles.css for compact header effect)
(function () {
  const header = document.querySelector('header');
  if (!header) return;
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
})();
