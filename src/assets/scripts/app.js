const menuButton = document.querySelector('#menuButton')
const themeButton = document.querySelector('#themeButton')

const navbarLinks = document.querySelector('#navbarLinks')
const themeMenu = document.querySelector('#themeMenu')

menuButton.addEventListener('click', () => {
  if (navbarLinks.classList.contains('visible')) {
    navbarLinks.classList.remove('visible')
  } else {
    navbarLinks.classList.add('visible')
  }
})

themeButton.addEventListener('click', () => {
  if (themeMenu.classList.contains('visible')) {
    themeMenu.classList.remove('visible')
  } else {
    themeMenu.classList.add('visible')
  }
})
