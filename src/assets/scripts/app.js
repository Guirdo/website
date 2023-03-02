const menuButton = document.querySelector('#menuButton')
const themeButton = document.querySelector('#themeButton')

const navbarLinks = document.querySelector('#navbarLinks')
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

document.onload = setTheme();
