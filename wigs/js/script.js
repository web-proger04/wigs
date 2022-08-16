const swiper = new Swiper('.slider-products', {
   loop: true,
   speed: 375,
   navigation: {
      nextEl: '.products__arrow_right',
      prevEl: '.products__arrow_left',
   },
});