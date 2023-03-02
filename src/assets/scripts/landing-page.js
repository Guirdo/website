const navbar = document.querySelector('nav')

navbar.classList.add('position-sticky')

const showNavbar = () => {
  navbar.classList.add('scroll-up')
  navbar.classList.remove('scroll-down')
}

const hideNavbar = () => {
  navbar.classList.remove('scroll-up')
  navbar.classList.add('scroll-down')
}

let lastScrollPosition = 0

const isScrollingDown = () => {
  let scrolledPosition = window.scrollY;
  let isScrollDown;

  if (scrolledPosition > lastScrollPosition) {
    isScrollDown = true;
  } else {
    isScrollDown = false;
  }
  lastScrollPosition = scrolledPosition;
  return isScrollDown;
}

window.addEventListener('scroll',() => {
  if ( isScrollingDown() ) {
    hideNavbar()
  } else {
    showNavbar()
  }
})
