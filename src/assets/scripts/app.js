const menuButton = document.querySelector('#menuButton')
const navbarLinks = document.querySelector('#navbarLinks')

menuButton.addEventListener('click', () => {
  if (navbarLinks.classList.contains('visible')) {
    navbarLinks.classList.remove('visible')
  } else {
    navbarLinks.classList.add('visible')
  }
})