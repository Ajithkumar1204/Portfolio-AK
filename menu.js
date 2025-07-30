document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Optional: auto-close menu on link click (mobile UX)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
});
