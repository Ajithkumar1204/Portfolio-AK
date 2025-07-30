document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });

  // Optional: auto-close nav on link click
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
    });
  });
});
