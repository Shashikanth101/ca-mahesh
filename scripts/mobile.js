const navbarMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
navLinks.classList.add('hide');

navbarMenu.addEventListener('click', () => {
  if (navLinks.classList.contains('hide')) {
    navLinks.classList.remove('hide');
  } else {
    navLinks.classList.add('hide');
  }
});
