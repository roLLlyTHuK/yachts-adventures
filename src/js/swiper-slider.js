const swiper = new Swiper('.swiper', {
  
  slidesPerView: 3,
  spaceBetween: 16,
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 2
    },
    // when window width is >= 375px
    375: {
      slidesPerView: 1,
      spaceBetween: 4
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 6
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 3,
      spaceBetween: 16
    }
  },
  
  centeredSlides: true,
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});