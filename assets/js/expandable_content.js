$(document).ready(function() {
  $('.expandable-content').each(function(i, el) {
    var container = $(el),
        expandToggle = $('<a class="expand"><span>Подробнее</span><br/><img src="../assets/images/down.png" /></a>');

    expandToggle.insertAfter(container);
    expandToggle.click(function() {
      container.slideDown(function(){
        var swiperContainer = $('> .carousel .swiper-container', container);
        var swiper = new Swiper(swiperContainer, {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true,
          },
          pagination: {
            el: '.swiper-pagination',
          },
        });
      });
      expandToggle.hide();
    });

  });
});
