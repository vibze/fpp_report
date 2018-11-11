$(document).ready(function() {
  swiperContainer = $('.carousel .swiper-container');
  swiper = new Swiper(swiperContainer, {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 5,
      depth: 700,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
});
