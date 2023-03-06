const navbarMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
if (window.innerHeight > window.innerWidth) {
  navLinks.classList.add('hide');
  document.querySelector('h2').parentElement.style.marginLeft = '8px';
}

navbarMenu.addEventListener('click', () => {
  if (navLinks.classList.contains('hide')) {
    navLinks.classList.remove('hide');
  } else {
    navLinks.classList.add('hide');
  }
});
