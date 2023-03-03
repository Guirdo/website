const menuButton = document.querySelector('#menuButton')
const langButton = document.querySelector('#langButton')
const themeButton = document.querySelector('#themeButton')

const navbarLinks = document.querySelector('#navbarLinks')
const langMenu = document.querySelector('#langMenu')
const themeMenu = document.querySelector('#themeMenu')

const colorThemes = document.querySelectorAll('[name="theme"]');

const storeTheme = function (theme) {
  localStorage.setItem("theme", theme);
};

const setTheme = function () {
  const activeTheme = localStorage.getItem("theme");
  colorThemes.forEach((themeOption) => {
    if (themeOption.id === activeTheme) {
      themeOption.checked = true;
    }
  });
  
  document.documentElement.className = activeTheme;
};

colorThemes.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
    document.documentElement.className = themeOption.id;
  });
});

const showMenu = (element) => {
  element.classList.add('visible')
}

const hideMenu = (element) => {
  element.classList.remove('visible')
}

menuButton.addEventListener('click', () => {
  hideMenu(themeMenu)
  hideMenu(langMenu)
  if (navbarLinks.classList.contains('visible')) {
    hideMenu(navbarLinks)
  } else {
    showMenu(navbarLinks)
  }
})

langButton.addEventListener('click', () => {
  hideMenu(themeMenu)
  hideMenu(navbarLinks)
  if (langMenu.classList.contains('visible')) {
    hideMenu(langMenu)
  } else {
    showMenu(langMenu)
  }
})

themeButton.addEventListener('click', () => {
  hideMenu(navbarLinks)
  hideMenu(langMenu)
  if (themeMenu.classList.contains('visible')) {
    hideMenu(themeMenu)
  } else {
    showMenu(themeMenu)
  }
})

document.onload = setTheme();
