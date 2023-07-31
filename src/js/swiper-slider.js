const swiper = new Swiper('.swiper', {
  
  slidesPerView: 1,
  spaceBetween: 1,
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 1
    },
    // when window width is >= 375px
    375: {
      slidesPerView: 1,
      spaceBetween: 2
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween:8
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 3,
      spaceBetween: 8
    }
  },
  
  centeredSlides: false,
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // autoHeight: true,

  // If we need pagination
  pagination: {
      el: ('.swiper-pagination','button-reviews'),
      clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ('.swiper-button-next', '.btn-next'),
    prevEl: ('.swiper-button-prev', '.btn-prev')
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});