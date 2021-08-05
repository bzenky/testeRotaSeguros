//Menu Hambúrguer

// const hbMenu = document.querySelector('.hbMenu')

// function toggleHbMenu() {
//   const nav = document.querySelector('.nav')
//   nav.classList.toggle('active')
// }

// hbMenu.addEventListener('click', toggleHbMenu)

//swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
