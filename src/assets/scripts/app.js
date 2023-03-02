const menuButton = document.querySelector('#menuButton')
const themeButton = document.querySelector('#themeButton')

const navbarLinks = document.querySelector('#navbarLinks')
const themeMenu = document.querySelector('#themeMenu')

const showMenu = () => {
  navbarLinks.classList.add('visible')
}

const hideMenu = () => {
  navbarLinks.classList.remove('visible')
}

const showThemeMenu = () => {
  themeMenu.classList.add('visible')
}

const hideThemeMenu = () => {
  themeMenu.classList.remove('visible')
}

menuButton.addEventListener('click', () => {
  hideThemeMenu()
  if (navbarLinks.classList.contains('visible')) {
    hideMenu()
  } else {
    showMenu()
  }
})

themeButton.addEventListener('click', () => {
  hideMenu()
  if (themeMenu.classList.contains('visible')) {
    hideThemeMenu()
  } else {
    showThemeMenu()
  }
})
