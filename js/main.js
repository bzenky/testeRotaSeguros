//Menu Hambúrguer

const hbMenu = document.querySelector('.hbMenu')

function toggleHbMenu() {
  const nav = document.querySelector('.nav')
  nav.classList.toggle('active')
}

hbMenu.addEventListener('click', toggleHbMenu);